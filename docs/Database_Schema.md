# 🗄️ DATABASE SCHEMA DESIGN: GANK.
**Engine:** PostgreSQL (Relational Database)
**Status:** Production Ready & Locked

---

## 1. Modul Pengguna & Pelanggan (Users & Customers)
*   **`users`** (Staf Internal GANK)
    *   `id` (PK), `name`, `email`, `password_hash`, `role` (ENUM: owner, admin, technician), `status` (active/inactive), `created_at`.
*   **`customers`** (Data Pelanggan)
    *   `id` (PK), `user_id` (FK, nullable), `name`, `phone`, `email`, `address`, `id_card_number`, `created_at`.

## 2. Modul Inventori & Perangkat (Inventory & Devices)
*   **`brands`** & **`device_models`** (Tabel referensi Merk dan Tipe HP).
*   **`inventory_devices`** (Stok HP Bekas)
    *   `id` (PK), `device_model_id` (FK), `imei` (Unique, Wajib), `condition_grade` (A, B, C), `buy_price`, `sell_price`, `status` (ENUM: incoming, qc, listed, sold, returned), `trade_in_customer_id` (FK, nullable).
*   **`imei_blacklist`** (Database Keamanan)
    *   `id` (PK), `imei`, `reason`, `reported_at`.

## 3. Modul Servis & Perbaikan (Repair & Service)
*   **`repair_tickets`** (Tiket Servis)
    *   `id` (PK), `ticket_number`, `customer_id` (FK), `device_model_id` (FK), `imei`, `issue_description`, `estimated_cost`, `status` (ENUM: pending, diagnosing, quoted, approved, repairing, qc, ready, completed, cancelled), `technician_id` (FK), `admin_id` (FK), `warranty_days`, `created_at`.
*   **`ticket_checklists`** (Checklist Fungsional Awal & Akhir)
    *   `id` (PK), `ticket_id` (FK), `type` (initial/final), `item_name`, `is_passed` (boolean), `notes`.
*   **`ticket_evidences`** (Bukti Foto/Video Wajib)
    *   `id` (PK), `ticket_id` (FK), `type` (before, during, after), `file_url`, `uploaded_by` (FK).
*   **`sparepart_usage`** (Pemakaian Sparepart per Tiket)
    *   `id` (PK), `ticket_id` (FK), `sparepart_id` (FK), `quantity`, `total_price`.

## 4. Modul Transaksi & Keuangan (Sales & Payments)
*   **`sales_orders`** (Penjualan HP Bekas)
    *   `id` (PK), `order_number`, `customer_id` (FK), `total_amount`, `restocking_fee`, `final_amount`, `status` (pending, paid, shipped, completed, returned), `payment_method`.
*   **`sales_order_items`**
    *   `id` (PK), `order_id` (FK), `inventory_device_id` (FK), `price`.
*   **`payments`** (Riwayat Pembayaran)
    *   `id` (PK), `reference_id`, `payment_type` (repair_dp, repair_full, sales_purchase, refund), `amount`, `status`, `gateway_ref`, `created_at`.

## 5. Modul Legalitas & Dokumen (BAST & Trade-In)
*   **`bast_records`** (Berita Acara Serah Terima Digital)
    *   `id` (PK), `reference_type` (repair / trade_in), `reference_id`, `physical_condition_notes`, `factory_reset_agreed` (boolean), `customer_signature_url`, `created_at`.
*   **`trade_in_records`** (Detail Tukar Tambah)
    *   `id` (PK), `customer_id` (FK), `device_model_id` (FK), `imei`, `appraised_price`, `status` (pending, approved, rejected_icloud), `created_at`.

## 6. Modul Pengaturan Sistem (System Settings)
*   **`settings`**
    *   `id` (PK), `key` (misal: restocking_fee_percent, dead_stock_penalty_days), `value`.

---

## 🔗 RELASI KUNCI (KEY RELATIONSHIPS)
1.  **Alur Trade-In:** Approve `trade_in_records` -> Auto-create `inventory_devices`.
2.  **Alur Servis:** 1 `repair_tickets` bisa punya multiple `payments` (DP & Pelunasan).
3.  **Keamanan IMEI:** Cross-check otomatis ke `imei_blacklist` saat input IMEI di tabel manapun.
4.  **Dead Stock:** Cron-job mengecek `repair_tickets` (status: ready) vs `settings` (dead_stock_penalty_days).