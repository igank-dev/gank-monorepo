# 📋 PRODUCT REQUIREMENTS DOCUMENT (PRD): GANK.
**Versi:** 1.0 (Production Ready)  
**Tipe Produk:** Web Application (Progressive Web App Ready)  
**Target Launch:** MVP (Minimum Viable Product)

---

## 🎯 1. PRODUCT OVERVIEW

### 1.1 Product Vision
GANK. adalah platform digital terintegrasi yang menyediakan layanan servis HP transparan dan marketplace HP bekas terpercaya, dengan fokus pada **kepercayaan (trust)**, **transparansi**, dan **efisiensi operasional**.

### 1.2 Product Goals (OKR)
- **Goal 1:** Meningkatkan kepercayaan customer melalui transparansi proses servis (tracking real-time, bukti foto/video).
- **Goal 2:** Mengurangi waktu operasional admin & teknisi hingga 50% melalui digitalisasi BAST, checklist, dan invoice.
- **Goal 3:** Mencegah fraud internal & eksternal melalui validasi IMEI, BAST digital, dan audit trail.

### 1.3 Target Users (Personas)

#### Persona 1: "Rina si Customer" (25 tahun, pekerja kantoran)
- **Kebutuhan:** HP cepat diperbaiki, harga jelas, tidak perlu datang bolak-balik ke toko.
- **Pain Points:** Takut HP-nya ditukar sparepart-nya, tidak tahu status servis, harga tidak transparan.
- **Goal:** Bisa tracking servis dari kantor, mendapat kepastian harga sebelum setuju.

#### Persona 2: "Budi si Admin/Owner" (35 tahun, pemilik toko)
- **Kebutuhan:** Mengontrol operasional dari mana saja, mencegah kecurangan staf, laporan keuangan akurat.
- **Pain Points:** Pencatatan manual di buku, sulit melacak HP yang tidak diambil-ambil, garansi diklaim seenaknya.
- **Goal:** Semua tercatat di sistem, bisa pantau omzet harian via HP.

#### Persona 3: "Andi si Teknisi" (28 tahun, teknisi senior)
- **Kebutuhan:** Fokus memperbaiki HP tanpa gangguan administrasi, sparepart selalu tersedia.
- **Pain Points:** Harus bolak-balik ke admin untuk minta sparepart, lupa checklist fungsi setelah servis.
- **Goal:** Tiket servis jelas, request sparepart cepat, tidak perlu urus uang.

---

## 🚀 2. FEATURES & USER STORIES

### MODUL A: PUBLIC SYSTEM (Customer-Facing)

#### A.1 Landing Page
**User Story:**  
*"Sebagai pengunjung, saya ingin melihat halaman utama yang menarik dan informatif agar saya yakin GANK. adalah toko yang terpercaya."*

**Acceptance Criteria:**
- [ ] Hero section memiliki efek Parallax yang smooth (60fps) di desktop.
- [ ] Efek Parallax otomatis disabled di layar < 768px (mobile) untuk performa.
- [ ] Loading time < 3 detik di koneksi 4G.
- [ ] Terdapat 2 CTA utama: "Servis HP" dan "Lihat Katalog".
- [ ] Ada section "Quick Tracker" yang bisa input nomor tiket tanpa login.
- [ ] Responsive di semua ukuran layar (mobile, tablet, desktop).

---

#### A.2 Katalog HP Bekas
**User Story:**  
*"Sebagai calon pembeli, saya ingin memfilter HP berdasarkan harga, merk, dan grade kondisi agar saya bisa menemukan HP yang sesuai budget dan ekspektasi."*

**Acceptance Criteria:**
- [ ] Filter tersedia: Merk, Harga (range slider), RAM, ROM, Grade (A/B/C).
- [ ] Setiap card HP menampilkan: Foto utama, Nama, Harga, Badge Grade, Badge Garansi.
- [ ] Infinite scroll atau pagination (max 20 item per halaman).
- [ ] HP yang sudah terjual otomatis hilang dari katalog (status `sold`).
- [ ] SEO-friendly URL: `/katalog/iphone-13-pro-128gb-grade-a-imei-123`.

---

#### A.3 Detail Produk HP Bekas
**User Story:**  
*"Sebagai calon pembeli, saya ingin melihat detail lengkap HP termasuk foto asli dan riwayat garansi agar saya yakin sebelum membeli."*

