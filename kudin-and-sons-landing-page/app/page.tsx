import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { HygieneSection } from "@/components/hygiene-section"
import { PricingSection } from "@/components/pricing-section"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
// НОВЫЙ ИМПОРТ
import { SectionDivider } from "@/components/section-divider"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      {/* ВЕНЗЕЛЬ ВСТАВЛЕН СЮДА */}
      <SectionDivider />
      <ServicesSection />
      <ProcessSection />
      <HygieneSection />
      <PricingSection />
      <FaqSection />
      <Footer />
      <CookieBanner />
    </main>
  )
}
