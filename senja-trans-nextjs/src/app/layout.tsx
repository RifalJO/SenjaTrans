import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

// Google Fonts
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://senjatrans.com"),
  title: {
    default: "Senja Trans - Jalan-Jalan Ingat Senjatrans",
    template: "%s | Senja Trans",
  },
  description:
    "PT. Senja Trans Nusantara - Solusi transportasi terpercaya untuk sewa kendaraan, open trip, dan private trip. Armada terawat, driver profesional, dan pelayanan terbaik untuk rombongan wisata, keluarga, dan dinas kantor.",
  keywords: [
    "Senja Trans",
    "sewa bus Jakarta",
    "sewa minibus Bekasi",
    "open trip Indonesia",
    "private trip",
    "rental mobil rombongan",
    "transportasi wisata",
    "sewa kendaraan dinas",
  ],
  authors: [{ name: "Senja Trans" }],
  creator: "Senja Trans",
  publisher: "PT. Senja Trans Nusantara",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://senjatrans.com",
    siteName: "Senja Trans",
    title: "Senja Trans - Jalan-Jalan Ingat Senjatrans",
    description:
      "Solusi transportasi terpercaya untuk sewa kendaraan, open trip, dan private trip dengan armada terawat dan driver profesional.",
    images: [
      {
        url: "/assets/images/Hero image.png",
        width: 1200,
        height: 630,
        alt: "Senja Trans - Armada Transportasi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Senja Trans - Jalan-Jalan Ingat Senjatrans",
    description:
      "Solusi transportasi terpercaya untuk sewa kendaraan, open trip, dan private trip.",
    images: ["/assets/images/Hero image.png"],
  },
  icons: {
    icon: "/assets/images/logo/logo.ico",
    apple: "/assets/images/logo/logo.png",
  },
  manifest: "/manifest.json",
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "PT. Senja Trans Nusantara",
  "alternateName": "Senja Trans",
  "description":
    "Solusi transportasi terpercaya untuk sewa kendaraan, open trip, dan private trip dengan armada terawat dan driver profesional.",
  "url": "https://senjatrans.com",
  "telephone": "+6281919510808",
  "email": "senjatrans.official@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jl. Nangka 7, Jatiraden",
    "addressLocality": "Jatisampurna",
    "addressRegion": "Jawa Barat",
    "postalCode": "17432",
    "addressCountry": "ID",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -6.3541376155010525,
    "longitude": 106.92018696551871,
  },
  "image": "/assets/images/Hero image.png",
  "logo": "/assets/images/logo/logo.png",
  "founder": {
    "@type": "Person",
    "name": "Agung Segoro",
  },
  "priceRange": "$$",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "00:00",
    "closes": "23:59",
  },
  "sameAs": [
    "https://wa.me/6281919510808",
    "https://instagram.com/senjatrans",
    "https://facebook.com/senjatrans",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${montserrat.variable} ${inter.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
