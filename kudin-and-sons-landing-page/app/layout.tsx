import React from "react"
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
});
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata = {
  title: 'Kudin & Sons | Bespoke Ultrasonic Restoration',
  description: 'Revitalising your finest possessions with precision ultrasonic technology. Eyewear, cutlery, and specialist tool restoration services delivered to your door in Winchester.',
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
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
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
