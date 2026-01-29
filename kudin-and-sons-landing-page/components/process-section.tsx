"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { CalendarCheck, Truck, Sparkles, Eye } from "lucide-react"

const steps = [
  {
    icon: CalendarCheck,
    title: "Booking",
    description: "Choose a time slot that suits your schedule.",
  },
  {
    icon: Truck,
    title: "Arrival",
    description: "We arrive fully equipped. We only need a small table and a power outlet.",
  },
  {
    icon: Sparkles,
    title: "Restoration",
    description: "Ultrasonic cleaning and polishing happens on-site. Clean, quiet, and safe.",
  },
  {
    icon: Eye,
    title: "The Reveal",
    description: "Inspect the results immediately. Your essentials are ready to use.",
  },
]

export function ProcessSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      ref={ref}
      className="relative bg-navy py-24 md:py-32"
    >
      {/* Subtle top border */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div
          className={`mb-16 text-center transition-all duration-700 ${
            isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"
          }`}
        >
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
            How It Works
          </span>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
            <span className="text-balance">The Home Service Experience</span>
          </h2>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent md:block" />

          <div className="grid gap-8 md:grid-cols-4 md:gap-6">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className={`relative text-center transition-all duration-700 ${
                  isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"
                }`}
                style={{ animationDelay: `${(index + 1) * 150}ms` }}
              >
                {/* Step Number Badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-navy px-3 py-1 text-xs font-medium text-gold md:hidden">
                  Step {index + 1}
                </div>

                {/* Icon Container */}
                <div className="relative mx-auto mb-6 flex h-24 w-24 items-center justify-center">
                  {/* Outer ring */}
                  <div className="absolute inset-0 rounded-full border border-gold/30" />
                  {/* Inner glow */}
                  <div className="absolute inset-2 rounded-full bg-navy-light/50" />
                  {/* Icon */}
                  <step.icon
                    className="relative z-10 h-10 w-10 text-gold"
                    strokeWidth={1.5}
                  />
                  {/* Step number (Desktop) */}
                  <div className="absolute -bottom-2 left-1/2 hidden -translate-x-1/2 rounded-full bg-gold px-2 py-0.5 text-xs font-semibold text-navy md:block">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <h3 className="mb-3 font-serif text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mx-auto max-w-xs text-sm leading-relaxed text-silver-muted">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle bottom border */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </section>
  )
}
