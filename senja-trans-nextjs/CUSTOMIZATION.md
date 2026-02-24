# 🎨 Panduan Kustomisasi Website Senja Trans

## 📋 Daftar Isi

1. [Struktur File](#struktur-file)
2. [Mengganti Konten](#mengganti-konten)
3. [Mengganti Warna](#mengganti-warna)
4. [Mengganti Gambar](#mengganti-gambar)
5. [Mengganti Font](#mengganti-font)
6. [SEO & Analytics](#seo--analytics)
7. [Deployment](#deployment)

---

## 📂 Struktur File

### Komponen Utama

```
src/components/
├── layout/
│   ├── Navbar.tsx      # Menu navigasi
│   └── Footer.tsx      # Footer / kaki website
├── sections/
│   ├── Hero.tsx        # Bagian utama (hero)
│   ├── Layanan.tsx     # Layanan yang ditawarkan
│   ├── Armada.tsx      # Daftar armada kendaraan
│   ├── HargaPackage.tsx # Paket harga
│   ├── Keunggulan.tsx  # Keunggulan Senja Trans
│   ├── Testimoni.tsx   # Testimoni pelanggan
│   ├── FAQ.tsx         # Pertanyaan umum
│   └── CTA.tsx         # Tombol WhatsApp floating
└── ui/
    └── Button.tsx      # Komponen tombol reusable
```

---

## ✏️ Mengganti Konten

### 1. Mengganti Informasi Kontak

**File:** `src/components/layout/Footer.tsx`

```typescript
// Cari dan ganti bagian ini:
const footerLinks = {
  kontak: [
    {
      icon: Phone,
      label: "+62 819-19510808",  // Ganti nomor telepon
      href: "tel:+6281919510808",
    },
    {
      icon: Mail,
      label: "senjatrans.official@gmail.com",  // Ganti email
      href: "mailto:senjatrans.official@gmail.com",
    },
    {
      icon: MapPin,
      label: "Jl. Nangka 7, Jatiraden, ...",  // Ganti alamat
      href: "https://maps.google.com/?q=-6.3541376155010525,106.92018696551871",
      external: true,
    },
  ],
};
```

### 2. Mengganti Nomor WhatsApp

Cari di SEMUA file komponen dan ganti:
```
https://wa.me/6281919510808
```

Gunakan Find & Replace di code editor Anda.

### 3. Mengganti Layanan

**File:** `src/components/sections/Layanan.tsx`

```typescript
const services = [
  {
    icon: Bus,
    title: "Sewa Transportasi",  // Ganti nama layanan
    description: "...",           // Ganti deskripsi
    features: [                   // Ganti fitur
      "Armada variatif",
      "Driver profesional",
      // ...
    ],
    popular: false,  // Set true untuk layanan unggulan
    cta: "Sewa Sekarang",
  },
  // ...
];
```

### 4. Mengganti Data Armada

**File:** `src/components/sections/Armada.tsx`

```typescript
const armadaData = [
  {
    id: 1,
    name: "Hiace Premio",      // Nama kendaraan
    image: "/assets/images/1.png",  // Path gambar
    capacity: 14,              // Jumlah penumpang
    facilities: ["AC", "WiFi", ...],  // Fasilitas
    price: "Rp 1.200.000",     // Harga
    period: "/hari",           // Periode harga
    category: "small",         // small | medium | large
  },
  // ...
];
```

### 5. Mengganti Paket Harga

**File:** `src/components/sections/HargaPackage.tsx`

```typescript
const pricingPlans = {
  harian: [
    {
      name: "Basic",
      price: "Rp 800.000",
      period: "/hari",
      description: "...",
      features: [
        "Armada Hiace (14 seat)",
        // ...
      ],
      popular: false,  // Set true untuk paket yang direkomendasikan
      cta: "Pilih Basic",
    },
    // ...
  ],
  mingguan: [
    // ...
  ],
};
```

### 6. Mengganti Testimoni

**File:** `src/components/sections/Testimoni.tsx`

```typescript
const testimonials = [
  {
    id: 1,
    name: "Titih",
    avatar: "T",  // Inisial atau gunakan foto
    color: "from-orange-400 to-orange-500",  // Warna background avatar
    city: "Jakarta",
    service: "Sewa Transportasi",
    rating: 5,
    text: "Senja Trans benar-benar solusi...",
  },
  // ...
];
```

### 7. Mengganti FAQ

**File:** `src/components/sections/FAQ.tsx`

```typescript
const faqs = [
  {
    question: "Bagaimana cara memesan...?",
    answer: "Anda dapat memesan dengan mudah...",
    category: "pemesanan",  // Untuk filter: pemesanan | harga | armada | layanan | pembayaran
  },
  // ...
];
```

### 8. Mengganti Keunggulan

**File:** `src/components/sections/Keunggulan.tsx`

```typescript
const advantages = [
  {
    icon: Shield,
    title: "Armada Terawat & Modern",
    description: "...",
    image: "/assets/images/1.png",
    stats: { value: 100, suffix: "%", label: "Kondisi Prima" },
    reverse: false,  // true untuk layout gambar di kanan
  },
  // ...
];
```

---

## 🎨 Mengganti Warna

### File: `tailwind.config.ts`

```typescript
colors: {
  // Warna Brand
  primary: {
    DEFAULT: "#FF7B00",  // Warna utama (orange)
    dark: "#E65C00",     // Warna hover
  },
  secondary: {
    DEFAULT: "#1A1A2E",  // Warna gelap (navy)
  },
  accent: {
    DEFAULT: "#FFD700",  // Warna accent (gold)
  },
  
  // Warna Background & Text
  background: "#FAFAFA",
  foreground: "#2D2D2D",
  muted: "#6B7280",
}
```

### Contoh Kombinasi Warna Lain

**Tema Biru:**
```typescript
primary: { DEFAULT: "#2563EB", dark: "#1D4ED8" }
secondary: { DEFAULT: "#1E293B" }
accent: { DEFAULT: "#3B82F6" }
```

**Tema Hijau:**
```typescript
primary: { DEFAULT: "#16A34A", dark: "#15803D" }
secondary: { DEFAULT: "#1F2937" }
accent: { DEFAULT: "#22C55E" }
```

**Tema Merah:**
```typescript
primary: { DEFAULT: "#DC2626", dark: "#B91C1C" }
secondary: { DEFAULT: "#1C1917" }
accent: { DEFAULT: "#EF4444" }
```

---

## 🖼️ Mengganti Gambar

### 1. Persiapan Gambar

- Format: JPG untuk foto, PNG untuk logo/transparan
- Ukuran maksimal: 500KB per gambar
- Compress dengan [TinyPNG](https://tinypng.com/)
- Rasio aspect yang disarankan:
  - Hero: 16:9 (1920x1080)
  - Armada: 4:3 (800x600)
  - Testimoni: 1:1 (400x400)

### 2. Upload Gambar

1. Simpan gambar di folder: `public/assets/images/`
2. Ganti nama file sesuai atau update path di komponen
3. Restart development server

### 3. Update Path Gambar

```typescript
// Contoh di Hero.tsx
const heroImages = [
  "/assets/images/1.png",  // Ganti dengan file Anda
  "/assets/images/2.png",
  // ...
];

// Contoh di Armada.tsx
{
  name: "Hiace Premio",
  image: "/assets/images/hiace-premio.jpg",  // Ganti path
  // ...
}
```

### 4. Update Logo

1. Ganti file: `public/assets/images/logo/logo.png`
2. Update ukuran di `src/components/layout/Navbar.tsx`:

```typescript
<Image
  src="/assets/images/logo/logo.png"
  alt="Senja Trans Logo"
  width={120}  // Sesuaikan lebar
  height={45}  // Sesuaikan tinggi
  className="object-contain"
  priority
/>
```

---

## 🔤 Mengganti Font

### File: `src/app/layout.tsx`

```typescript
import { Montserrat, Inter } from "next/font/google";

// Font Heading (judul)
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],  // Weight yang tersedia
});

// Font Body (teks)
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
```

### Font Google Lainnya

1. Pilih font di [Google Fonts](https://fonts.google.com/)
2. Import di layout.tsx:

```typescript
import { Poppins, Roboto } from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
```

3. Update `tailwind.config.ts`:

```typescript
fontFamily: {
  heading: ["var(--font-poppins)"],
  body: ["var(--font-roboto)"],
},
```

---

## 🔍 SEO & Analytics

### 1. Update Metadata

**File:** `src/app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: {
    default: "Senja Trans - Jalan-Jalan Ingat Senjatrans",
    template: "%s | Senja Trans",
  },
  description: "Solusi transportasi terpercaya untuk sewa kendaraan, open trip, dan private trip...",
  keywords: ["sewa bus Jakarta", "sewa minibus Bekasi", ...],
  openGraph: {
    images: ["/assets/images/Hero image.png"],
    // ...
  },
};
```

### 2. Google Analytics

1. Buat komponen baru: `src/components/GoogleAnalytics.tsx`

```typescript
"use client";

import Script from "next/script";

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
      />
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `,
        }}
      />
    </>
  );
}
```

2. Import di `src/app/layout.tsx`:

```typescript
import GoogleAnalytics from "@/components/GoogleAnalytics";

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <GoogleAnalytics />
        {/* ... */}
      </head>
      <body>{children}</body>
    </html>
  );
}
```

### 3. Google Search Console

1. Submit sitemap: `https://senjatrans.com/sitemap.xml`
2. Verifikasi domain di [Google Search Console](https://search.google.com/search-console)

---

## 🚀 Deployment

### Opsi 1: Vercel (Recommended)

1. Push code ke GitHub
2. Buka [Vercel](https://vercel.com/)
3. Connect repository GitHub
4. Deploy otomatis
5. Setup custom domain di Vercel dashboard

### Opsi 2: Netlify

1. Build project: `npm run build`
2. Upload folder `.next` ke Netlify
3. Atau connect GitHub untuk auto-deploy

### Opsi 3: Hosting Sendiri (VPS)

```bash
# Install dependencies
npm install

# Build production
npm run build

# Start server
npm start
```

Atau gunakan PM2:

```bash
npm install -g pm2
pm2 start npm --name "senja-trans" -- start
pm2 save
pm2 startup
```

---

## 🛠️ Tips & Best Practices

### 1. Performance

- Selalu compress gambar sebelum upload
- Gunakan WebP format jika memungkinkan
- Lazy load untuk gambar di bawah fold

### 2. Accessibility

- Gunakan alt text untuk semua gambar
- Pastikan kontras warna cukup (min 4.5:1)
- Support keyboard navigation

### 3. Mobile

- Test di berbagai ukuran layar
- Pastikan touch target minimal 44x44px
- Hindari horizontal scroll

### 4. Browser Support

- Test di Chrome, Firefox, Safari, Edge
- Gunakan [Can I Use](https://caniuse.com/) untuk cek compatibility

---

## 📞 Support

Untuk bantuan lebih lanjut:

- **Email:** senjatrans.official@gmail.com
- **WhatsApp:** +62 819-19510808

---

**Last Updated:** Februari 2025
**Version:** 1.0.0
