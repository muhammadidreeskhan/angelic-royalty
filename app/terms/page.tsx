import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TermsPage() {
  return (
    <main className="pt-24 pb-16 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link href="/" className="inline-flex items-center text-amber-700 hover:text-amber-900 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
        </Link>

        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-amber-900 mb-4">Terms & Conditions</h1>
          <p className="text-amber-800">Please read these terms carefully before using our services.</p>
        </div>

        <div className="space-y-8 text-amber-800">
          <section>
            <h2 className="font-serif text-2xl text-amber-900 mb-4">1. Introduction</h2>
            <p>
              Welcome to Angelic Royalty. These Terms and Conditions govern your use of our website, products, and
              services. By accessing our website or purchasing our products, you agree to be bound by these Terms and
              Conditions and our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-amber-900 mb-4">2. Definitions</h2>
            <p>
              "Angelic Royalty," "we," "us," and "our" refer to Angelic Royalty, a luxury fashion house. "You" and
              "your" refer to the user or purchaser of our products and services. "Products" refers to any items
              available for purchase on our website or through our services.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-amber-900 mb-4">3. Products and Services</h2>
            <p>
              3.1. All products are subject to availability. We reserve the right to discontinue any product at any
              time.
            </p>
            <p className="mt-2">
              3.2. We make every effort to display as accurately as possible the colors and images of our products.
              However, we cannot guarantee that your device's display accurately reflects the true color of the
              products.
            </p>
            <p className="mt-2">
              3.3. Couture pieces are custom-made and require an application process. Acceptance of your application
              does not guarantee the creation of a piece, which is subject to our creative discretion and availability.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-amber-900 mb-4">4. Pricing and Payment</h2>
            <p>
              4.1. All prices are listed in US Dollars unless otherwise specified. Prices are subject to change without
              notice.
            </p>
            <p className="mt-2">
              4.2. For couture pieces, a 50% deposit is required to begin the creation process. The remaining balance
              must be paid before delivery.
            </p>
            <p className="mt-2">
              4.3. We accept payment via credit card, bank transfer, and other methods as specified at checkout.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-amber-900 mb-4">5. Shipping and Delivery</h2>
            <p>
              5.1. Shipping times and methods are as described in our Shipping & Returns policy. Delivery dates are
              estimates and not guaranteed.
            </p>
            <p className="mt-2">
              5.2. For couture pieces, delivery times will be discussed during the creation process and may vary
              depending on the complexity of the piece.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-amber-900 mb-4">6. Returns and Refunds</h2>
            <p>
              6.1. Our return and refund policy is as described in our Shipping & Returns policy. Couture pieces are
              non-returnable.
            </p>
            <p className="mt-2">
              6.2. In the event of cancellation of a couture order, the deposit may be non-refundable depending on the
              stage of creation.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-amber-900 mb-4">7. Intellectual Property</h2>
            <p>
              7.1. All content on our website, including text, graphics, logos, images, and software, is the property of
              Angelic Royalty and is protected by copyright and other intellectual property laws.
            </p>
            <p className="mt-2">
              7.2. Our designs are proprietary and may not be copied or reproduced without our express written
              permission.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-amber-900 mb-4">8. Privacy</h2>
            <p>
              8.1. We collect and use your personal information as described in our Privacy Policy. By using our
              services, you consent to our collection and use of your information as described therein.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-amber-900 mb-4">9. Limitation of Liability</h2>
            <p>
              9.1. Angelic Royalty shall not be liable for any indirect, incidental, special, consequential, or punitive
              damages resulting from your use of or inability to use our services or products.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-amber-900 mb-4">10. Changes to Terms</h2>
            <p>
              10.1. We reserve the right to modify these Terms and Conditions at any time. Changes will be effective
              immediately upon posting on our website.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-amber-900 mb-4">11. Contact Information</h2>
            <p>
              11.1. If you have any questions about these Terms and Conditions, please contact us at
              legal@angelicroyalty.com.
            </p>
          </section>

          <p className="mt-8 text-sm">Last updated: April 8, 2025</p>
        </div>
      </div>
    </main>
  )
}
