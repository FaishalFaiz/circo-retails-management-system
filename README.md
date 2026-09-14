# 🛒 Circo — Solusi Digital Kasir & Keuangan UMKM

> **"Kelola Toko Nggak Pakai Neko-Neko!"**
> *Platform Point-of-Sale (POS) dan manajemen keuangan berbasis web yang ringan, adaptif, dan ramah pengguna untuk Toko Kelontong, Toko Madura, serta UMKM di Indonesia.*

---

## 📌 Ringkasan Proyek

**Circo** adalah aplikasi web POS (*Point of Sale*) tanpa perangkat keras tambahan (*hardware-free*) yang dirancang khusus untuk memangkas kesenjangan digital pada sektor UMKM dan retail kecil. Mengusung tema **"Architecting the Future: Create Digital Solutions for Actual Problems"** pada sub-tema **Ekonomi**, Circo mengubah smartphone, tablet, atau komputer biasa menjadi mesin kasir canggih, pengelola stok dual-gudang, dan pembuat laporan laba/rugi otomatis secara *real-time*.

---

## ✨ Fitur-Fitur Utama

- ⚡ **Digital Cashier (Zero-Hardware POS):** Transaksi cepat lewat browser HP/PC, pencarian produk intuitif, integrasi pembacaan barcode via kamera, dan pembuatan struk digital.
- 📦 **Smart Inventory & Dual-Storage:** Monitoring jumlah stok di etalase toko dan gudang penyimpanan secara *real-time* lengkap dengan indikator batas minim stok.
- 📊 **Laporan Laba/Rugi & Modal Otomatis:** Visualisasi omset harian/bulanan, perhitungan modal usaha (*capital*), serta analisis produk paling laris dan ter-lambat terjual.
- 📖 **Pencatatan Kasbon Digital:** Fitur khusus toko kelontong untuk mencatat utang/piutang pelanggan secara rapi tanpa risik kehilangan data buku manual.
- 💳 **Siap QRIS & Pembayaran Non-Tunai:** Mendukung pembayaran digital instan untuk mendukung percepatan inklusi keuangan UMKM.


---

## 🛠️ Teknologi & Library yang Digunakan

Proyek ini dibangun menggunakan **HTML5, CSS3 (Tailwind CSS)**, dan **JavaScript (jQuery)** dengan memanfaatkan daftar library yang diizinkan oleh panitia:

| Library / Plugin | Versi | Kegunaan |
| :--- | :--- | :--- |
| **Tailwind CSS** | v3.x | Framework Utility-First CSS untuk UI yang responsif |
| **jQuery** | v4.0 | Manipulasi DOM & Injeksi Komponen Reusable |

---

## 📱 Responsivitas & Tampilan Layar

Web desain Circo telah diuji dan dioptimalkan secara penuh untuk mendukung minimal tiga resolusi layar sesuai ketentuan kompetisi:

- 📱 **Mobile:** `390 × 844 px`
- 📱 **Tablet:** `820 × 1180 px`
- 💻 **Desktop:** `1440 × 1024 px`

---

## 📄 Halaman-Halaman Utama (Page Structure)

Sesuai syarat teknis kompetisi, website ini mencakup 4 halaman utama:

1. **`index.html` (Landing Page):** Landing page informatif yang memuat Hero section, Social Proof, Core Benefits, Fitur Unggulan, Testimoni, dan CTA.
2. **`dashboard.html` (Dashboard Page):** Halaman utama produk dimana semua fitur Circo bisa diakses lewat halaman ini.


---

## 📁 Struktur Folder Proyek

```text
circo-smart-retail-management-system/
├── assets/
│   ├── icons/
│   ├── image/
│   ├── logo-icon.svg
│   ├── Logo-White.svg
│   └── Logo.svg
├── components/
├── akun.html
├── bantuan.html
├── dashboard.html
├── index.html
├── laporan.html
├── login.html
├── pelanggan-tambah.html
├── pelanggan.html
├── produk-edit.html
├── produk-tambah.html
├── produk.html
├── profil-toko.html
├── README.md
├── register.html
├── transaksi-tambah.html
└── transaksi.html