**Acceptance Criteria:**
- [ ] Galeri foto minimal 5 sudut (depan, belakang, samping, layar nyala, IMEI).
- [ ] Spesifikasi lengkap: Merk, Tipe, RAM, ROM, Grade, Warna, Baterai Health.
- [ ] Info garansi: "Garansi mesin 7 hari, fisik 0 hari".
- [ ] Tombol "Beli Sekarang" → redirect ke checkout.
- [ ] Tombol "Ajukan Trade-In" → redirect ke form trade-in dengan HP ini sebagai pembanding.
- [ ] IMEI ditampilkan sebagian saja (misal: `356789*****12345`) untuk keamanan.

---

#### A.4 Booking Servis Online
**User Story:**  
*"Sebagai customer, saya ingin booking servis online agar saya tidak perlu antri di toko dan teknisi sudah siap saat saya datang."*

**Acceptance Criteria:**
- [ ] Form input: Nama, No. HP, Merk HP, Model HP, IMEI, Deskripsi Kerusakan.
- [ ] Pilihan metode: "Datang ke Toko (Walk-in)" atau "Pick-up ke Alamat".
- [ ] Jika pilih "Pick-up": input alamat lengkap + jadwal pick-up (date picker).
- [ ] Setelah submit: Sistem generate nomor tiket unik (format: `GANK-YYYYMMDD-XXXX`).
- [ ] Notifikasi WhatsApp otomatis terkirim ke customer berisi nomor tiket.
- [ ] Data customer otomatis tersimpan di tabel `customers`.

---

#### A.5 Tracking Servis
**User Story:**  
*"Sebagai customer yang sedang servis, saya ingin melacak status HP saya secara real-time agar saya tidak perlu menelepon toko berulang kali."*

**Acceptance Criteria:**
- [ ] Input: Nomor Tiket ATAU Nomor HP (salah satu cukup).
- [ ] Menampilkan timeline visual dengan 7 tahap:
  1. Diterima
  2. Sedang Diagnosa
  3. Menunggu Persetujuan (dengan estimasi biaya)
  4. Sedang Diperbaiki
  5. Quality Control
  6. Siap Diambil
  7. Selesai
- [ ] Setiap tahap menampilkan timestamp (kapan status berubah).
- [ ] Jika status = "Menunggu Persetujuan", ada tombol "Setuju" / "Tolak".
- [ ] Jika status = "Siap Diambil", ada info: "Ambil dalam 7 hari untuk hindari denda".

---

#### A.6 Trade-In (Tukar Tambah)
**User Story:**  
*"Sebagai pemilik HP lama, saya ingin mengetahui estimasi harga HP saya agar saya bisa memutuskan apakah worth it untuk trade-in."*

**Acceptance Criteria:**
- [ ] Kalkulator estimasi: Pilih Merk → Model → Kondisi (Mulus/Lecet Halus/Lecet Kasar/Rusak) → Sistem tampilkan range harga (misal: Rp 2.000.000 - Rp 2.500.000).
- [ ] Form pengajuan: Upload 5 foto (depan, belakang, layar nyala, samping, IMEI).
- [ ] Input IMEI wajib (validasi format 15 digit).
- [ ] Setelah submit: Status = "Pending", admin akan hubungi via WA untuk jadwal cek fisik.
- [ ] Tidak ada transaksi online, semua finalisasi di toko.

---

#### A.7 Dashboard Pelanggan (Akun)
**User Story:**  
*"Sebagai customer terdaftar, saya ingin melihat riwayat servis dan pembelian saya agar saya bisa mengklaim garansi dengan mudah."*

**Acceptance Criteria:**
- [ ] Register/Login via No. HP (OTP WhatsApp) atau Email.
- [ ] Tab "Riwayat Servis": List semua tiket servis, klik untuk detail.
- [ ] Tab "Garansi Aktif": List HP yang masih dalam masa garansi, dengan tombol "Klaim Garansi".
- [ ] Tab "Pesanan Saya": List pembelian HP bekas, status pengiriman.
- [ ] Tab "Profil": Edit nama, alamat, no. HP.

---

### MODUL B: INTERNAL SYSTEM (Staf GANK)

#### B.1 Login & Autentikasi
**User Story:**  
*"Sebagai staf GANK, saya ingin login dengan aman agar hanya saya yang bisa mengakses sistem internal."*

**Acceptance Criteria:**
- [ ] Login via Email + Password.
- [ ] Password di-hash dengan bcrypt (min 10 rounds).
- [ ] Setelah login: JWT token disimpan di HttpOnly Cookie (bukan localStorage).
- [ ] Refresh token otomatis jika access token expired (silent refresh).
- [ ] Auto-redirect ke dashboard sesuai role (Owner/Admin/Teknisi).
- [ ] Logout menghapus cookie & blacklist token di backend.
- [ ] Session expired setelah 7 hari (wajib login ulang).

