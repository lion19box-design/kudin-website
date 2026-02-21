"use client"

import { useState, useEffect, type FormEvent } from "react"
import { X, Send, CheckCircle, Loader2 } from "lucide-react"

export type ServiceType = "eyewear" | "cutlery" | "knives" | "full" | ""

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  preSelectedService?: ServiceType
}

export function BookingModal({ isOpen, onClose, preSelectedService = "" }: BookingModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: preSelectedService,
    source: "", // Поле для источника
    comments: "",
    consent: false,
  })

  useEffect(() => {
    if (preSelectedService) {
      setFormData(prev => ({ ...prev, service: preSelectedService }))
    }
  }, [preSelectedService])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!formData.consent) return

    setIsSubmitting(true)

    try {
      const response = await fetch("https://formspree.io/f/xvzrrdon", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ fullName: "", phone: "", email: "", service: "", source: "", comments: "", consent: false })
      } else {
        alert("Oops! There was a problem submitting your form. Please try again.")
      }
    } catch (error) {
      alert("Error connecting to the server. Please check your internet connection.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    setIsSubmitted(false)
    setIsSubmitting(false)
    setFormData({ fullName: "", phone: "", email: "", service: "", source: "", comments: "", consent: false })
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-navy/60 backdrop-blur-md"
        onClick={handleClose}
      />

      <div className="relative z-10 w-full max-w-md border border-gold/50 bg-navy-light/95 p-8 shadow-2xl backdrop-blur-sm max-h-[90vh] overflow-y-auto scrollbar-hide">
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

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label className="block text-sm font-medium uppercase tracking-wider text-silver-muted">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName" 
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full border border-navy-lighter bg-navy/50 px-4 py-3 font-serif text-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  placeholder="Your full name"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium uppercase tracking-wider text-silver-muted">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full border border-navy-lighter bg-navy/50 px-4 py-3 font-serif text-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  placeholder="+44 7XXX XXXXXX"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium uppercase tracking-wider text-silver-muted">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border border-navy-lighter bg-navy/50 px-4 py-3 font-serif text-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium uppercase tracking-wider text-silver-muted">
                  Service Type
                </label>
                <select
                  name="service"
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value as ServiceType })}
                  className="w-full appearance-none border border-navy-lighter bg-navy/50 px-4 py-3 font-serif text-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                >
                  <option value="" disabled>Select a service</option>
                  <option value="eyewear">Eyewear Cleaning</option>
                  <option value="cutlery">Cutlery Polishing</option>
                  <option value="knives">Knife Sharpening</option>
                  <option value="full">Full Service</option>
                </select>
              </div>

              {/* Выпадающий список (Гармошка) - Как вы о нас узнали */}
              <div className="space-y-2">
                <label className="block text-sm font-medium uppercase tracking-wider text-silver-muted">
                  How did you discover our services?
                </label>
                <select
                  name="source"
                  value={formData.source}
                  onChange={(e) => setFormData({ ...formData, source: e.target.value })}
                  className="w-full appearance-none border border-navy-lighter bg-navy/50 px-4 py-3 font-serif text-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                >
                  <option value="" disabled>Please select an option (Optional)</option>
                  <option value="word_of_mouth">Word of mouth / Recommendation</option>
                  <option value="google_search">Online Search (Google, Bing)</option>
                  <option value="social_media">Social Media (Instagram, Facebook)</option>
                  <option value="flyer">Printed Flyer / Brochure</option>
                  <option value="ai">AI Assistant (ChatGPT, Gemini, etc.)</option>
                  <option value="local_advertisement">Local Advertisement</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium uppercase tracking-wider text-silver-muted">
                  Additional Comments
                </label>
                <textarea
                  name="comments"
                  rows={2}
                  value={formData.comments}
                  onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                  className="w-full resize-none border border-navy-lighter bg-navy/50 px-4 py-3 font-serif text-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                />
              </div>

              <div className="flex items-start gap-3 pt-2">
                <div className="flex h-6 items-center">
                  <input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    required
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="h-4 w-4 rounded border-navy-lighter bg-navy/50 text-gold focus:ring-gold accent-gold"
                  />
                </div>
                <label htmlFor="consent" className="text-xs text-silver-muted/80 leading-tight cursor-pointer">
                  I consent to Kudin & Sons processing my data in accordance with the <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline hover:text-gold decoration-gold/50">Privacy Policy</a>.
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-interactive group mt-6 flex w-full items-center justify-center gap-3 border border-gold bg-gold px-8 py-4 font-serif text-lg font-medium text-navy hover:bg-gold-light disabled:opacity-70 disabled:cursor-wait"
              >
                {isSubmitting ? (
                   <>
                     <Loader2 className="h-5 w-5 animate-spin" />
                     Sending...
                   </>
                ) : (
                   <>
                     <Send className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                     Submit Request
                   </>
                )}
              </button>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center py-8 text-center">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-gold/30 bg-gold/10">
              <CheckCircle className="h-8 w-8 text-gold" />
            </div>
            <h3 className="mb-3 font-serif text-2xl font-light text-foreground">
              Thank You
            </h3>
            <p className="mb-8 max-w-xs text-silver-muted">
              We have received your request. We will contact you shortly to confirm details.
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
