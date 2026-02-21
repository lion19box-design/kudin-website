"use client"

import { useState } from "react"
import { Sparkles } from "lucide-react"
import { BookingModal } from "./booking-modal"

export function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center overflow-hidden">
      {/* ЭФФЕКТ СВЕЧЕНИЯ: Мягкий золотой свет на заднем фоне */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-gold/10 blur-[120px] opacity-70" />

      {/* Decorative border line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      {/* Контейнер z-10, чтобы текст был поверх свечения */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo/Brand */}
        <div className="mb-8 flex items-center gap-3">
          <div className="h-px w-12 bg-gold/60" />
          <span className="text-sm font-medium uppercase tracking-[0.3em] text-silver-muted">
            British Craftsmanship
          </span>
          <div className="h-px w-12 bg-gold/60" />
        </div>

        {/* Main headline */}
        <h1 className="max-w-4xl text-balance font-serif text-5xl font-light leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
          Restoring the Shine to Your Essentials
        </h1>

        {/* Subtext */}
        <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-silver-muted md:text-xl">
          Ultrasonic cleaning, polishing, and sharpening. We come to your home.
        </p>

        {/* ЦЕНТРАЛЬНЫЙ ЛОГОТИП (Вместо простого текста) */}
        <div className="mt-8 flex flex-col items-center">
          <img
            src="/logo.svg"
            alt="Kudin & Sons Emblem"
            className="h-28 md:h-36 w-auto object-contain drop-shadow-2xl transform scale-[1.3]"
          />
          <span className="mt-6 text-xs font-medium uppercase tracking-[0.4em] text-silver-muted/60">
            South of England
          </span>
        </div>

        {/* CTA Button */}
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="btn-interactive group mt-10 flex items-center gap-3 rounded-none border border-gold bg-gold px-10 py-4 font-serif text-lg font-medium text-navy transition-all duration-300 hover:bg-gold-light hover:shadow-[0_0_30px_-5px_rgba(201,169,97,0.4)]"
        >
          <Sparkles className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
          Book a Visit
        </button>
      </div>

      {/* Booking Modal */}
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