---

#### B.2 Dashboard Utama
**User Story:**  
*"Sebagai Owner/Admin, saya ingin melihat ringkasan operasional hari ini agar saya bisa mengambil keputusan cepat."*

**Acceptance Criteria:**
- [ ] Widget: "Tiket Servis Masuk Hari Ini" (jumlah + list).
- [ ] Widget: "Tiket Menunggu Persetujuan > 24 jam" (alert kuning).
- [ ] Widget: "HP Siap Diambil > 7 hari" (alert merah, hitung denda).
- [ ] Widget: "Total Pendapatan Hari Ini" (Rupiah).
- [ ] Widget: "Stok HP Grade A Menipis" (< 3 unit).
- [ ] Untuk Teknisi: Widget "Tiket Ditugaskan ke Saya" (list).

---

#### B.3 Modul Servis (Tiket Management)
**User Story:**  
*"Sebagai Admin, saya ingin mengelola tiket servis dari awal sampai selesai agar tidak ada HP yang terlantar."*

**Acceptance Criteria:**
- [ ] **List Tiket:** Tabel dengan kolom: No. Tiket, Customer, Device, Status, Teknisi, Tanggal Masuk.
- [ ] **Filter:** Status, Tanggal, Teknisi, Search by No. Tiket/IMEI.
- [ ] **Detail Tiket (Tab-based):**
  - **Tab Info & BAST:** Data customer, kondisi fisik awal, tanda tangan digital (gambar).
  - **Tab Diagnosa:** Checklist fungsional awal (20+ item: Kamera, Speaker, WiFi, dll), input estimasi biaya.
  - **Tab Pengerjaan:** Teknisi update status, request sparepart, upload foto before/after.
  - **Tab QC:** Checklist fungsional akhir, tanda tangan QC.
  - **Tab Keuangan:** Status pembayaran (DP/Lunas/Hangus), riwayat transaksi.
- [ ] **Action Buttons:**
  - "Kirim Estimasi ke Customer" → trigger WA notification.
  - "Tandai Selesai" → wajib upload minimal 2 foto.
  - "Cetak BAST" → generate PDF.
- [ ] **Auto-action:**
  - Jika customer tolak estimasi → status = "Cancelled", HP siap diambil.
  - Jika > 72 jam tidak ada respons → auto-cancel, notifikasi admin.
  - Jika > 7 hari tidak diambil → hitung denda Rp 10.000/hari.
  - Jika > 60 hari tidak diambil → status = "Hangus", jadi hak GANK.

---

#### B.4 Modul Inventori & QC
**User Story:**  
*"Sebagai Admin, saya ingin mengelola stok HP bekas dengan grading yang jelas agar customer tahu persis apa yang mereka beli."*

**Acceptance Criteria:**
- [ ] **List Stok:** Tabel dengan filter Grade (A/B/C), Status (Incoming/QC/Listed/Sold).
- [ ] **Input Stok Baru (Beli Putus/Trade-in):**
  - Scan/input IMEI → auto-cek ke `imei_blacklist`.
  - Jika IMEI blacklist → tampilkan alert merah, blokir input.
  - Upload 5 foto wajib.
  - Input: Harga Beli, Harga Jual, Grade (A/B/C), Catatan kondisi.
  - Centang "Factory Reset Done" (wajib).
  - Centang "iCloud/FRP Lock Free" (wajib).
- [ ] **QC Checklist:** 15+ item (Layar, Touchscreen, Kamera, Speaker, Mic, WiFi, Bluetooth, Sensor, dll).
- [ ] **Auto-action:**
  - Setelah status = "Listed" → otomatis muncul di Public System katalog.
  - Jika dijual → status otomatis berubah jadi "Sold".

---

#### B.5 Modul Kasir & Transaksi
**User Story:**  
*"Sebagai Admin, saya ingin memproses pembayaran dengan cepat dan akurat agar customer puas dan pencatatan rapi."*

**Acceptance Criteria:**
- [ ] **Proses Pembayaran Servis:**
  - Cari tiket by No. Tiket / No. HP.
  - Tampilkan rincian: Jasa + Sparepart = Total.
  - Input: Metode Bayar (Tunai/Transfer/QRIS), Nominal.
  - Jika DP: sisa tagihan otomatis tercatat.
  - Generate invoice PDF.
