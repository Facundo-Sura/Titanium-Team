import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://titaniumteam.com.ar"),
  title: {
    default: "Titanium Team | Escuela de Muay Thai, Kickboxing y K1",
    template: "%s | Titanium Team",
  },
  description: "Escuela de artes marciales en Argentina. Aprende Muay Thai, Kickboxing y K1 con los mejores instructores. Clases para todos los niveles. ¡Reservá tu clase gratis!",
  keywords: [
    "Muay Thai",
    "Kickboxing",
    "K1",
    "artes marciales",
    "gimnasio",
    "boxeo tailandés",
    "Argentina",
    "clases de defensa personal",
    "entrenamiento deportivo",
    "Titanium Team",
  ],
  authors: [{ name: "Titanium Team" }],
  creator: "Titanium Team",
  publisher: "Titanium Team",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://titaniumteam.com.ar",
    siteName: "Titanium Team",
    title: "Titanium Team | Escuela de Muay Thai, Kickboxing y K1",
    description: "Escuela de artes marciales en Argentina. Aprende Muay Thai, Kickboxing y K1 con los mejores instructores. ¡Reservá tu clase gratis!",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Titanium Team - Escuela de Muay Thai y Kickboxing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Titanium Team | Escuela de Muay Thai, Kickboxing y K1",
    description: "Escuela de artes marciales en Argentina. Aprende Muay Thai, Kickboxing y K1. ¡Reservá tu clase gratis!",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://titaniumteam.com.ar",
    languages: {
      es: "https://titaniumteam.com.ar",
    },
  },
  category: "sports",
  classification: "Martial Arts School",
};

// Schema.org para LocalBusiness/Gym
const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: "Titanium Team",
  description: "Escuela de Muay Thai, Kickboxing y K1",
  url: "https://titaniumteam.com.ar",
  logo: "https://titaniumteam.com.ar/logo.jpg",
  image: "https://titaniumteam.com.ar/og-image.jpg",
  address: {
    "@type": "PostalAddress",
    addressCountry: "AR",
    addressRegion: "Argentina",
  },
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  sameAs: [
    "https://instagram.com/titaniumteam",
    "https://facebook.com/titaniumteam",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased cursor-none`}
      >
        <CustomCursor />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}