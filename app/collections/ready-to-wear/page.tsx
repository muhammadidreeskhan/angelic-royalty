import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// This would typically come from a CMS or database
const womenProducts = [
  {
    id: "rtw1",
    name: "Golden Light Blouse",
    price: "$1,200",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop",
    category: "Tops",
  },
  {
    id: "rtw2",
    name: "Divine Silk Pants",
    price: "$950",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1000&auto=format&fit=crop",
    category: "Bottoms",
  },
  {
    id: "rtw3",
    name: "Celestial Cashmere Sweater",
    price: "$1,450",
    image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=1000&auto=format&fit=crop",
    category: "Tops",
  },
  {
    id: "rtw4",
    name: "Sacred Essence Skirt",
    price: "$1,100",
    image: "https://images.unsplash.com/photo-1551163943-3f7fb896e0f5?q=80&w=1000&auto=format&fit=crop",
    category: "Bottoms",
  },
  {
    id: "rtw5",
    name: "Angelic White Dress",
    price: "$1,800",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1000&auto=format&fit=crop",
    category: "Dresses",
  },
  {
    id: "rtw6",
    name: "Divine Gold Jacket",
    price: "$2,100",
    image: "https://images.unsplash.com/photo-1548624313-0396c75e4b1a?q=80&w=1000&auto=format&fit=crop",
    category: "Outerwear",
  },
]

const menProducts = [
  {
    id: "rtm1",
    name: "Divine Tailored Jacket",
    price: "$2,200",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1000&auto=format&fit=crop",
    category: "Outerwear",
  },
  {
    id: "rtm2",
    name: "Sacred Silk Shirt",
    price: "$850",
    image: "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?q=80&w=1000&auto=format&fit=crop",
    category: "Tops",
  },
  {
    id: "rtm3",
    name: "Celestial Cashmere Sweater",
    price: "$1,350",
    image: "https://images.unsplash.com/photo-1608030609295-a581b8f46672?q=80&w=1000&auto=format&fit=crop",
    category: "Tops",
  },
  {
    id: "rtm4",
    name: "Angelic Trousers",
    price: "$950",
    image: "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?q=80&w=1000&auto=format&fit=crop",
    category: "Bottoms",
  },
  {
    id: "rtm5",
    name: "Divine White Shirt",
    price: "$780",
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=1000&auto=format&fit=crop",
    category: "Tops",
  },
  {
    id: "rtm6",
    name: "Sacred Gold Vest",
    price: "$1,200",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop",
    category: "Tops",
  },
]

export const metadata = {
  title: "Ready-to-Wear Collections | Angelic Royalty",
  description:
    "Explore our divine ready-to-wear collections for women and men, bringing celestial elegance to everyday luxury.",
  openGraph: {
    title: "Ready-to-Wear Collections | Angelic Royalty",
    description:
      "Explore our divine ready-to-wear collections for women and men, bringing celestial elegance to everyday luxury.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Angelic Royalty Ready-to-Wear",
      },
    ],
  },
}

