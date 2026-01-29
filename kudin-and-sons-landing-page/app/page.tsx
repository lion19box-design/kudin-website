import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { HygieneSection } from "@/components/hygiene-section"
import { PricingSection } from "@/components/pricing-section"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <HygieneSection />
      <PricingSection />
      <Footer />
      <CookieBanner />
    </main>
  )
}
