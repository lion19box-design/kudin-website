"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Search, ShieldCheck } from "lucide-react"

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
              {/* Magnifying Glass Frame */}
              <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-full border-4 border-gold/40 bg-navy p-1 shadow-[0_0_60px_-10px_rgba(201,169,97,0.3)]">
                {/* Inner ring */}
                <div className="absolute inset-2 rounded-full border border-gold/20" />
                
                {/* Split Comparison */}
                <div className="relative h-full w-full overflow-hidden rounded-full">
                  {/* Left Half - Standard Clean */}
                  <div className="absolute inset-0 w-1/2 bg-gradient-to-br from-navy-lighter to-navy">
                    <div className="flex h-full flex-col items-center justify-center p-6">
                      {/* Simulated residue pattern */}
                      <div className="relative mb-4 h-24 w-24">
                        <div className="absolute inset-0 opacity-40">
                          {[...Array(12)].map((_, i) => (
                            <div
                              key={i}
                              className="absolute rounded-full bg-silver-muted/30"
                              style={{
                                width: `${Math.random() * 8 + 4}px`,
                                height: `${Math.random() * 8 + 4}px`,
                                top: `${Math.random() * 80 + 10}%`,
                                left: `${Math.random() * 80 + 10}%`,
                              }}
                            />
                          ))}
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="h-16 w-0.5 rounded-full bg-silver-muted/60" />
                          <div className="absolute h-0.5 w-8 rounded-full bg-silver-muted/60" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Half - Ultrasonic Grade */}
                  <div className="absolute inset-0 left-1/2 w-1/2 bg-gradient-to-br from-navy to-navy-light">
                    <div className="flex h-full flex-col items-center justify-center p-6">
                      {/* Clean, pristine pattern */}
                      <div className="relative mb-4 h-24 w-24">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="h-16 w-0.5 rounded-full bg-gold/60" />
                          <div className="absolute h-0.5 w-8 rounded-full bg-gold/60" />
                        </div>
                        {/* Sparkle effects */}
                        <div className="absolute -right-1 top-2 h-2 w-2 animate-pulse rounded-full bg-gold/80" />
                        <div className="absolute bottom-4 left-0 h-1.5 w-1.5 animate-pulse rounded-full bg-gold/60" style={{ animationDelay: "300ms" }} />
                        <div className="absolute right-2 top-12 h-1 w-1 animate-pulse rounded-full bg-gold/70" style={{ animationDelay: "600ms" }} />
                      </div>
                    </div>
                  </div>

                  {/* Center Divider */}
                  <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gold/60" />
                  
                  {/* Center Icon */}
                  <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold bg-navy p-2">
                    <Search className="h-4 w-4 text-gold" strokeWidth={1.5} />
                  </div>
                </div>
              </div>

              {/* Labels */}
              <div className="mt-6 flex justify-between px-4">
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
