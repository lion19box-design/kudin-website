"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function SectionDivider() {
  // Подключаем анимацию, чтобы вензель плавно появлялся при скролле
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div 
      ref={ref}
      // Отступы сверху и снизу (py-16), чтобы дать "воздуха"
      className={`flex justify-center items-center py-16 transition-all duration-1000 delay-200 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Рисуем SVG вензель */}
      <svg className="w-64 md:w-[28rem] h-auto text-gold/70" viewBox="0 0 440 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Центральная звезда/ромб */}
        <path d="M220 0L224 9L233 12L224 15L220 24L216 15L207 12L216 9L220 0Z" fill="currentColor"/>
        
        {/* Левая линия с точками */}
        <path d="M0 12H200" stroke="currentColor" strokeWidth="1" strokeLinecap="square"/>
        <circle cx="190" cy="12" r="2" fill="currentColor"/>
        <circle cx="100" cy="12" r="1.5" fill="currentColor"/>

        {/* Правая линия с точками */}
        <path d="M440 12H240" stroke="currentColor" strokeWidth="1" strokeLinecap="square"/>
        <circle cx="250" cy="12" r="2" fill="currentColor"/>
        <circle cx="340" cy="12" r="1.5" fill="currentColor"/>
      </svg>
    </div>
  )
}
