"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const FAQS = [
  {
    question: "Is ultrasonic cleaning safe for antique silverware?",
    answer: "Absolutely. We adjust the frequency specifically for delicate antiques. Unlike harsh chemical dips that strip away metal, our process uses gentle sound waves to lift tarnishing without damaging the underlying patina or hallmarks."
  },
  {
    question: "Do you service areas outside of Winchester?",
    answer: "We primarily serve Winchester and the immediate surrounding Hampshire area to ensure our high standard of personal collection and delivery. Please contact us if you are slightly further afield, and we will try to accommodate you."
  },
  {
    question: "How long does the restoration process take?",
    answer: "Most services are completed within 48 to 72 hours from collection. For larger collections or complex restorations (like heavily tarnished cutlery sets), we will provide a precise timeframe upon inspection."
  },
  {
    question: "What items can you not clean?",
    answer: "We do not treat items with loose gemstones, porous stones (like pearls or opals), or cracked ivory handles. Our expert will always inspect your items upon collection and advise you if any piece is unsuitable for ultrasonic treatment."
  }
]

export function FaqSection() {
  const { ref, isVisible } = useScrollAnimation()
  // Храним индекс открытого вопроса (null = все закрыты)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section ref={ref} className="bg-navy py-24 md:py-32 border-t border-white/5">
      <div className="mx-auto max-w-4xl px-6">
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">
            Peace of Mind
          </span>
          <h2 className="mt-4 font-serif text-3xl font-light text-foreground md:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index}
              className={`border border-gold/20 bg-navy-light/30 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-gold/5"
              >
                <span className="font-serif text-lg text-foreground pr-8">
                  {faq.question}
                </span>
                <span className="shrink-0 text-gold">
                  {openIndex === index ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 pt-0 text-silver-muted leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
