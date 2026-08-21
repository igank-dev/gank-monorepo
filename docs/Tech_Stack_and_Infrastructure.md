# 🏗️ TECH STACK & INFRASTRUKTUR: GANK.
**Strategi:** Modern JS/TS Stack + Optimized Free Tier (Zero-Cost MVP)

---

## 1. FRONTEND
*   **Public System (Etalase & Landing Page):**
    *   **Framework:** Next.js (React) dengan App Router (SSR untuk SEO).
    *   **Styling & Animasi:** Tailwind CSS + Framer Motion (Untuk efek Parallax yang mulus & ringan).
    *   **Hosting:** Vercel (Free Hobby Tier - 100GB bandwidth).
*   **Internal System (Dashboard Staf):**
    *   **Framework:** React + Vite (Lebih ringan, fokus fungsionalitas).
    *   **UI Components:** Shadcn UI + Radix UI (Tampilan profesional & aksesibel).
    *   **Data Tables:** TanStack Table (Handling ribuan data IMEI/Tiket).

## 2. BACKEND (The Brain)
*   **Runtime & Framework:** Node.js + NestJS (TypeScript). Struktur rapi, type-safe, cocok untuk business logic kompleks.
*   **Authentication:** JWT + Refresh Tokens (HttpOnly Cookies).
*   **Hosting:** Railway.app (Pakai $5 free credit/bulan) ATAU Render.com (Free tier, pakai cron-job.org untuk mencegah server tidur).

## 3. DATABASE & STORAGE
*   **Database:** PostgreSQL via Neon.tech (Serverless Postgres, Free 3GB, Auto-suspend).
*   **Object Storage (Foto/Video):** Cloudflare R2 (Free 10GB, **GRATIS biaya egress/bandwidth keluar**).

## 4. INTEGRASI PIHAK KETIGA (3rd Party APIs)
*   **WhatsApp Notifikasi:** Meta WhatsApp Cloud API (Official, Free 1.000 service conversations/bulan).
*   **Email Transaksional (BAST/Invoice):** Resend.com (Free 3.000 emails/bulan).
*   **Payment Gateway:** Midtrans / Xendit (Pay-as-you-go, gratis setup, potong admin fee hanya saat ada transaksi).
*   **Background Jobs (Cron):** cron-job.org (Gratis, untuk trigger timer denda dead stock).

---

## ⚠️ CATATAN BIAYA WAJIB
*   **Infrastruktur Server/DB:** Rp 0 (Memanfaatkan Free Tier).
*   **Domain (gank.id / gank.co.id):** ~Rp 150.000 - 250.000 / tahun (Sudah dibeli).