import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import NewsletterSignup from "@/components/newsletter-signup"

export const metadata = {
  title: "Angelic Royalty | Divine Luxury Fashion House",
  description:
    "Experience divine essence meets material elegance in our exclusive luxury fashion house. Explore couture, ready-to-wear, and luxury makeup collections.",
  openGraph: {
    title: "Angelic Royalty | Divine Luxury Fashion House",
    description:
      "Experience divine essence meets material elegance in our exclusive luxury fashion house. Explore couture, ready-to-wear, and luxury makeup collections.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Angelic Royalty",
      },
    ],
  },
}

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-white/80 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop"
          alt="Angelic Royalty - Luxury Fashion House"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-amber-900 mb-6">
            Angelic Royalty
          </h1>
          <p className="text-lg md:text-xl font-light text-amber-800 max-w-2xl mb-8">
            Divine essence meets material elegance in our exclusive luxury fashion house
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              className="bg-amber-100 text-amber-900 border border-amber-300 hover:bg-amber-200 px-8 py-6"
            >
              <Link href="/collections">Explore Collections</Link>
            </Button>
            <Button asChild variant="outline" className="border-amber-300 text-amber-900 hover:bg-amber-50 px-8 py-6">
              <Link href="/apply">Apply for Couture</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-white to-amber-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-amber-900 text-center mb-16">Our Collections</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            <div className="flex flex-col items-start">
              <div className="relative w-full aspect-[3/4] mb-6 overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop"
                  alt="Women's Couture Collection - Exclusive 1-of-1 designs"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="font-serif text-2xl text-amber-900 mb-3">Women's Couture</h3>
              <p className="text-amber-800 mb-4">Exclusive 1-of-1 designs for the divine feminine</p>
              <Button
                asChild
                variant="link"
                className="text-amber-700 p-0 flex items-center gap-2 hover:text-amber-900"
              >
                <Link href="/collections/womens-couture">
                  Apply to Purchase <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="flex flex-col items-start">
              <div className="relative w-full aspect-[3/4] mb-6 overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=987&auto=format&fit=crop"
                  alt="Ready-to-Wear Collection - Luxurious everyday elegance"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="font-serif text-2xl text-amber-900 mb-3">Ready-to-Wear</h3>
              <p className="text-amber-800 mb-4">Luxurious everyday elegance for women and men</p>
              <Button
                asChild
                variant="link"
                className="text-amber-700 p-0 flex items-center gap-2 hover:text-amber-900"
              >
                <Link href="/collections/ready-to-wear">
                  Explore Collection <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="flex flex-col items-start md:col-span-2">
              <div className="relative w-full aspect-video mb-6 overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=1000&auto=format&fit=crop"
                  alt="Luxury Makeup Collection - Cinematic beauty"
                  fill
                  sizes="100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="font-serif text-2xl text-amber-900 mb-3">Luxury Makeup</h3>
              <p className="text-amber-800 mb-4">Cinematic beauty beginning with our signature lipsticks</p>
              <Button
                asChild
                variant="link"
                className="text-amber-700 p-0 flex items-center gap-2 hover:text-amber-900"
              >
                <Link href="/collections/makeup">
                  Discover Beauty <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Philosophy */}
      <section className="py-24 px-4 md:px-8 bg-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-amber-900 mb-8">Our Philosophy</h2>
          <p className="text-lg text-amber-800 mb-12 leading-relaxed">
            Angelic Royalty merges divine essence with material elegance. Our aesthetic is rooted in gold and white to
            reflect holiness, royalty, and sacred design. Each piece is created with intention, bringing celestial
            beauty to earthly form.
          </p>
          <Button asChild variant="outline" className="border-amber-300 text-amber-900 hover:bg-amber-100">
            <Link href="/about">About Angelic Royalty</Link>
          </Button>
        </div>
      </section>

      {/* Newsletter Signup */}
      <NewsletterSignup />

      {/* VIP Access */}
      <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="font-serif text-3xl md:text-4xl text-amber-900 mb-6">VIP Access</h2>
            <p className="text-amber-800 mb-8 leading-relaxed">
              Experience our most exclusive designs and private collections with VIP access. By invitation only, our
              most valued clients receive early access to new releases and bespoke services.
            </p>
            <Button asChild className="bg-amber-100 text-amber-900 border border-amber-300 hover:bg-amber-200">
              <Link href="/vip">Request Access</Link>
            </Button>
          </div>
          <div className="md:w-1/2 relative h-80 md:h-96 w-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1550614000-4895a10e1bfd?q=80&w=1000&auto=format&fit=crop"
              alt="VIP Access - Exclusive designs and private collections"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Angelic Royalty",
            url: "https://angelicroyalty.com",
            logo: "https://angelicroyalty.com/logo.png",
            description: "A private luxury fashion house merging divine essence with material elegance.",
            sameAs: [
              "https://instagram.com/angelicroyalty",
              "https://facebook.com/angelicroyalty",
              "https://twitter.com/angelicroyalty",
            ],
            address: {
              "@type": "PostalAddress",
              streetAddress: "123 Divine Avenue, Celestial District",
              addressLocality: "New York",
              addressRegion: "NY",
              postalCode: "10001",
              addressCountry: "US",
            },
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "USD",
              lowPrice: "85",
              highPrice: "25000",
              offerCount: "100",
            },
          }),
        }}
      />
    </main>
  )
}