- [ ] **Proses Penjualan HP Bekas:**
  - Pilih HP dari stok (status = "Listed").
  - Input data customer (atau pilih dari database).
  - Hitung total, input pembayaran.
  - Generate invoice + BAST digital.
  - Status HP otomatis berubah jadi "Sold".
- [ ] **Proses Retur HP Bekas:**
  - Input No. Order.
  - Validasi: Apakah dalam 7 hari? Apakah ada kerusakan fisik baru?
  - Auto-hitung restocking fee (misal 15%).
  - Generate refund note.
- [ ] **Integrasi Payment Gateway (Midtrans/Xendit):**
  - Generate QRIS / VA link untuk pembayaran online.
  - Webhook untuk auto-update status pembayaran.

---

#### B.6 Modul Laporan (Khusus Owner)
**User Story:**  
*"Sebagai Owner, saya ingin melihat laporan keuangan dan performa teknisi agar saya bisa evaluasi bisnis."*

**Acceptance Criteria:**
- [ ] **Laporan Keuangan:**
  - Laba Rugi Harian/Mingguan/Bulanan.
  - Breakdown: Pendapatan Servis vs Pendapatan Jual HP.
  - HPP Sparepart vs Margin.
  - Export ke Excel/PDF.
- [ ] **Laporan Performa Teknisi:**
  - Jumlah tiket selesai per teknisi.
  - Rata-rata waktu pengerjaan.
  - Tingkat keberhasilan (vs gagal).
- [ ] **Laporan Stok:**
  - Stok mati (> 60 hari tidak terjual).
  - Stok menipis (< 3 unit per grade).
  - Movemen stok (masuk/keluar).

---

#### B.7 Modul Pengaturan
**User Story:**  
*"Sebagai Owner, saya ingin mengubah aturan bisnis tanpa perlu developer agar saya bisa beradaptasi cepat."*

**Acceptance Criteria:**
- [ ] **Pengaturan Umum:**
  - Persentase restocking fee (default 15%).
  - Durasi garansi default per jenis sparepart.
  - Durasi dead stock (default 60 hari).
  - Denda penyimpanan per hari (default Rp 10.000).
- [ ] **Manajemen User:**
  - Tambah/Hapus/Nonaktifkan staf.
  - Assign role (Owner/Admin/Teknisi).
  - Reset password staf.
- [ ] **Manajemen IMEI Blacklist:**
  - Tambah IMEI ke blacklist (dengan alasan).
  - Hapus IMEI dari blacklist.

---

## 🎨 3. UI/UX REQUIREMENTS

### 3.1 Design Principles
- **Clean & Professional:** Tidak ramai, fokus pada informasi penting.
- **Mobile-First:** 80% user akses via HP, jadi desain harus optimal di mobile.
- **Fast:** Loading < 3 detik, interaksi < 100ms.
- **Accessible:** Kontras warna WCAG AA, font minimal 16px di mobile.

### 3.2 Color Palette
- **Primary:** `#2563EB` (Blue 600) - Kepercayaan, profesional.
- **Secondary:** `#10B981` (Emerald 500) - Sukses, garansi.
- **Warning:** `#F59E0B` (Amber 500) - Perhatian, pending.
- **Danger:** `#EF4444` (Red 500) - Error, blacklist, hangus.
- **Neutral:** `#6B7280` (Gray 500) - Teks sekunder.

### 3.3 Typography
- **Font Family:** Inter (sans-serif) - Modern, mudah dibaca.
- **Heading:** Bold, hierarchy jelas (H1 > H2 > H3).
- **Body:** Regular, line-height 1.6.

### 3.4 Component Library
- **Public System:** Custom components dengan Tailwind + Framer Motion.
- **Internal System:** Shadcn UI + Radix UI (konsisten, aksesibel).

---

## ⚙️ 4. TECHNICAL REQUIREMENTS

### 4.1 Performance
- **Lighthouse Score:** Min 90 (Performance, Accessibility, Best Practices, SEO).
- **First Contentful Paint (FCP):** < 1.5 detik.
- **Time to Interactive (TTI):** < 3 detik.
- **Bundle Size:** < 200KB (gzipped) untuk critical JS.

### 4.2 Security
- **HTTPS:** Wajib untuk semua halaman.
- **Authentication:** JWT + HttpOnly Cookie + Refresh Token.
- **Password:** Bcrypt (min 10 rounds), min 8 karakter.
- **Input Validation:** Zod (backend) + React Hook Form (frontend).
- **SQL Injection:** Protected by Prisma ORM.
- **XSS:** React auto-escape + CSP headers.
- **CSRF:** SameSite cookie + CSRF token.
- **Rate Limiting:** Max 100 request/menit per IP.

