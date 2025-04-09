import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-amber-50 border-t border-amber-100">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h2 className="font-serif text-2xl text-amber-900 mb-4">Angelic Royalty</h2>
            <p className="text-amber-800 mb-6">
              Divine essence meets material elegance in our exclusive luxury fashion house.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-amber-700 hover:text-amber-900">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-amber-700 hover:text-amber-900">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-amber-700 hover:text-amber-900">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-amber-900 mb-4">Collections</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/collections/womens-couture" className="text-amber-800 hover:text-amber-900">
                  Women's Couture
                </Link>
              </li>
              <li>
                <Link href="/collections/ready-to-wear-women" className="text-amber-800 hover:text-amber-900">
                  Ready-to-Wear Women
                </Link>
              </li>
              <li>
                <Link href="/collections/ready-to-wear-men" className="text-amber-800 hover:text-amber-900">
                  Ready-to-Wear Men
                </Link>
              </li>
              <li>
                <Link href="/collections/makeup" className="text-amber-800 hover:text-amber-900">
                  Luxury Makeup
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-amber-800 hover:text-amber-900">
                  Shop All
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-amber-900 mb-4">Information</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-amber-800 hover:text-amber-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/apply" className="text-amber-800 hover:text-amber-900">
                  Apply for Couture
                </Link>
              </li>
              <li>
                <Link href="/vip" className="text-amber-800 hover:text-amber-900">
                  VIP Access
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-amber-800 hover:text-amber-900">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-amber-900 mb-4">Policies</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/shipping" className="text-amber-800 hover:text-amber-900">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-amber-800 hover:text-amber-900">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-amber-800 hover:text-amber-900">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-amber-800 hover:text-amber-900">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-200 mt-12 pt-8 text-center text-amber-800">
          <p>&copy; {new Date().getFullYear()} Angelic Royalty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
