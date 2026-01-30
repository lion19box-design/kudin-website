import React from "react"
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif", 
});

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata = {
  metadataBase: new URL('https://kudin-website.vercel.app'), 
  title: 'Kudin & Sons | Bespoke Ultrasonic Restoration',
  description: 'Revitalising your finest possessions with precision ultrasonic technology. Eyewear, cutlery, and specialist tool restoration services delivered to your door in Winchester.',
  icons: {
    // Добавили ?v=2, чтобы заставить браузер обновить кэш
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
    <html lang="en">
      <body className={`font-sans antialiased ${cormorant.variable} ${geistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
