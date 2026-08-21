# 📄 DOKUMEN SPESIFIKASI BISNIS: GANK.
**Versi:** 1.0 (Final Concept Locked)  
**Fokus Bisnis:** Servis HP & Jual Beli HP Bekas (Trade-in & Sales)

---

## 1. ARSITEKTUR SISTEM
Sistem dibagi menjadi 2 entitas terpisah dengan akses yang saling eksklusif:

*   **Public System (Customer-Facing):** 
    Website dengan Landing Page bergaya *Parallax* (CSS-based untuk performa mobile). Berfungsi sebagai etalase katalog HP bekas, booking servis online, dan tracking status.
*   **Internal System (Internet System):** 
    Dashboard operasional berbasis web yang dilindungi *Login & Role-Based Access Control (RBAC)*. Hanya bisa diakses oleh staf internal GANK.

---

## 2. ALUR BISNIS INTI (CORE FLOWS)

### A. Alur Jual Beli HP Bekas (Inventory & Sales)
HP Masuk (Beli Putus/Trade-in) -> Validasi IMEI & Factory Reset -> QC & Grading (Tentukan Grade A/B/C) -> Listing di Public System -> Customer Checkout -> Verifikasi Pembayaran -> Packing & Pengiriman -> Klaim Garansi (Jika ada).

### B. Alur Servis HP (Repair Flow)
Booking Online/Walk-in -> HP Diterima & Cetak BAST (Berita Acara Serah Terima) -> Input Data & Checklist Fungsional Awal -> Diagnosa -> Penawaran Harga ke Customer -> **CABANG:**
*   *Jika Tolak:* HP dikembalikan (Gratis biaya diagnosa).
*   *Jika Setuju:* Customer bayar DP/Lunas -> Pengerjaan Teknisi -> Checklist Fungsional Akhir & Upload Bukti Foto/Video -> Notifikasi Selesai -> Pelunasan (jika DP) -> Pengambilan HP (Tanda tangan digital) -> Garansi Aktif.

---

## 3. ATURAN BISNIS & KEBIJAKAN (BUSINESS RULES)

*   **Biaya Diagnosa:** 100% GRATIS, baik customer setuju maupun menolak perbaikan.
*   **Kerusakan Tambahan:** Jika ada temuan baru saat bongkar, sistem menjeda pengerjaan. Customer diberi waktu 3x24 jam untuk merespons penawaran ulang. Jika lewat, HP dikembalikan dalam kondisi awal.
*   **Dead Stock Servis:** HP yang tidak diambil >7 hari setelah selesai akan kena denda penyimpanan. Jika >60 hari, HP dianggap hangus dan menjadi hak GANK.
*   **Garansi Servis:** Fleksibel tergantung jenis kerusakan/sparepart (di-set saat pembuatan tiket).
*   **Garansi Jual HP Bekas:** Berupa *perbaikan di tempat* (bukan tukar unit). Durasi garansi mesin (misal 7-30 hari), fisik/baterai 0 hari.
*   **Retur HP Bekas:** Bisa dilakukan dengan potongan harga (*restocking fee* 10-20%).
*   **Trade-in Bermasalah:** Jika HP trade-in ternyata iCloud/IMEI Blokir setelah di-reset, transaksi batal sepihak/ditagih ke customer (diatur via klausul BAST).
*   **Pembatalan Servis:** DP yang sudah dibayar customer hangus jika customer membatalkan sepihak di tengah jalan.

---

## 4. HAK AKSES PENGGUNA (USER ROLES)

1.  **Owner:** Akses penuh. Melihat laporan keuangan, laba/rugi, manajemen user, dan pengaturan sistem.
2.  **Admin:** Mengelola operasional harian. Menerima HP (servis/jual/trade-in), melakukan QC/Grading HP bekas, memproses kasir/pembayaran, mencetak BAST, dan komunikasi dengan customer.
3.  **Teknisi:** Hanya melihat tiket servis yang ditugaskan. Melakukan diagnosa, update status perbaikan, request sparepart, dan upload bukti foto/video. Tidak bisa akses data keuangan/inventori penjualan.

---

## 5. MEKANISME KEAMANAN & KEPERCAYAAN (TRUST & SECURITY)

*   **Database IMEI Internal:** Validasi wajib setiap HP masuk untuk mencegah penadahan barang curian/blokir.
*   **BAST Digital:** Berita Acara Serah Terima digital yang memuat kondisi fisik HP dan klausul "Factory Reset", ditandatangani digital oleh customer.
*   **Bukti Visual Wajib:** Sistem mengunci status "Selesai" pada tiket servis kecuali teknisi mengupload minimal 2 foto/video (sebelum & sesudah).
*   **Privasi Data:** Data customer dienkripsi. Sistem memaksa admin mencentang persetujuan penghapusan data (Factory Reset) sebelum HP masuk ruang servis.