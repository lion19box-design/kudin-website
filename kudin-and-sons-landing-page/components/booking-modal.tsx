"use client"

import { useState, useEffect, type FormEvent } from "react"
import { X, Send, CheckCircle } from "lucide-react"

export type ServiceType = "eyewear" | "cutlery" | "knives" | "full" | ""

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  preSelectedService?: ServiceType
}

export function BookingModal({ isOpen, onClose, preSelectedService = "" }: BookingModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: preSelectedService,
    comments: "",
    consent: false,
  })

  // Update service when preSelectedService changes
  useEffect(() => {
    if (preSelectedService) {
      setFormData(prev => ({ ...prev, service: preSelectedService }))
    }
  }, [preSelectedService])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  const handleClose = () => {
    setIsSubmitted(false)
    setFormData({ fullName: "", phone: "", email: "", service: "", comments: "" })
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Glassmorphism backdrop */}
      <div
        className="absolute inset-0 bg-navy/60 backdrop-blur-md"
        onClick={handleClose}
        onKeyDown={(e) => e.key === "Escape" && handleClose()}
        role="button"
        tabIndex={0}
        aria-label="Close modal"
      />

      {/* Modal window */}
      <div className="relative z-10 w-full max-w-md border border-gold/50 bg-navy-light/95 p-8 shadow-2xl backdrop-blur-sm max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-4 right-4 text-silver-muted transition-colors hover:text-gold"
          aria-label="Close modal"
        >
          <X className="h-6 w-6" />
        </button>

        {!isSubmitted ? (
          <>
            {/* Header */}
            <div className="mb-8 text-center">
              <div className="mb-4 flex items-center justify-center gap-3">
                <div className="h-px w-8 bg-gold/60" />
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
                  Book Your Visit
                </span>
                <div className="h-px w-8 bg-gold/60" />
              </div>
              <h3 className="font-serif text-2xl font-light text-foreground">
                Request an Appointment
              </h3>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name */}
              <div className="space-y-2">
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium uppercase tracking-wider text-silver-muted"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  required
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className="w-full border border-navy-lighter bg-navy/50 px-4 py-3 font-serif text-foreground placeholder:text-silver-muted/50 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  placeholder="Your full name"
                />
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium uppercase tracking-wider text-silver-muted"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full border border-navy-lighter bg-navy/50 px-4 py-3 font-serif text-foreground placeholder:text-silver-muted/50 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  placeholder="+44 7XXX XXXXXX"
                />
              </div>

              {/* Email Address */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium uppercase tracking-wider text-silver-muted"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full border border-navy-lighter bg-navy/50 px-4 py-3 font-serif text-foreground placeholder:text-silver-muted/50 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Service Type */}
              <div className="space-y-2">
                <label
                  htmlFor="service"
                  className="block text-sm font-medium uppercase tracking-wider text-silver-muted"
                >
                  Service Type
                </label>
                <select
                  id="service"
                  required
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value as ServiceType })
                  }
                  className="w-full appearance-none border border-navy-lighter bg-navy/50 px-4 py-3 font-serif text-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="eyewear">Eyewear Cleaning</option>
                  <option value="cutlery">Cutlery Polishing</option>
                  <option value="knives">Knife Sharpening</option>
                  <option value="full">Full Service</option>
                </select>
              </div>

              {/* Additional Comments */}
              <div className="space-y-2">
                <label
                  htmlFor="comments"
                  className="block text-sm font-medium uppercase tracking-wider text-silver-muted"
                >
                  Additional Comments
                </label>
                <textarea
                  id="comments"
                  rows={3}
                  value={formData.comments}
                  onChange={(e) =>
                    setFormData({ ...formData, comments: e.target.value })
                  }
                  className="w-full resize-none border border-navy-lighter bg-navy/50 px-4 py-3 font-serif text-foreground placeholder:text-silver-muted/50 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  placeholder="Any special requests or details..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn-interactive group mt-6 flex w-full items-center justify-center gap-3 border border-gold bg-gold px-8 py-4 font-serif text-lg font-medium text-navy hover:bg-gold-light"
              >
                <Send className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                Submit Request
              </button>
            </form>
          </>
        ) : (
          /* Success state */
          <div className="flex flex-col items-center py-8 text-center">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-gold/30 bg-gold/10">
              <CheckCircle className="h-8 w-8 text-gold" />
            </div>
            <h3 className="mb-3 font-serif text-2xl font-light text-foreground">
              Thank You
            </h3>
            <p className="mb-8 max-w-xs text-silver-muted">
              Thank you for your request. We will contact you shortly to confirm
              your appointment.
            </p>
            <button
              type="button"
              onClick={handleClose}
              className="btn-interactive border border-gold/50 px-8 py-3 font-serif text-sm font-medium text-gold hover:border-gold hover:bg-gold/10"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
