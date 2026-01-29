"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ShieldCheck } from "lucide-react"

export function HygieneSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      ref={ref}
      className="relative bg-navy-light py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"
            }`}
          >
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
              The Hygiene Standard
            </span>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-foreground md:text-4xl lg:text-5xl">
              <span className="text-balance">
                Invisible to the Eye,{" "}
                <span className="text-gold">Vital for Your Health.</span>
              </span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-silver">
              Standard dishwashing removes visible food, but microscopic biofilms 
              and residues accumulate over years between fork tines and knife 
              serrations.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-silver-muted">
              Our ultrasonic technology eliminates 99.9% of contaminants, ensuring 
              your cutlery is as pure as the food you eat.
            </p>

            {/* Stats */}
            <div className="mt-10 flex gap-8">
              <div className="border-l border-gold/30 pl-6">
                <div className="font-serif text-3xl font-semibold text-gold">99.9%</div>
                <div className="mt-1 text-sm text-silver-muted">Contaminants Removed</div>
              </div>
              <div className="border-l border-gold/30 pl-6">
                <div className="font-serif text-3xl font-semibold text-gold">40kHz</div>
                <div className="mt-1 text-sm text-silver-muted">Ultrasonic Frequency</div>
              </div>
            </div>
          </div>

          {/* Right: Before/After Visual */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"
            }`}
          >
            <div className="relative">
              {/* Magnifying Glass Frame (ORIGINAL STYLE RESTORED) */}
              <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-full border-4 border-gold/40 bg-navy p-1 shadow-[0_0_60px_-10px_rgba(201,169,97,0.3)]">
                
                {/* Inner ring */}
                <div className="absolute inset-2 rounded-full border border-gold/20 z-20 pointer-events-none" />
                
                {/* REAL IMAGE INSERTED HERE */}
                <div className="relative h-full w-full overflow-hidden rounded-full z-10">
                  <img 
                    src="/hygiene-comparison.png" 
                    alt="Comparison" 
                    className="h-full w-full object-cover"
                  />
                  
                  {/* Center Divider Line */}
                  <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gold/60 h-full" />
                </div>
              </div>

              {/* Labels (Kept outside to not block the image) */}
              <div className="mt-6 flex justify-between px-4 max-w-md mx-auto">
                <div className="flex items-center gap-2 text-left">
                  <div className="h-2 w-2 rounded-full bg-silver-muted/50" />
                  <div>
                    <div className="text-xs font-medium uppercase tracking-wider text-silver-muted">
                      Standard Clean
                    </div>
                    <div className="text-xs text-silver-muted/60">Micro-residue</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-right">
                  <div>
                    <div className="text-xs font-medium uppercase tracking-wider text-gold">
                      Ultrasonic Grade
                    </div>
                    <div className="text-xs text-gold/60">Sterile</div>
                  </div>
                  <ShieldCheck className="h-4 w-4 text-gold" strokeWidth={1.5} />
                </div>
              </div>

              {/* Magnifying glass handle hint */}
              <div className="absolute -bottom-4 -right-4 h-16 w-4 rotate-45 rounded-full bg-gradient-to-b from-gold/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
