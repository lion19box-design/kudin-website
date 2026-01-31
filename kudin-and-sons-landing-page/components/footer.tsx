"use client"

import React from "react"
import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Footer() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <footer 
      ref={ref as React.RefObject<HTMLElement>}
      className="relative border-t border-border px-6 py-16"
    >
      {/* Top decorative line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex items-center gap-4">
          <div className="h-px w-16 bg-gold/40" />
          <div className="h-2 w-2 rotate-45 border border-gold/60" />
          <div className="h-px w-16 bg-gold/40" />
        </div>
      </div>

      <div className="mx-auto max-w-6xl">
        <div 
          className={`grid gap-12 md:grid-cols-3 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-serif text-2xl font-semibold text-foreground">
              Kudin & Sons
            </h3>
            <p className="mt-2 text-sm text-silver-muted">
              Dedicated to uncompromising quality.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-silver-muted/80">
              Your silverware and fine tools are investments worth preserving. We combine traditional craftsmanship with modern ultrasonic technology to restore their original glory—effortlessly delivered to your home.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium uppercase tracking-wider text-gold">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+447342315204"
                className="flex w-fit items-center gap-3 text-sm text-silver transition-all duration-300 hover:text-gold hover:translate-x-1"
              >
                <Phone className="h-4 w-4 text-gold/60" strokeWidth={1.5} />
                +44 7342 315204
              </a>
              {/* ОБНОВЛЕННАЯ ПОЧТА */}
              <a
                href="mailto:info@kudinandsons.co.uk"
                className="flex w-fit items-center gap-3 text-sm text-silver transition-all duration-300 hover:text-gold hover:translate-x-1"
              >
                <Mail className="h-4 w-4 text-gold/60" strokeWidth={1.5} />
                info@kudinandsons.co.uk
              </a>
              <p className="flex items-center gap-3 text-sm text-silver-muted">
                <MapPin className="h-4 w-4 text-gold/60" strokeWidth={1.5} />
                Winchester Area
              </p>
            </div>
          </div>

          {/* Appointments */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium uppercase tracking-wider text-gold">
              Appointments
            </h4>
            <div className="space-y-2 text-sm text-silver">
              <p>We operate exclusively by appointment to accommodate your schedule.</p>
              <p className="text-silver-muted">Evening and weekend visits are available upon request.</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div 
          className={`mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm text-silver-muted">
            Kudin & Sons 2026. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link 
              href="/privacy-policy" 
              className="group relative text-xs uppercase tracking-wider text-silver-muted transition-colors hover:text-gold"
            >
              <span>Privacy Policy</span>
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </Link>
            <span className="text-silver-muted/40">|</span>
            <Link 
              href="/privacy-policy" 
              className="group relative text-xs uppercase tracking-wider text-silver-muted transition-colors hover:text-gold"
            >
              <span>Terms of Service</span>
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </Link>
            <span className="text-silver-muted/40">|</span>
            <Link 
              href="/cookie-policy" 
              className="group relative text-xs uppercase tracking-wider text-silver-muted transition-colors hover:text-gold"
            >
              <span>Cookie Policy</span>
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          </div>
        </div>

        {/* Trading Disclosure */}
        <div 
          className={`mt-6 text-center transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-silver-muted/60" style={{ fontSize: '11px' }}>
            Kudin & Sons is a trading name of Volodymyr Kudin. Based in Winchester, UK.
          </p>
        </div>
      </div>
    </footer>
  )
}
