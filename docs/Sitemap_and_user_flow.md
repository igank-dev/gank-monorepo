# 🗺️ SITEMAP & USER FLOW: GANK.
**Status:** Production Ready & Locked

---

## A. PUBLIC SYSTEM (Akses: Semua Orang / Customer)
*Fokus: Kecepatan, Kepercayaan, dan Kemudahan Transaksi.*

1. **Landing Page (`/`)**
   * Hero Section (Efek Parallax), Headline, CTA ("Servis HP" & "Lihat Katalog").
   * Keunggulan GANK, Testimoni, Tracker Cepat (Input No. Tiket).
2. **Katalog HP Bekas (`/katalog`)**
   * Filter (Merk, Harga, RAM, Grade). List Item dengan Badge Grade & Garansi.
   * Detail Produk (`/katalog/[id]`): Spek, foto asli, detail garansi, CTA "Beli" / "Trade-In".
3. **Layanan Servis (`/servis`)**
   * Form Booking (Pilih model, deskripsi rusak, jadwal walk-in/pick-up).
   * Tracking (`/servis/track`): Timeline visual status perbaikan.
4. **Trade-In / Jual HP (`/trade-in`)**
   * Kalkulator Estimasi, Form Pengajuan (Upload foto, input IMEI, jadwal cek fisik).
5. **Dashboard Pelanggan (`/akun`)**
   * Login/Register (OTP/Email), Riwayat Servis & Garansi, Status Pesanan.

---

## B. INTERNAL SYSTEM (Akses: Owner, Admin, Teknisi)
*Fokus: Efisiensi Operasional, Pencegahan Fraud, Pencatatan Rapi.*
*URL: `internal.gank.id` atau `gank.id/admin`*

1. **Halaman Login (`/login`)**
   * Auto-redirect berdasarkan `role` user.
2. **Dashboard Utama (`/dashboard`)**
   * Ringkasan Tiket Masuk, Stok Menipis, Total Pendapatan (Owner/Admin).
   * Antrean Pengerjaan (Teknisi).
3. **Modul Servis (`/servis`)**
   * List Tiket (Tabel dengan filter).
   * Detail Tiket (Workflow): Info & BAST -> Diagnosa & Checklist -> Pengerjaan (Wajib upload foto) -> Keuangan (DP/Hangus).
4. **Modul Inventori & QC (`/inventori`)**
   * List Stok (Filter Grade).
   * Input Stok Baru (Auto-cek IMEI blacklist, upload foto, set Grade, set Harga).
   * QC Checklist (Wajib factory reset & bebas iCloud).
5. **Modul Kasir & Transaksi (`/kasir`)**
   * Proses Pembayaran (Cari Tiket/Order -> Input bayar -> Cetak struk/BAST akhir).
   * Proses Retur (Auto-hitung restocking fee -> Refund).
6. **Modul Laporan & Pengaturan (`/settings`)**
   * Laporan Laba/Rugi, Performa Teknisi, Stok Mati.
   * Pengaturan (Ubah % restocking fee, durasi garansi default, manajemen user).