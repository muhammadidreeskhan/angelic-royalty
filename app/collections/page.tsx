import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Collections | Angelic Royalty",
  description: "Explore our divine collections, each piece crafted with sacred intention and celestial beauty.",
  openGraph: {
    title: "Collections | Angelic Royalty",
    description: "Explore our divine collections, each piece crafted with sacred intention and celestial beauty.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Angelic Royalty Collections",
      },
    ],
  },
}

export default function CollectionsPage() {
  return (
    <main className="pt-24 pb-16 bg-white">
      <section className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-amber-900 mb-6">Our Collections</h1>
          <p className="text-lg text-amber-800">
            Explore our divine collections, each piece crafted with sacred intention and celestial beauty.
          </p>
        </div>

        <div className="space-y-32">
          {/* Women's Couture */}
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <div className="md:w-1/2 order-2 md:order-1">
              <h2 className="font-serif text-3xl md:text-4xl text-amber-900 mb-4">Women's Couture</h2>
              <p className="text-amber-800 mb-6 leading-relaxed">
                Our exclusive 1-of-1 couture designs embody divine feminine energy through meticulous craftsmanship and
                celestial inspiration. Each piece is a sacred creation, available by application only.
              </p>
              <Link
                href="/collections/womens-couture"
                className="inline-flex items-center text-amber-700 hover:text-amber-900 font-medium"
              >
                Apply to Purchase <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="md:w-1/2 relative h-[70vh] w-full order-1 md:order-2">
              <Image
                src="https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1000&auto=format&fit=crop"
                alt="Women's Couture Collection - Exclusive 1-of-1 designs"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Ready-to-Wear Women */}
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <div className="md:w-1/2 relative h-[70vh] w-full">
              <Image
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop"
                alt="Ready-to-Wear Women Collection - Celestial elegance for everyday luxury"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="font-serif text-3xl md:text-4xl text-amber-900 mb-4">Ready-to-Wear Women</h2>
              <p className="text-amber-800 mb-6 leading-relaxed">
                Our women's ready-to-wear collection brings celestial elegance to everyday luxury. Each piece is
                designed with the same sacred intention as our couture line, made accessible for the divine feminine in
                daily life.
              </p>
              <Link
                href="/collections/ready-to-wear-women"
                className="inline-flex items-center text-amber-700 hover:text-amber-900 font-medium"
              >
                Explore Collection <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Ready-to-Wear Men */}
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <div className="md:w-1/2 order-2 md:order-1">
              <h2 className="font-serif text-3xl md:text-4xl text-amber-900 mb-4">Ready-to-Wear Men</h2>
              <p className="text-amber-800 mb-6 leading-relaxed">
                Our men's collection embodies regal strength and divine masculinity. Each piece is crafted with sacred
                intention, bringing celestial elegance to the modern man's wardrobe.
              </p>
              <Link
                href="/collections/ready-to-wear-men"
                className="inline-flex items-center text-amber-700 hover:text-amber-900 font-medium"
              >
                Explore Collection <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="md:w-1/2 relative h-[70vh] w-full order-1 md:order-2">
              <Image
                src="https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1000&auto=format&fit=crop"
                alt="Ready-to-Wear Men Collection - Regal strength and divine masculinity"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Luxury Makeup */}
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <div className="md:w-1/2 relative h-[70vh] w-full">
              <Image
                src="https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=1000&auto=format&fit=crop"
                alt="Luxury Makeup Collection - Cinematic beauty with divine essence"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="font-serif text-3xl md:text-4xl text-amber-900 mb-4">Luxury Makeup</h2>
              <p className="text-amber-800 mb-6 leading-relaxed">
                Our cinematic beauty line begins with signature lipsticks, each shade infused with divine essence.
                Created to enhance natural beauty with a celestial glow, our makeup embodies the sacred luxury of
                Angelic Royalty.
              </p>
              <Link
                href="/collections/makeup"
                className="inline-flex items-center text-amber-700 hover:text-amber-900 font-medium"
              >
                Discover Beauty <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              name: "Angelic Royalty Collections",
              description:
                "Explore our divine collections, each piece crafted with sacred intention and celestial beauty.",
              url: "https://angelicroyalty.com/collections",
              mainEntity: [
                {
                  "@type": "Product",
                  name: "Women's Couture Collection",
                  description: "Exclusive 1-of-1 couture designs embodying divine feminine energy",
                  url: "https://angelicroyalty.com/collections/womens-couture",
                },
                {
                  "@type": "Product",
                  name: "Ready-to-Wear Women Collection",
                  description: "Celestial elegance for everyday luxury",
                  url: "https://angelicroyalty.com/collections/ready-to-wear-women",
                },
                {
                  "@type": "Product",
                  name: "Ready-to-Wear Men Collection",
                  description: "Regal strength and divine masculinity",
                  url: "https://angelicroyalty.com/collections/ready-to-wear-men",
                },
                {
                  "@type": "Product",
                  name: "Luxury Makeup Collection",
                  description: "Cinematic beauty with divine essence",
                  url: "https://angelicroyalty.com/collections/makeup",
                },
              ],
            }),
          }}
        />
      </section>
    </main>
  )
}
