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

  useEffect(() => {
    if (preSelectedService) {
      setFormData(prev => ({ ...prev, service: preSelectedService }))
    }
  }, [preSelectedService])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!formData.consent) return; // Блокировка без галочки
    setIsSubmitted(true)
  }

  const handleClose = () => {
    setIsSubmitted(false)
    setFormData({ fullName: "", phone: "", email: "", service: "", comments: "", consent: false })
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-navy/60 backdrop-blur-md"
        onClick={handleClose}
      />
      <div className="relative z-10 w-full max-w-md border border-gold/50 bg-navy-light/95 p-8 shadow-2xl backdrop-blur-sm max-h-[90vh] overflow-y-auto">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-silver-muted hover:text-gold"
        >
          <X className="h-6 w-6" />
        </button>

        {!isSubmitted ? (
          <>
            <div className="mb-8 text-center">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-gold">Book Your Visit</span>
              <h3 className="font-serif text-2xl font-light text-foreground mt-2">Request an Appointment</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label className="block text-sm font-medium uppercase tracking-wider text-silver-muted">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full border border-navy-lighter bg-navy/50 px-4 py-3 font-serif text-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium uppercase tracking-wider text-silver-muted">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full border border-navy-lighter bg-navy/50 px-4 py-3 font-serif text-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium uppercase tracking-wider text-silver-muted">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border border-navy-lighter bg-navy/50 px-4 py-3 font-serif text-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium uppercase tracking-wider text-silver-muted">Service Type</label>
                <select
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

              <div className="space-y-2">
                <label className="block text-sm font-medium uppercase tracking-wider text-silver-muted">Additional Comments</label>
                <textarea
                  rows={3}
                  value={formData.comments}
                  onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                  className="w-full border border-navy-lighter bg-navy/50 px-4 py-3 font-serif text-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                />
              </div>

              {/* ВОТ ОНА, НАША ГАЛОЧКА */}
              <div className="flex items-start gap-3 pt-2">
                <div className="flex h-6 items-center">
                  <input
                    id="consent"
                    type="checkbox"
                    required
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="h-4 w-4 rounded border-navy-lighter bg-navy/50 text-gold focus:ring-gold accent-gold"
                  />
                </div>
                <label htmlFor="consent" className="text-xs text-silver-muted/80 leading-tight cursor-pointer">
                  I consent to Kudin & Sons processing my data in accordance with the <a href="#" className="underline hover:text-gold">Privacy Policy</a>.
                </label>
              </div>

              <button
                type="submit"
                className="group mt-6 flex w-full items-center justify-center gap-3 border border-gold bg-gold px-8 py-4 font-serif text-lg font-medium text-navy hover:bg-gold-light"
              >
                <Send className="h-5 w-5" />
                Submit Request
              </button>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center py-8 text-center">
            <CheckCircle className="h-16 w-16 text-gold mb-6" />
            <h3 className="mb-3 font-serif text-2xl font-light text-foreground">Thank You</h3>
            <button onClick={handleClose} className="border border-gold/50 px-8 py-3 text-gold hover:bg-gold/10">Close</button>
          </div>
        )}
      </div>
    </div>
  )
}