### 4.3 SEO (Public System)
- **Meta Tags:** Dynamic title, description, OG image per halaman.
- **Sitemap:** Auto-generate `sitemap.xml`.
- **Robots.txt:** Allow all, except `/admin/*`.
- **Structured Data:** JSON-LD untuk Product (HP bekas).
- **Canonical URL:** Mencegah duplicate content.

### 4.4 Analytics
- **Google Analytics 4:** Track page view, conversion, bounce rate.
- **Meta Pixel:** Track Facebook/Instagram ads conversion.
- **Custom Events:** Track "Booking Servis", "Beli HP", "Trade-In".

---

## 📊 5. SUCCESS METRICS (KPI)

### 5.1 Business Metrics
- **Monthly Active Users (MAU):** Target 1.000 di bulan ke-3.
- **Conversion Rate (Booking Servis):** Target 15% dari visitor.
- **Conversion Rate (Beli HP):** Target 5% dari visitor katalog.
- **Average Order Value (AOV):** Target Rp 2.500.000.

### 5.2 Operational Metrics
- **Average Repair Time:** Target < 24 jam (dari diterima sampai selesai).
- **Customer Satisfaction (CSAT):** Target 4.5/5 (via survey post-servis).
- **Dead Stock Rate:** Target < 10% dari total stok.
- **Warranty Claim Rate:** Target < 5% dari total servis.

### 5.3 Technical Metrics
- **Uptime:** Target 99.9% (max 8 jam downtime/bulan).
- **Error Rate:** Target < 0.1% dari total request.
- **Page Load Time:** Target < 3 detik (95th percentile).

---

## 🚫 6. OUT OF SCOPE (MVP)

Fitur-fitur berikut **TIDAK** termasuk dalam MVP, tapi akan dikembangkan di fase 2:

- [ ] Aplikasi Mobile Native (iOS/Android) - pakai PWA dulu.
- [ ] Multi-cabang / Multi-store - fokus 1 toko dulu.
- [ ] Integrasi dengan marketplace (Tokopedia/Shopee) - manual dulu.
- [ ] Chat live dengan teknisi - pakai WA dulu.
- [ ] AI-based diagnostics - manual dulu.
- [ ] Subscription model - one-time transaction dulu.
- [ ] Multi-currency - IDR saja.
- [ ] Multi-language - Bahasa Indonesia saja.

---

## 🗓️ 7. TIMELINE & ROADMAP

### Phase 1: MVP (Bulan 1-2)
- [x] Setup Monorepo & Database
- [ ] Authentication (Login/Register)
- [ ] Public: Landing Page, Katalog, Detail HP
- [ ] Public: Booking Servis, Tracking
- [ ] Internal: Dashboard, Modul Servis, Modul Inventori
- [ ] Internal: Modul Kasir, Modul Laporan
- [ ] Testing & Bug Fixing
- [ ] Deploy to Production

### Phase 2: Enhancement (Bulan 3-4)
- [ ] Dashboard Pelanggan (Akun)
- [ ] Trade-In Online
- [ ] Integrasi Payment Gateway (Midtrans)
- [ ] WhatsApp Gateway (Notifikasi Otomatis)
- [ ] Export Laporan ke Excel/PDF

### Phase 3: Scale (Bulan 5-6)
- [ ] Multi-cabang Support
- [ ] Aplikasi Mobile (React Native / Flutter)
- [ ] AI-based Diagnostics
- [ ] Marketplace Integration

---

## 📝 8. GLOSSARY

- **BAST:** Berita Acara Serah Terima (dokumen legal serah terima HP).
- **IMEI:** International Mobile Equipment Identity (nomor unik 15 digit tiap HP).
- **Grade A/B/C:** Klasifikasi kondisi fisik HP (A = Mulus, B = Lecet Halus, C = Lecet Kasar).
- **Dead Stock:** HP yang tidak terjual > 60 hari.
- **Restocking Fee:** Potongan harga saat retur HP (kompensasi penyusutan).
- **Factory Reset:** Menghapus semua data di HP ke pengaturan pabrik.
- **iCloud Lock / FRP Lock:** Fitur keamanan Apple/Android yang mengunci HP jika lupa akun.

---

## ✅ 9. APPROVAL

Dokumen ini telah disetujui oleh:

- **Product Owner:** [Nama Anda]
- **Lead Developer:** [Nama Developer / Anda]
- **Designer:** [Nama Designer / Anda]
- **Tanggal:** [Tanggal Hari Ini]

**Status:** ✅ APPROVED FOR DEVELOPMENT