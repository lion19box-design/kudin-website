"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

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

          {/* Right: Before/After Visual - REPLACED WITH REAL IMAGE */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"
            }`}
          >
            <div className="relative mx-auto aspect-square max-w-md rounded-full border-4 border-gold shadow-2xl overflow-hidden">
              <img
                src="/hygiene-comparison.png"
                alt="Magnified comparison of cutlery before and after ultrasonic cleaning"
                className="h-full w-full object-cover"
              />
              
              {/* Labels overlay */}
              <div className="absolute inset-0 flex text-center text-xs font-medium uppercase tracking-wider text-white/90 mix-blend-difference pointer-events-none">
                <div className="flex-1 flex items-end justify-center pb-8 bg-black/10">
                  Standard Clean
                </div>
                <div className="flex-1 flex items-end justify-center pb-8 bg-black/10">
                  Ultrasonic Grade
                </div>
              </div>
              
              {/* Center dividing line */}
              <div className="absolute inset-y-0 left-1/2 w-px bg-gold/50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
