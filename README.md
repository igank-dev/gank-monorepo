# GANK. - Public & Internal System

Sistem terintegrasi untuk manajemen bisnis HP bekas dan servis elektronik, terdiri dari **Public Website** (untuk pelanggan) dan **Internal System** (untuk operasional tim).

---

## 📋 Daftar Isi

- [Gambaran Umum](#gambaran-umum)
- [Struktur Project](#struktur-project)
- [Prasyarat](#prasyarat)
- [Setup Development](#setup-development)
- [Deploy ke Vercel](#deploy-ke-vercel)
  - [Opsi A: Deploy via Vercel CLI](#opsi-a-deploy-via-vercel-cli)
  - [Opsi B: Deploy via GitHub Integration](#opsi-b-deploy-via-github-integration)
- [Konfigurasi Environment Variables](#konfigurasi-environment-variables)
- [Custom Domain](#custom-domain)
- [Post-Deploy Checklist](#post-deploy-checklist)
- [Troubleshooting](#troubleshooting)
- [Demo Credentials](#demo-credentials)

---

## 🎯 Gambaran Umum

### Public System (`/public-system`)
Website publik untuk pelanggan dengan fitur:
- 🏠 Landing Page dengan hero section dan CTA
- 📱 Katalog HP Bekas dengan filter (Merk, Grade, Harga)
- 🔍 Detail Produk dengan spesifikasi lengkap & IMEI terverifikasi
- 🛠️ Booking Servis (Walk-in / Pick-up)
- 📊 Tracking Servis Real-time (7 tahap)
- 💰 Trade-In Program
- 👤 Dashboard Pelanggan

### Internal System (`/internal-system`)
Dashboard internal untuk tim operasional dengan fitur:
- 🔐 Authentication & Role-Based Access Control (RBAC)
- 📈 Dashboard dengan statistik real-time
- 🎫 Manajemen Tiket Servis
- 📦 Inventori HP Bekas (Grading A/B/C)
- 💵 Kasir & Pembayaran
- ⚙️ Pengaturan Sistem

**Roles:**
- **Owner**: Akses penuh ke semua fitur
- **Admin**: Manajemen servis, inventori, kasir
- **Technician**: Update status servis & diagnosa

---

## 📁 Struktur Project

```
/workspace
├── public-system/          # Website publik (React + Vite + TS)
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Halaman utama
│   │   ├── App.tsx         # Routing configuration
│   │   └── main.tsx        # Entry point
│   ├── public/             # Static assets
│   ├── package.json
│   ├── tsconfig.json
│   ├── tailwind.config.js
│   └── vite.config.ts
│
├── internal-system/        # Internal dashboard (React + Vite + TS)
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── pages/          # Halaman dashboard
│   │   ├── context/        # Auth & state management
│   │   ├── App.tsx         # Routing & RBAC
│   │   └── main.tsx        # Entry point
│   ├── public/
│   ├── package.json
│   ├── tsconfig.json
│   ├── tailwind.config.js
│   └── vite.config.ts
│
├── docs/                   # Dokumentasi asli
└── README.md               # Panduan ini
```

---

## ✅ Prasyarat

Pastikan Anda telah menginstall:

1. **Node.js** (versi 18.x atau lebih baru)
   ```bash
   node --version  # Minimal v18.0.0
   ```

2. **npm** atau **yarn**
   ```bash
   npm --version  # Minimal v9.0.0
   ```

3. **Vercel CLI** (opsional, untuk deploy via terminal)
   ```bash
   npm install -g vercel
   ```

4. **Git** (untuk version control)
   ```bash
   git --version
   ```

5. **Akun Vercel** (gratis di [vercel.com](https://vercel.com))

---

## 🚀 Setup Development

### 1. Clone Repository (jika belum)

```bash
cd /workspace
git clone <repository-url> .
```

### 2. Install Dependencies

#### Public System
```bash
cd public-system
npm install
```

#### Internal System
```bash
cd ../internal-system
npm install
```

### 3. Jalankan Development Server

#### Public System
```bash
cd public-system
npm run dev
# Akses: http://localhost:5173
```

#### Internal System
```bash
cd internal-system
npm run dev
# Akses: http://localhost:5174
```

### 4. Build untuk Production

#### Public System
```bash
cd public-system
npm run build
# Output: dist/
```

#### Internal System
```bash
cd internal-system
npm run build
# Output: dist/
```

---

## ☁️ Deploy ke Vercel

### Opsi A: Deploy via Vercel CLI (Cepat & Mudah)

#### Step 1: Login ke Vercel
```bash
vercel login
```
Pilih metode login (GitHub, GitLab, Bitbucket, atau Email).

#### Step 2: Deploy Public System
```bash
cd public-system
vercel --prod
```

**Prompt yang akan muncul:**
```
? Set up and deploy "~/workspace/public-system"? [Y/n] → Y
? Which scope do you want to deploy to? → Pilih akun Anda
? Link to existing project? [y/N] → N (untuk project baru)
? What's your project's name? → gank-public
? In which directory is your code located? → ./
? Want to override the settings? → N

Detected framework: Vite
Build Command: npm run build
Output Directory: dist
```

#### Step 3: Deploy Internal System
```bash
cd ../internal-system
vercel --prod
```

**Prompt:**
```
? Set up and deploy "~/workspace/internal-system"? [Y/n] → Y
? Which scope do you want to deploy to? → Pilih akun Anda
? Link to existing project? [y/N] → N
? What's your project's name? → gank-internal
? In which directory is your code located? → ./
? Want to override the settings? → N

Detected framework: Vite
Build Command: npm run build
Output Directory: dist
```

#### Step 4: Dapatkan URL Deploy
Setelah deploy selesai, Vercel akan menampilkan:
```
🔍  Inspect: https://vercel.com/<username>/gank-public/xxxxx
✅  Production: https://gank-public.vercel.app
✅  Production: https://gank-internal.vercel.app
```

---

### Opsi B: Deploy via GitHub Integration (Recommended untuk CI/CD)

#### Step 1: Push Code ke GitHub

```bash
cd /workspace
git init
git add .
git commit -m "Initial commit: GANK Public & Internal System"
git branch -M main
git remote add origin https://github.com/<username>/gank-systems.git
git push -u origin main
```

#### Step 2: Hubungkan GitHub ke Vercel

1. Buka [vercel.com/new](https://vercel.com/new)
2. Klik **"Import Git Repository"**
3. Pilih repository `gank-systems`
4. **Configure Project** untuk Public System:
   - **Project Name**: `gank-public`
   - **Framework Preset**: Vite
   - **Root Directory**: `public-system`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Klik **"Deploy"**

#### Step 3: Deploy Internal System

Ulangi langkah di atas dengan konfigurasi:
- **Project Name**: `gank-internal`
- **Root Directory**: `internal-system`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

#### Step 4: Auto-Deploy on Push
Setiap kali Anda push ke branch `main`, Vercel akan otomatis deploy:
```bash
git add .
git commit -m "Update fitur tracking"
git push origin main
# Vercel akan auto-deploy dalam ~30 detik
```

---

## 🔧 Konfigurasi Environment Variables

Jika aplikasi membutuhkan environment variables (misal: API keys, database URL):

### Via Vercel Dashboard

1. Buka project di [vercel.com](https://vercel.com)
2. Masuk ke **Settings** → **Environment Variables**
3. Tambahkan variabel:
   ```
   VITE_API_URL=https://api.gank.id
   VITE_APP_NAME=GANK
   ```
4. Klik **"Save"**
5. **Redeploy** untuk menerapkan perubahan

### Via `.env` File (Development Only)

⚠️ **Jangan commit file `.env` ke Git!**

#### Public System (`public-system/.env`)
```env
VITE_API_URL=https://api.gank.id
VITE_APP_NAME=GANK
```

#### Internal System (`internal-system/.env`)
```env
VITE_API_URL=https://api.gank.id
VITE_AUTH_SECRET=your-secret-key
```

Untuk production, gunakan **Environment Variables** di dashboard Vercel.

---

## 🌐 Custom Domain

### Step 1: Tambahkan Domain di Vercel

1. Buka project di Vercel Dashboard
2. Masuk ke **Settings** → **Domains**
3. Masukkan domain Anda:
   - `gank.id` (root domain)
   - `www.gank.id` (subdomain)
   - `internal.gank.id` (untuk internal system)

### Step 2: Konfigurasi DNS

Tambahkan record berikut di DNS provider Anda (Cloudflare, Namecheap, dll):

#### Untuk Root Domain (`gank.id`)
```
Type: A
Name: @
Value: 76.76.21.21
TTL: Auto
```

#### Untuk Subdomain (`www.gank.id`)
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: Auto
```

#### Untuk Internal System (`internal.gank.id`)
```
Type: CNAME
Name: internal
Value: cname.vercel-dns.com
TTL: Auto
```

### Step 3: Verifikasi
Tunggu propagasi DNS (biasanya < 5 menit), lalu klik **"Verify"** di Vercel.

---

## ✅ Post-Deploy Checklist

- [ ] **Test semua halaman** di production
  - Public: `/`, `/katalog`, `/servis`, `/servis/track`
  - Internal: `/login`, `/dashboard`, `/servis`, `/inventori`
  
- [ ] **Verifikasi responsive design** di mobile & desktop

- [ ] **Test form submission** (booking servis, login)

- [ ] **Cek console errors** di browser DevTools

- [ ] **Setup monitoring** (Vercel Analytics, Sentry)

- [ ] **Backup database** (jika menggunakan external DB)

- [ ] **Setup SSL certificate** (otomatis di Vercel)

- [ ] **Konfigurasi redirect** (jika perlu)
  ```json
  {
    "rewrites": [
      { "source": "/api/:path*", "destination": "https://api.gank.id/:path*" }
    ]
  }
  ```

- [ ] **Enable Password Protection** untuk Internal System (opsional)
  - Settings → Deployment Protection → Vercel Authentication

---

## 🐛 Troubleshooting

### Build Failed
**Error:** `Build failed with exit code 1`

**Solusi:**
```bash
# Test build lokal terlebih dahulu
cd public-system
npm run build

# Jika error, periksa log detail
npm run build -- --debug
```

### Module Not Found
**Error:** `Cannot find module 'react'`

**Solusi:**
```bash
npm install
rm -rf node_modules package-lock.json
npm install
```

### Environment Variables Tidak Terbaca
**Solusi:**
- Pastikan prefix `VITE_` untuk Vite
- Redeploy setelah menambah env vars
- Cek di **Settings → Environment Variables**

### 404 After Deploy
**Solusi:**
- Tambahkan file `vercel.json` di root project:
  ```json
  {
    "rewrites": [{ "source": "/(.*)", "destination": "/" }]
  }
  ```

### CORS Error
**Solusi:**
- Konfigurasi CORS di backend API Anda
- Atau gunakan Vercel rewrites untuk proxy

---

## 👤 Demo Credentials

### Internal System Login

| Role | Email | Password | Akses |
|------|-------|----------|-------|
| Owner | `owner@gank.id` | `password123` | Full Access |
| Admin | `admin@gank.id` | `password123` | Servis, Inventori, Kasir |
| Technician | `tech@gank.id` | `password123` | Servis Only |

⚠️ **Ganti password default sebelum production!**

---

## 📞 Support

Jika mengalami kendala:

1. Cek dokumentasi resmi:
   - [Vercel Docs](https://vercel.com/docs)
   - [Vite Docs](https://vitejs.dev)
   - [React Router](https://reactrouter.com)

2. Lihat logs deploy di Vercel Dashboard

3. Test lokal dengan `npm run dev` sebelum deploy

---

## 📄 License

© 2024 GANK. All rights reserved.

---

**Happy Deploying! 🚀**
