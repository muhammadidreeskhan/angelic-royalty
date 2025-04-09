import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPage() {
  return (
    <main className="pt-24 pb-16 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link href="/" className="inline-flex items-center text-amber-700 hover:text-amber-900 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
        </Link>

        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-amber-900 mb-4">Privacy Policy</h1>
          <p className="text-amber-800">How we protect and respect your personal information.</p>
        </div>

        <div className="space-y-8 text-amber-800">
          <section>
            <h2 className="font-serif text-2xl text-amber-900 mb-4">1. Introduction</h2>
            <p>
              At Angelic Royalty, we respect your privacy and are committed to protecting your personal data. This
              Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or
              purchase our products.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-amber-900 mb-4">2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>
                <span className="font-medium">Personal Information:</span> Name, email address, postal address, phone
                number, and payment information.
              </li>
              <li>
                <span className="font-medium">Profile Information:</span> Your preferences, purchase history, and
                measurements (for couture clients).
              </li>
              <li>
                <span className="font-medium">Technical Information:</span> IP address, browser type, device
                information, and cookies.
              </li>
              <li>
                <span className="font-medium">Usage Information:</span> How you use our website, products viewed, and
                pages visited.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-amber-900 mb-4">3. How We Use Your Information</h2>
            <p>We use your information for the following purposes:</p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>To process and fulfill your orders</li>
              <li>To provide customer service and support</li>
              <li>To personalize your experience and offer products that may interest you</li>
              <li>To improve our website and services</li>
              <li>To communicate with you about products, services, and events that may interest you</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-amber-900 mb-4">4. How We Share Your Information</h2>
            <p>We may share your information with the following third parties:</p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>
                <span className="font-medium">Service Providers:</span> Payment processors, shipping companies, and IT
                service providers who help us operate our business.
              </li>
              <li>
                <span className="font-medium">Professional Advisors:</span> Lawyers, accountants, and insurers when
                necessary.
              </li>
              <li>
                <span className="font-medium">Regulatory Authorities:</span> Government bodies when required by law.
              </li>
            </ul>
            <p className="mt-2">We do not sell your personal information to third parties.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-amber-900 mb-4">5. Data Security</h2>
            <p>
              We have implemented appropriate security measures to prevent your personal data from being accidentally
              lost, used, or accessed in an unauthorized way. We limit access to your personal data to those employees
              and third parties who have a business need to know.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-amber-900 mb-4">6. Data Retention</h2>
            <p>
              We will only retain your personal data for as long as necessary to fulfill the purposes we collected it
              for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-amber-900 mb-4">7. Your Rights</h2>
            <p>Depending on your location, you may have the following rights regarding your personal data:</p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>The right to access your personal data</li>
              <li>The right to correct inaccurate personal data</li>
              <li>The right to request deletion of your personal data</li>
              <li>The right to restrict processing of your personal data</li>
              <li>The right to data portability</li>
              <li>The right to object to processing of your personal data</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-amber-900 mb-4">8. Cookies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our website and hold certain
              information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being
              sent.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-amber-900 mb-4">9. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-amber-900 mb-4">10. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at privacy@angelicroyalty.com.</p>
          </section>

          <p className="mt-8 text-sm">Last updated: April 8, 2025</p>
        </div>
      </div>
    </main>
  )
}
