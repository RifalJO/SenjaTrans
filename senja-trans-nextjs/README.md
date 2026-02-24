# Senja Trans - Next.js Website

Website modern untuk PT. Senja Trans Nusantara menggunakan Next.js 14 dengan desain UI/UX yang conversion-focused.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Icons:** Lucide React + React Icons
- **Font:** Google Fonts (Montserrat + Inter)
- **TypeScript:** Strict mode

## 📋 Prerequisites

Pastikan Anda telah menginstall:

- Node.js 20.x atau lebih baru
- npm 10.x atau lebih baru

## 🛠️ Instalasi

### 1. Install Dependencies

```bash
cd senja-trans-nextjs
npm install
```

### 2. Jalankan Development Server

```bash
npm run dev
```

Website akan berjalan di [http://localhost:3000](http://localhost:3000)

### 3. Build untuk Production

```bash
npm run build
npm start
```

## 📁 Struktur Folder

```
src/
├── app/
│   ├── layout.tsx          # Root layout + metadata SEO
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles
│   ├── sitemap.ts          # XML sitemap untuk SEO
│   └── not-found.tsx       # 404 page (optional)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky navbar + mobile menu
│   │   └── Footer.tsx      # Multi-column footer
│   ├── sections/
│   │   ├── Hero.tsx        # Hero section dengan animated background
│   │   ├── Layanan.tsx     # Services section
│   │   ├── Armada.tsx      # Fleet gallery dengan filter
│   │   ├── HargaPackage.tsx # Pricing tiers
│   │   ├── Keunggulan.tsx  # Advantages section
│   │   ├── Testimoni.tsx   # Testimonials carousel
│   │   ├── FAQ.tsx         # Accordion FAQ
│   │   └── CTA.tsx         # Floating WhatsApp button
│   └── ui/
│       └── Button.tsx      # Reusable button component
├── lib/
│   └── utils.ts            # Utility functions (cn)
└── types/
    └── index.ts            # TypeScript types (optional)

public/
├── assets/
│   └── images/             # Semua gambar armada dan logo
├── manifest.json           # PWA manifest
└── robots.txt              # Robots.txt untuk SEO
```

## 🎨 Design System

### Color Palette

```css
Primary: #FF7B00 (Orange)
Primary Dark: #E65C00
Secondary: #1A1A2E (Dark Navy)
Accent: #FFD700 (Gold)
Background: #FAFAFA
Text: #2D2D2D
Muted: #6B7280
```

### Typography

- **Heading:** Montserrat (Bold)
- **Body:** Inter (Regular/Medium)

### Spacing

- Section padding: `py-20` mobile, `py-28` desktop
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`

## ✨ Fitur Utama

### 1. Navbar
- Sticky dengan blur backdrop (glassmorphism)
- Progress bar scroll di bagian atas
- Mobile menu dengan smooth slide animation
- Active section indicator

### 2. Hero Section
- Animated gradient background
- Typewriter animation untuk tagline
- Floating statistics dengan counter animation
- Dual CTA buttons

### 3. Armada Gallery
- Filter berdasarkan kapasitas
- Modal lightbox untuk detail kendaraan
- Fasilitas dan harga per kendaraan

### 4. Pricing Package
- Toggle Harian/Mingguan
- 3 tier pricing (Basic, Standard, Premium)
- Pre-filled WhatsApp message per paket

### 5. Testimonials Carousel
- Auto-sliding dengan manual navigation
- Rating stars dan Google Reviews badge
- Additional testimonials grid

### 6. FAQ Accordion
- Search functionality
- Category filter
- Smooth expand/collapse animation

### 7. Floating CTA
- WhatsApp button dengan pulse animation
- Tooltip saat hover
- Muncul setelah scroll > 300px

## 🔧 Kustomisasi

### Mengganti Gambar

1. Ganti gambar di folder `public/assets/images/`
2. Update referensi path di komponen terkait
3. Pastikan ukuran gambar optimal untuk web (compress dengan TinyPNG)

### Mengganti Konten

- **Hero:** Edit file `src/components/sections/Hero.tsx`
- **Layanan:** Edit file `src/components/sections/Layanan.tsx`
- **Armada:** Edit file `src/components/sections/Armada.tsx`
- **Harga:** Edit file `src/components/sections/HargaPackage.tsx`
- **Testimoni:** Edit file `src/components/sections/Testimoni.tsx`
- **FAQ:** Edit file `src/components/sections/FAQ.tsx`

### Mengganti Warna Brand

Edit file `tailwind.config.ts`:

```ts
colors: {
  primary: {
    DEFAULT: "#FF7B00", // Ganti dengan warna brand Anda
    dark: "#E65C00",
  },
  // ...
}
```

### Mengganti Nomor WhatsApp

Cari dan ganti di semua file komponen:
```
https://wa.me/6281919510808
```

### Mengganti Alamat dan Kontak

Edit file `src/components/layout/Footer.tsx` dan `src/app/layout.tsx`

## 📊 SEO Checklist

- [x] Metadata lengkap (title, description, OG tags)
- [x] JSON-LD structured data (LocalBusiness)
- [x] Sitemap.xml
- [x] Robots.txt
- [x] Semantic HTML
- [x] Alt text untuk semua gambar
- [x] Mobile responsive
- [x] Fast loading (next/image optimization)

## 🚀 Deployment

### Vercel (Recommended)

1. Push code ke GitHub
2. Connect repository di Vercel
3. Deploy otomatis

### Manual Deployment

```bash
npm run build
# Upload folder .next ke hosting yang support Next.js
```

## 📈 Performance Optimization

- Gunakan `next/image` untuk semua gambar
- Lazy loading untuk komponen berat
- Code splitting otomatis oleh Next.js
- Font optimization dengan `next/font`

## 🐛 Troubleshooting

### Build Error

```bash
# Hapus node_modules dan .next
rm -rf node_modules .next
npm install
npm run build
```

### TypeScript Error

```bash
# Check type errors
npx tsc --noEmit
```

## 📝 License

© 2025 PT. Senja Trans Nusantara. All rights reserved.

## 👨‍💻 Developer

Dibuat dengan ❤️ untuk Senja Trans

---

**Untuk pertanyaan lebih lanjut, hubungi:**
- Email: senjatrans.official@gmail.com
- WhatsApp: +62 819-19510808
