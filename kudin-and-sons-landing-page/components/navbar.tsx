"use client"

import { useState, useEffect } from "react"
import { BookingModal } from "@/components/booking-modal"
import Link from "next/link"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b ${
          isScrolled
            ? "bg-navy/80 backdrop-blur-md py-4 border-white/10 shadow-lg" 
            : "bg-transparent py-4 border-transparent" 
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          {/* LOGO: Применен "зум" для обхода пустых полей в SVG */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <img 
              src="/logo.svg" 
              alt="Kudin & Sons Logo" 
              className="h-16 md:h-20 w-auto object-contain transform scale-[1.7] md:scale-[2.2] origin-left" 
            />
          </Link>

          {/* Right Side Actions */}
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-6 text-sm font-medium text-silver-muted">
              <Link href="/privacy-policy" className="hover:text-gold transition-colors">Privacy</Link>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className={`rounded-sm border px-5 py-2 text-xs uppercase tracking-widest transition-all duration-300 ${
                 isScrolled 
                 ? "border-gold bg-gold text-navy hover:bg-gold-light" 
                 : "border-gold/50 text-gold hover:bg-gold hover:text-navy"
              }`}
            >
              Book a Visit
            </button>
          </div>
        </div>
      </header>

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  )
}
