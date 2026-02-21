import React from "react"
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { ScrollToTop } from "@/components/scroll-to-top"
import { Navbar } from "@/components/navbar" // НОВЫЙ ИМПОРТ

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif", 
});

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kudin-website.vercel.app'), 
  title: 'Kudin & Sons | Bespoke Ultrasonic Restoration',
  description: 'Revitalising your finest possessions with precision ultrasonic technology. Eyewear, cutlery, and specialist tool restoration services delivered to your door in Winchester.',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Kudin & Sons | Bespoke Ultrasonic Restoration',
    description: 'Revitalising your finest possessions with precision ultrasonic technology in Winchester.',
    url: 'https://kudin-website.vercel.app',
    siteName: 'Kudin & Sons',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kudin & Sons Ultrasonic Restoration',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kudin & Sons | Bespoke Ultrasonic Restoration',
    description: 'Revitalising your finest possessions with precision ultrasonic technology in Winchester.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/icon.png?v=2',
    shortcut: '/icon.png?v=2',
    apple: '/icon.png?v=2',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/icon.png?v=2',
    },
  },
}

export const viewport: Viewport = {
  themeColor: '#0A192F',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-sans antialiased ${cormorant.variable} ${geistMono.variable}`}>
        {/* ШАПКА ДОБАВЛЕНА СЮДА */}
        <Navbar />
        {children}
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  )
}
