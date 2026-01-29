"use client"

import React, { useState } from "react"

import { Check } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { BookingModal, type ServiceType } from "./booking-modal"

const pricingTiers = [
  {
    name: "Eyewear",
    price: "15",
    description: "Single pair cleaning",
    serviceType: "eyewear" as ServiceType,
    features: [
      "Ultrasonic deep clean",
      "Lens polishing",
      "Frame adjustment",
      "Anti-fog treatment",
    ],
  },
  {
    name: "Cutlery Set",
    price: "50",
    description: "Up to 24 pieces",
    serviceType: "cutlery" as ServiceType,
    features: [
      "Silver polish & restoration",
      "Tarnish removal",
      "Protective coating",
      "Individual inspection",
    ],
    featured: true,
  },
  {
    name: "Full Service",
    price: "80",
    description: "Complete home visit",
    serviceType: "full" as ServiceType,
    features: [
      "All services included",
      "Knife sharpening (up to 6)",
      "UV sanitization",
      "Priority scheduling",
    ],
  },
]

export function PricingSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<ServiceType>("")

  const handleSelectService = (serviceType: ServiceType) => {
    setSelectedService(serviceType)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedService("")
  }

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className="relative px-6 py-24 md:py-32"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-navy-light/30" />
      
      <div className="relative mx-auto max-w-6xl">
        {/* Section header */}
        <div 
          className={`mb-16 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-sm font-medium uppercase tracking-[0.3em] text-gold">
            Transparent Pricing
          </span>
          <h2 className="mt-4 font-serif text-4xl font-light tracking-tight text-foreground md:text-5xl">
            Service Menu
          </h2>
          <div className="mx-auto mt-6 h-px w-24 bg-gold/40" />
          <p className="mx-auto mt-6 max-w-xl text-silver-muted">
            No hidden fees. All prices include home visit within 20 miles of our workshop.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {pricingTiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`card-glow relative flex flex-col border bg-card p-8 transition-all duration-500 hover:border-gold md:p-10 ${
                tier.featured
                  ? "border-gold/60 ring-1 ring-gold/20"
                  : "border-border"
              } ${
                isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8"
              }`}
              style={{ 
                transitionDelay: isVisible ? `${(index + 1) * 150}ms` : "0ms" 
              }}
            >
              {/* Featured badge */}
              {tier.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gold px-4 py-1 text-xs font-medium uppercase tracking-wider text-navy">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Tier name */}
              <h3 className="font-serif text-xl font-medium text-foreground">
                {tier.name}
              </h3>
              <p className="mt-1 text-sm text-silver-muted">{tier.description}</p>

              {/* Price */}
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-sm text-gold">£</span>
                <span className="font-serif text-5xl font-light text-foreground">
                  {tier.price}
                </span>
              </div>

              {/* Features */}
              <ul className="mt-8 flex-1 space-y-4">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={2} />
                    <span className="text-sm text-silver">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                type="button"
                onClick={() => handleSelectService(tier.serviceType)}
                className={`btn-interactive mt-8 w-full py-3 text-center font-serif text-sm font-medium uppercase tracking-wider ${
                  tier.featured
                    ? "border border-gold bg-gold text-navy hover:bg-gold-light"
                    : "border border-gold/40 text-gold hover:border-gold hover:bg-gold hover:text-navy"
                }`}
              >
                Select
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal}
        preSelectedService={selectedService}
      />
    </section>
  )
}
