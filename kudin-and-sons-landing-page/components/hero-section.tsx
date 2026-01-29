"use client"

import { useState } from "react"
import { Sparkles } from "lucide-react"
import { BookingModal } from "./booking-modal"

export function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center">
      {/* Decorative border line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      
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

      {/* Brand name */}
      <div className="mt-12 flex flex-col items-center gap-2">
        <h2 className="font-serif text-2xl font-semibold tracking-wide text-foreground md:text-3xl">
          Kudin & Sons
        </h2>
        <span className="text-sm tracking-widest text-silver-muted">
          South of England
        </span>
      </div>

      {/* CTA Button */}
      <button
        type="button"
        onClick={() => setIsModalOpen(true)}
        className="btn-interactive group mt-16 flex items-center gap-3 rounded-none border border-gold bg-gold px-10 py-4 font-serif text-lg font-medium text-navy hover:bg-gold-light"
      >
        <Sparkles className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
        Book a Visit
      </button>

      {/* Booking Modal */}
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      
    </section>
  )
}
