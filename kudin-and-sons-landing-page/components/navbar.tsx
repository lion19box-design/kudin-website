"use client"

import { useState, useEffect } from "react"
import { BookingModal } from "@/components/booking-modal" // Подключаем твою форму
import Link from "next/link"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Следим за скроллом
  useEffect(() => {
    const handleScroll = () => {
      // Если прокрутили больше 20px, включаем "эффект стекла"
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
            ? "bg-navy/80 backdrop-blur-md py-4 border-white/10 shadow-lg" // Стиль при скролле
            : "bg-transparent py-6 border-transparent" // Стиль наверху
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          {/* LOGO С УВЕЛИЧЕННЫМ SVG */}
          <Link href="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
            <img 
              src="/logo.svg" 
              alt="Kudin & Sons Logo" 
              className="h-14 md:h-16 w-auto" 
            />
            <span className="font-serif text-2xl md:text-3xl font-semibold text-foreground tracking-tight">
              Kudin & Sons
            </span>
          </Link>

          {/* Right Side Actions */}
          <div className="flex items-center gap-6">
            {/* Скрытая навигация для десктопа (потом можно расширить) */}
            <div className="hidden md:flex gap-6 text-sm font-medium text-silver-muted">
              <Link href="/privacy-policy" className="hover:text-gold transition-colors">Privacy</Link>
            </div>

            {/* CTA Button */}
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

      {/* Модальное окно с формой (Оно живет внутри навбара, чтобы работать везде) */}
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  )
}
