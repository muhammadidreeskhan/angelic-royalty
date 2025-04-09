import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "About Angelic Royalty | Our Story & Philosophy",
  description:
    "Discover the story and philosophy behind Angelic Royalty, a private luxury fashion house merging divine essence with material elegance.",
  openGraph: {
    title: "About Angelic Royalty | Our Story & Philosophy",
    description:
      "Discover the story and philosophy behind Angelic Royalty, a private luxury fashion house merging divine essence with material elegance.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "About Angelic Royalty",
      },
    ],
  },
}

export default function AboutPage() {
  return (
    <main className="pt-24 pb-16 bg-white">
      <div className="container mx-auto px-4">
        <Link href="/" className="inline-flex items-center text-amber-700 hover:text-amber-900 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
        </Link>

        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-amber-900 mb-6">About Angelic Royalty</h1>
          <p className="text-lg text-amber-800">
            A private luxury fashion house merging divine essence with material elegance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-20">
          <div className="relative h-[70vh] w-full">
            <Image
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop"
              alt="Angelic Royalty Atelier"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="font-serif text-3xl text-amber-900 mb-6">Our Story</h2>
            <p className="text-amber-800 mb-4 leading-relaxed">
              Angelic Royalty was founded with a vision to create fashion that transcends the material world and
              connects with the divine. Our founder, inspired by celestial beauty and sacred geometry, established the
              house as a sanctuary for those who seek clothing that elevates both body and spirit.
            </p>
            <p className="text-amber-800 mb-4 leading-relaxed">
              Each piece we create is infused with intention, designed to honor the sacred vessel of the body while
              celebrating the divine spark within. Our aesthetic is rooted in gold and white to reflect holiness,
              royalty, and sacred design.
            </p>
            <p className="text-amber-800 leading-relaxed">
              We operate as a private luxury fashion house, maintaining exclusivity to ensure that each client receives
              the attention and care they deserve. Our couture pieces are available by application only, allowing us to
              create truly unique garments that resonate with the individual's essence.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="font-serif text-3xl text-amber-900 mb-8 text-center">Our Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative h-40 w-40 mx-auto mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?q=80&w=986&auto=format&fit=crop"
                  alt="Divine Essence"
                  fill
                  sizes="(max-width: 768px) 33vw, 160px"
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="font-serif text-xl text-amber-900 mb-2">Divine Essence</h3>
              <p className="text-amber-800">
                We believe that fashion should connect us to the divine, elevating our experience beyond the material.
              </p>
            </div>
            <div className="text-center">
              <div className="relative h-40 w-40 mx-auto mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?q=80&w=1000&auto=format&fit=crop"
                  alt="Sacred Craftsmanship"
                  fill
                  sizes="(max-width: 768px) 33vw, 160px"
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="font-serif text-xl text-amber-900 mb-2">Sacred Craftsmanship</h3>
              <p className="text-amber-800">
                Each piece is created with intention and reverence, honoring the ancient traditions of couture.
              </p>
            </div>
            <div className="text-center">
              <div className="relative h-40 w-40 mx-auto mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1000&auto=format&fit=crop"
                  alt="Celestial Beauty"
                  fill
                  sizes="(max-width: 768px) 33vw, 160px"
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="font-serif text-xl text-amber-900 mb-2">Celestial Beauty</h3>
              <p className="text-amber-800">
                We draw inspiration from the cosmos, infusing our designs with the harmony and beauty of the heavens.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-20">
          <div className="flex flex-col justify-center order-2 md:order-1">
            <h2 className="font-serif text-3xl text-amber-900 mb-6">Our Atelier</h2>
            <p className="text-amber-800 mb-4 leading-relaxed">
              The Angelic Royalty atelier is a sacred space where creativity flows and divine inspiration takes form.
              Our team of skilled artisans works with the finest materials, infusing each stitch with intention and
              care.
            </p>
            <p className="text-amber-800 leading-relaxed">
              We maintain a small, intimate team to ensure that every piece receives the attention it deserves. Our
              process is unhurried, allowing for the natural unfolding of creativity and the meticulous execution of
              each design.
            </p>
          </div>
          <div className="relative h-[70vh] w-full order-1 md:order-2">
            <Image
              src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1000&auto=format&fit=crop"
              alt="Angelic Royalty Workshop"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-serif text-3xl text-amber-900 mb-6">Join Our Sacred Journey</h2>
          <p className="text-lg text-amber-800 mb-8">
            We invite you to experience the divine elegance of Angelic Royalty. Whether through our exclusive couture
            pieces, ready-to-wear collections, or luxury makeup line, we offer a pathway to connect with your own sacred
            essence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/collections"
              className="inline-flex items-center justify-center px-6 py-3 bg-amber-100 text-amber-900 border border-amber-300 hover:bg-amber-200 rounded-md font-medium"
            >
              Explore Collections
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-amber-300 text-amber-900 hover:bg-amber-50 rounded-md font-medium"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AboutPage",
              name: "About Angelic Royalty",
              description:
                "Discover the story and philosophy behind Angelic Royalty, a private luxury fashion house merging divine essence with material elegance.",
              url: "https://angelicroyalty.com/about",
              mainEntity: {
                "@type": "Organization",
                name: "Angelic Royalty",
                description: "A private luxury fashion house merging divine essence with material elegance.",
                foundingDate: "2020",
                founder: {
                  "@type": "Person",
                  name: "Angelic Royalty Founder",
                },
              },
            }),
          }}
        />
      </div>
    </main>
  )
}
