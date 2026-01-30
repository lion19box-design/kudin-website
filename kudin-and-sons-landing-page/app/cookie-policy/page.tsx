import React from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function CookiePolicy() {
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
          Cookie Policy
        </h1>
        <p className="mb-12 text-lg text-silver-muted">
          Last updated: January 30, 2026
        </p>

        {/* Content */}
        <div className="prose prose-invert prose-gold max-w-none space-y-8 font-sans text-silver-muted">
          <section>
            <h2 className="font-serif text-2xl text-gold">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the owners of the site.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-gold">2. How We Use Cookies</h2>
            <p>
              At Kudin & Sons, we use cookies strictly to ensure the proper functioning of our website and to improve your experience. We do not use cookies for advertising retargeting or selling your data to third parties.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-gold">3. Types of Cookies We Use</h2>
            <ul className="list-disc pl-5 space-y-2 mt-4">
              <li>
                <strong>Strictly Necessary Cookies:</strong> These are essential for you to browse the website and use its features, such as accessing secure areas or submitting our booking form.
              </li>
              <li>
                <strong>Functional Cookies:</strong> These allow the website to remember choices you make (such as your preferred service selection in the form) to provide a more personalised experience.
              </li>
              <li>
                <strong>Performance & Analytics:</strong> We use Vercel Analytics to understand how visitors interact with our website (e.g., page load speeds, visitor numbers) in an anonymous way. This helps us improve our service.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-gold">4. Managing Cookies</h2>
            <p>
              Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set, visit <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="underline hover:text-gold">www.aboutcookies.org</a>.
            </p>
          </section>

          <div className="pt-8 border-t border-gold/20">
            <p className="text-sm">
              If you have any questions about our use of cookies, please contact us at <a href="mailto:KudinandSons@gmail.com" className="text-gold hover:underline">KudinandSons@gmail.com</a>.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
