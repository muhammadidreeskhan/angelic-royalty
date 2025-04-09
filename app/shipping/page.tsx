import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ShippingPage() {
  return (
    <main className="pt-24 pb-16 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link href="/" className="inline-flex items-center text-amber-700 hover:text-amber-900 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
        </Link>

        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-amber-900 mb-4">Shipping & Returns</h1>
          <p className="text-amber-800">Our policies for delivering divine elegance to your doorstep.</p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="font-serif text-2xl text-amber-900 mb-4">Shipping Information</h2>
            <div className="space-y-4 text-amber-800">
              <p>
                At Angelic Royalty, we ensure that your sacred garments and products are delivered with the utmost care
                and reverence. Each item is packaged with intention, wrapped in our signature gold and white materials
                to preserve the divine energy of your purchase.
              </p>

              <div className="border-l-4 border-amber-200 pl-4 py-2">
                <h3 className="font-medium text-amber-900 mb-2">Standard Shipping</h3>
                <p>
                  For ready-to-wear items and makeup products, we offer standard shipping worldwide. Delivery times vary
                  by location:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>United States: 3-5 business days</li>
                  <li>Europe: 5-7 business days</li>
                  <li>Asia: 7-10 business days</li>
                  <li>Rest of World: 10-14 business days</li>
                </ul>
              </div>

              <div className="border-l-4 border-amber-200 pl-4 py-2">
                <h3 className="font-medium text-amber-900 mb-2">Express Shipping</h3>
                <p>
                  Express shipping is available for an additional fee. This service reduces delivery times to 1-3
                  business days depending on your location.
                </p>
              </div>

              <div className="border-l-4 border-amber-200 pl-4 py-2">
                <h3 className="font-medium text-amber-900 mb-2">Couture Delivery</h3>
                <p>
                  For couture pieces, we offer a white-glove delivery service. Your garment will be hand-delivered by a
                  member of our team, who will assist with fitting and any immediate alterations if needed. This service
                  is included in the price of all couture items.
                </p>
              </div>

              <p>
                All orders are shipped with tracking information, which will be provided via email once your order has
                been dispatched.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-amber-900 mb-4">Returns & Exchanges</h2>
            <div className="space-y-4 text-amber-800">
              <p>
                We want you to be completely satisfied with your Angelic Royalty purchase. If for any reason you are not
                entirely pleased with your item, we offer the following return and exchange policies:
              </p>

              <div className="border-l-4 border-amber-200 pl-4 py-2">
                <h3 className="font-medium text-amber-900 mb-2">Ready-to-Wear & Makeup</h3>
                <p>
                  Ready-to-wear items may be returned within 14 days of receipt for a full refund or exchange. Items
                  must be unworn, unwashed, and with all original tags attached.
                </p>
                <p className="mt-2">
                  Makeup products may be returned within 14 days if unopened and in their original packaging. For
                  hygiene reasons, we cannot accept returns of opened makeup products.
                </p>
              </div>

              <div className="border-l-4 border-amber-200 pl-4 py-2">
                <h3 className="font-medium text-amber-900 mb-2">Couture</h3>
                <p>
                  Couture pieces are created specifically for you and are therefore non-returnable. However, we offer
                  complimentary alterations within 30 days of delivery to ensure your garment fits perfectly.
                </p>
              </div>

              <p>
                To initiate a return or exchange, please contact our client services team at returns@angelicroyalty.com
                or call +1 (212) 555-0123.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-amber-900 mb-4">Damages & Issues</h2>
            <div className="space-y-4 text-amber-800">
              <p>
                We take great care in packaging and shipping our products. However, if you receive an item that is
                damaged or defective, please contact us immediately at inquiries@angelicroyalty.com with photos of the
                damage. We will arrange for a replacement or repair at no additional cost.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
