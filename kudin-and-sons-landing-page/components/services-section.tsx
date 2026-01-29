"use client"

import React from "react"

import { Glasses, Utensils, Sun, Scissors } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const services = [
  {
    icon: Glasses,
    title: "Ultrasonic Cleaning",
    description: "Eyewear & Jewelry",
    detail: "Deep cleaning using high-frequency sound waves to remove dirt, oils, and residue from delicate items.",
  },
  {
    icon: Utensils,
    title: "Silver Polishing",
    description: "Cutlery Renovation",
    detail: "Restore the original lustre to your cherished silverware with our traditional polishing techniques.",
  },
  {
    icon: Sun,
    title: "UV Treatment",
    description: "Sanitization",
    detail: "Hospital-grade UV-C light treatment to eliminate bacteria and ensure hygiene on all surfaces.",
  },
  {
    icon: Scissors,
    title: "Knife Sharpening",
    description: "Professional Edge",
    detail: "Precision sharpening using Japanese whetstones for a razor-sharp, long-lasting edge.",
  },
]

export function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className="relative px-6 py-24 md:py-32"
    >
      {/* Section header */}
      <div className="mx-auto max-w-6xl">
        <div 
          className={`mb-16 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-sm font-medium uppercase tracking-[0.3em] text-gold">
            Our Expertise
          </span>
          <h2 className="mt-4 font-serif text-4xl font-light tracking-tight text-foreground md:text-5xl">
            Services
          </h2>
          <div className="mx-auto mt-6 h-px w-24 bg-gold/40" />
        </div>

        {/* Service cards grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`card-glow group relative cursor-pointer overflow-hidden border border-border bg-card p-8 transition-all duration-500 hover:border-gold md:p-10 ${
                isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8"
              }`}
              style={{ 
                transitionDelay: isVisible ? `${(index + 1) * 100}ms` : "0ms" 
              }}
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 h-16 w-16 translate-x-8 -translate-y-8 rotate-45 bg-gold/10 transition-transform duration-300 group-hover:translate-x-6 group-hover:-translate-y-6" />
              
              {/* Icon */}
              <div className="mb-6 inline-flex items-center justify-center rounded-none border border-gold/30 bg-navy-lighter/50 p-4 transition-all duration-300 group-hover:border-gold group-hover:bg-gold/10">
                <service.icon className="h-6 w-6 text-gold transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
              </div>

              {/* Content */}
              <h3 className="font-serif text-2xl font-medium text-foreground">
                {service.title}
              </h3>
              <p className="mt-1 text-sm font-medium uppercase tracking-wider text-gold">
                {service.description}
              </p>
              <p className="mt-4 leading-relaxed text-silver-muted">
                {service.detail}
              </p>

              {/* Bottom line accent */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
