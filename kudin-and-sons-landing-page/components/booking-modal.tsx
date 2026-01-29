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
  const [isSubmitting, setIsSubmitting] = useState(false) // Состояние загрузки
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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!formData.consent) return

    setIsSubmitting(true) // Включаем режим "Отправка..."

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
        // Очистка формы (но не закрываем сразу, чтобы человек увидел "Спасибо")
        setFormData({ fullName: "", phone: "", email: "", service: "", comments: "", consent: false })
      } else {
        alert("Oops! There was a problem submitting your form. Please try again.")
      }
    } catch (error) {
      alert("Error connecting to the server. Please check your internet connection.")
    } finally {
      setIsSubmitting(false) // Выключаем режим загрузки
    }
  }

  const handleClose = () => {
    setIsSubmitted(false)
    setIsSubmitting(false)
    setFormData({ fullName: "", phone: "", email: "", service: "", comments: "", consent: false })
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Glassmorphism backdrop */}
      <div
        className="absolute inset-0 bg-navy/60 backdrop-blur-md"
        onClick={handleClose}
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

              {/* Phone Number */}
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

              {/* Email Address */}
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

              {/* Service Type */}
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

              {/* Additional Comments */}
              <div className="space-y-2">
                <label className="block text-sm font-medium uppercase tracking-wider text-silver-muted">
                  Additional Comments
                </label>
                <textarea
                  name="comments"
                  rows={3}
                  value={formData.comments}
                  onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                  className="w-full resize-none border border-navy-lighter bg-navy/5
