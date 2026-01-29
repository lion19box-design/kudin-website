"use client"

import { useState, useEffect } from "react"
import { Cookie } from "lucide-react"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem("cookie-consent")
    if (!cookieConsent) {
      // Small delay before showing banner for better UX
      const timer = setTimeout(() => {
        setIsVisible(true)
        setIsAnimating(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setIsAnimating(false)
    setTimeout(() => setIsVisible(false), 300)
  }

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined")
    setIsAnimating(false)
    setTimeout(() => setIsVisible(false), 300)
  }

  if (!isVisible) return null

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 max-w-sm transition-all duration-300 ${
        isAnimating 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-4"
      }`}
    >
      <div className="rounded border border-gold/20 bg-navy-light p-5 shadow-2xl shadow-black/40">
        {/* Header with icon */}
        <div className="mb-3 flex items-center gap-2">
          <Cookie className="h-4 w-4 text-gold/70" strokeWidth={1.5} />
          <span className="text-xs font-medium uppercase tracking-wider text-gold/70">
            Cookie Notice
          </span>
        </div>

        {/* Message */}
        <p className="mb-5 text-sm leading-relaxed text-silver">
          We use cookies to ensure you get the best experience on our website.
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleDecline}
            className="btn-interactive flex-1 border border-silver/30 px-4 py-2 text-xs font-medium uppercase tracking-wider text-silver transition-all duration-300 hover:border-silver hover:bg-silver/5"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={handleAccept}
            className="btn-interactive flex-1 border border-gold bg-gold px-4 py-2 text-xs font-medium uppercase tracking-wider text-navy transition-all duration-300 hover:bg-gold-light"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
