import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowRight } from "lucide-react"

// This would typically come from a CMS or database
const collections = {
  "womens-couture": {
    title: "Women's Couture",
    description:
      "Exclusive 1-of-1 designs embodying divine feminine energy through meticulous craftsmanship and celestial inspiration.",
    requiresApplication: true,
    products: [
      {
        id: "wc1",
        name: "Celestial Gown",
        price: "Price Upon Request",
        image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1000&auto=format&fit=crop",
      },
      {
        id: "wc2",
        name: "Divine Essence Dress",
        price: "Price Upon Request",
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1000&auto=format&fit=crop",
      },
      {
        id: "wc3",
        name: "Sacred Light Ensemble",
        price: "Price Upon Request",
        image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000&auto=format&fit=crop",
      },
      {
        id: "wc4",
        name: "Angelic Royalty Gown",
        price: "Price Upon Request",
        image: "https://images.unsplash.com/photo-1571513722275-4b41940f54b8?q=80&w=1000&auto=format&fit=crop",
      },
    ],
  },
  "ready-to-wear-women": {
    title: "Ready-to-Wear Women",
    description: "Our women's ready-to-wear collection brings celestial elegance to everyday luxury.",
    requiresApplication: false,
    products: [
      {
        id: "rtw1",
        name: "Golden Light Blouse",
        price: "$1,200",
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop",
      },
      {
        id: "rtw2",
        name: "Divine Silk Pants",
        price: "$950",
        image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1000&auto=format&fit=crop",
      },
      {
        id: "rtw3",
        name: "Celestial Cashmere Sweater",
        price: "$1,450",
        image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=1000&auto=format&fit=crop",
      },
      {
        id: "rtw4",
        name: "Sacred Essence Skirt",
        price: "$1,100",
        image: "https://images.unsplash.com/photo-1551163943-3f7fb896e0f5?q=80&w=1000&auto=format&fit=crop",
      },
    ],
  },
  "ready-to-wear-men": {
    title: "Ready-to-Wear Men",
    description: "Our men's collection embodies regal strength and divine masculinity.",
    requiresApplication: false,
    products: [
      {
        id: "rtm1",
        name: "Divine Tailored Jacket",
        price: "$2,200",
        image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1000&auto=format&fit=crop",
      },
      {
        id: "rtm2",
        name: "Sacred Silk Shirt",
        price: "$850",
        image: "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?q=80&w=1000&auto=format&fit=crop",
      },
      {
        id: "rtm3",
        name: "Celestial Cashmere Sweater",
        price: "$1,350",
        image: "https://images.unsplash.com/photo-1608030609295-a581b8f46672?q=80&w=1000&auto=format&fit=crop",
      },
      {
        id: "rtm4",
        name: "Angelic Trousers",
        price: "$950",
        image: "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?q=80&w=1000&auto=format&fit=crop",
      },
    ],
  },
  makeup: {
    title: "Luxury Makeup",
    description: "Our cinematic beauty line begins with signature lipsticks, each shade infused with divine essence.",
    requiresApplication: false,
    products: [
      {
        id: "mk1",
        name: "Divine Radiance Lipstick - Ruby",
        price: "$85",
        image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=1000&auto=format&fit=crop",
      },
      {
        id: "mk2",
        name: "Divine Radiance Lipstick - Gold",
        price: "$85",
        image: "https://images.unsplash.com/photo-1631214524020-3c8707199930?q=80&w=1000&auto=format&fit=crop",
      },
      {
        id: "mk3",
        name: "Divine Radiance Lipstick - Rose",
        price: "$85",
        image: "https://images.unsplash.com/photo-1599733589046-833caccbbd03?q=80&w=1000&auto=format&fit=crop",
      },
      {
        id: "mk4",
        name: "Divine Radiance Lipstick - Nude",
        price: "$85",
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1000&auto=format&fit=crop",
      },
    ],
  },
}

export default function CollectionPage({ params }: { params: { collection: string } }) {
  const collection = collections[params.collection as keyof typeof collections]

  if (!collection) {
    notFound()
  }

  return (
    <main className="pt-24 pb-16 bg-white">
      <section className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-amber-900 mb-6">{collection.title}</h1>
          <p className="text-lg text-amber-800">{collection.description}</p>
          {collection.requiresApplication && (
            <div className="mt-8">
              <Link
                href="/apply"
                className="inline-flex items-center justify-center px-6 py-3 bg-amber-100 text-amber-900 border border-amber-300 hover:bg-amber-200 rounded-md font-medium"
              >
                Apply to Purchase
              </Link>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 gap-24 md:gap-32">
          {collection.products.map((product, index) => (
            <div
              key={product.id}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8 md:gap-16`}
            >
              <div className="md:w-1/2 relative h-[80vh] w-full">
                <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
              </div>
              <div className="md:w-1/2 text-center md:text-left">
                <h2 className="font-serif text-3xl text-amber-900 mb-3">{product.name}</h2>
                <p className="text-xl text-amber-800 mb-6">{product.price}</p>
                {collection.requiresApplication ? (
                  <Link
                    href="/apply"
                    className="inline-flex items-center text-amber-700 hover:text-amber-900 font-medium"
                  >
                    Apply to Purchase <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                ) : (
                  <Link
                    href={`/products/${product.id}`}
                    className="inline-flex items-center text-amber-700 hover:text-amber-900 font-medium"
                  >
                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