export default function ReadyToWearPage() {
  return (
    <main className="pt-24 pb-16 bg-white">
      <section className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-amber-900 mb-6">Ready-to-Wear</h1>
          <p className="text-lg text-amber-800">
            Our ready-to-wear collections bring celestial elegance to everyday luxury, crafted with the same sacred
            intention as our couture line.
          </p>
        </div>

        <Tabs defaultValue="women" className="w-full mb-12">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="women" className="text-lg py-3">
                Women
              </TabsTrigger>
              <TabsTrigger value="men" className="text-lg py-3">
                Men
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="women">
            <div className="relative mb-16 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-900/30 to-transparent z-10" />
              <Image
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop"
                alt="Women's Ready-to-Wear"
                width={1920}
                height={600}
                className="w-full h-[60vh] object-cover"
                priority
              />
              <div className="absolute inset-0 flex items-center z-20 px-8 md:px-16">
                <div className="max-w-lg">
                  <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Women's Collection</h2>
                  <p className="text-white/90 mb-6 leading-relaxed">
                    Our women's ready-to-wear collection brings celestial elegance to everyday luxury. Each piece is
                    designed with the same sacred intention as our couture line.
                  </p>
                  <Button asChild className="bg-white text-amber-900 hover:bg-amber-50">
                    <Link href="/collections/ready-to-wear-women">View All Women's</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {womenProducts.map((product, index) => (
                <div key={product.id} className="group">
                  <Link href={`/products/${product.id}`} className="block">
                    <div className="relative aspect-[3/4] mb-4 overflow-hidden">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        loading={index < 3 ? "eager" : "lazy"}
                      />
                    </div>
                    <h3 className="font-serif text-xl text-amber-900 mb-1">{product.name}</h3>
                    <p className="text-amber-800 mb-1">{product.price}</p>
                    <p className="text-amber-700 text-sm">{product.category}</p>
                  </Link>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button asChild className="bg-amber-100 text-amber-900 border border-amber-300 hover:bg-amber-200">
                <Link href="/collections/ready-to-wear-women">
                  View All Women's Collection <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="men">
            <div className="relative mb-16 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-900/30 to-transparent z-10" />
              <Image
                src="https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=2070&auto=format&fit=crop"
                alt="Men's Ready-to-Wear"
                width={1920}
                height={600}
                className="w-full h-[60vh] object-cover"
                priority
              />
              <div className="absolute inset-0 flex items-center z-20 px-8 md:px-16">
                <div className="max-w-lg">
                  <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Men's Collection</h2>
                  <p className="text-white/90 mb-6 leading-relaxed">
                    Our men's collection embodies regal strength and divine masculinity. Each piece is crafted with
                    sacred intention, bringing celestial elegance to the modern man's wardrobe.
                  </p>
                  <Button asChild className="bg-white text-amber-900 hover:bg-amber-50">
                    <Link href="/collections/ready-to-wear-men">View All Men's</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {menProducts.map((product, index) => (
                <div key={product.id} className="group">
                  <Link href={`/products/${product.id}`} className="block">
                    <div className="relative aspect-[3/4] mb-4 overflow-hidden">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        loading={index < 3 ? "eager" : "lazy"}
                      />
                    </div>
                    <h3 className="font-serif text-xl text-amber-900 mb-1">{product.name}</h3>
                    <p className="text-amber-800 mb-1">{product.price}</p>
                    <p className="text-amber-700 text-sm">{product.category}</p>
                  </Link>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button asChild className="bg-amber-100 text-amber-900 border border-amber-300 hover:bg-amber-200">
                <Link href="/collections/ready-to-wear-men">
                  View All Men's Collection <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        <section className="max-w-4xl mx-auto text-center py-16 border-t border-amber-100">
          <h2 className="font-serif text-3xl text-amber-900 mb-6">Our Craftsmanship</h2>
          <p className="text-amber-800 mb-8 leading-relaxed">
            Each ready-to-wear piece is crafted with the same attention to detail and sacred intention as our couture
            line. We use only the finest materials, ethically sourced and carefully selected to ensure both divine
            beauty and lasting quality.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="relative h-40 w-40 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?q=80&w=1000&auto=format&fit=crop"
                  alt="Ethical Materials"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-serif text-xl text-amber-900 mb-2">Ethical Materials</h3>
              <p className="text-amber-800">
                We source only the finest materials with respect for both the environment and the divine.
              </p>
            </div>
            <div className="text-center">
              <div className="relative h-40 w-40 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1000&auto=format&fit=crop"
                  alt="Artisanal Craftsmanship"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-serif text-xl text-amber-900 mb-2">Artisanal Craftsmanship</h3>
              <p className="text-amber-800">
                Each piece is crafted by skilled artisans who bring decades of experience to their work.
              </p>
            </div>
            <div className="text-center">
              <div className="relative h-40 w-40 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1000&auto=format&fit=crop"
                  alt="Sacred Intention"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-serif text-xl text-amber-900 mb-2">Sacred Intention</h3>
              <p className="text-amber-800">
                Every garment is created with intention, designed to honor the divine within the wearer.
              </p>
            </div>
          </div>
        </section>
      </section>
    </main>
  )
}
