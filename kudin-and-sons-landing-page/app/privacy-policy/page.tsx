import React from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-navy px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        {/* Back Button */}
        <Link 
          href="/"
          className="group mb-12 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-silver-muted transition-colors hover:text-gold"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>

        {/* Header */}
        <h1 className="mb-8 font-serif text-4xl font-light text-foreground md:text-5xl">
          Privacy Policy
        </h1>
        <p className="mb-12 text-lg text-silver-muted">
          Last updated: January 30, 2026
        </p>

        {/* Content */}
        <div className="prose prose-invert prose-gold max-w-none space-y-8 font-sans text-silver-muted">
          <section>
            <h2 className="font-serif text-2xl text-gold">1. Introduction</h2>
            <p>
              Welcome to Kudin & Sons ("we," "our," or "us"). We are committed to protecting your personal data and respecting your privacy. This policy explains how we handle your data when you visit our website or use our services.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-gold">2. Data We Collect</h2>
            <p>
              We may collect, use, store, and transfer the following kinds of personal data about you:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-4">
              <li><strong>Identity Data:</strong> First name, last name.</li>
              <li><strong>Contact Data:</strong> Email address, telephone number.</li>
              <li><strong>Technical Data:</strong> IP address, browser type and version, time zone setting (collected automatically via cookies).</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-gold">3. How We Use Your Data</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-4">
              <li>To process and deliver your service orders (Cleaning & Restoration).</li>
              <li>To manage our relationship with you (notifying you about changes to our terms or privacy policy).</li>
              <li>To reply to your inquiries sent via our contact forms.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-gold">4. Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorised way. We limit access to your personal data to those employees and partners who have a business need to know.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-gold">5. Your Legal Rights</h2>
            <p>
              Under the UK GDPR, you have rights including:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-4">
              <li><strong>Request access</strong> to your personal data.</li>
              <li><strong>Request correction</strong> of your personal data.</li>
              <li><strong>Request erasure</strong> of your personal data.</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, please contact us via the contact form on our website.
            </p>
          </section>
          
          <div className="pt-8 border-t border-gold/20">
            <p className="text-sm">
              <strong>Kudin & Sons</strong><br />
              Winchester, United Kingdom
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
