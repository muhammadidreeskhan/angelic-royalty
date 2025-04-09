"use client"

import { useState } from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ShoppingBag, Heart, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CinematicProductView from "@/components/cinematic-product-view"
import { useCart } from "@/components/cart/cart-provider"
import { useToast } from "@/components/ui/use-toast"

// This would typically come from a CMS or database
const products = {
  mk1: {
    id: "mk1",
    name: "Divine Radiance Lipstick - Ruby",
    price: "$85",
    description:
      "Our Divine Radiance Lipstick in Ruby embodies the sacred essence of Angelic Royalty. This luxurious formula delivers rich, long-lasting color with a satin finish that feels weightless on the lips. Infused with nourishing ingredients, it provides both celestial beauty and divine comfort.",
    details:
      "Enriched with sacred oils and divine extracts, our lipstick nourishes while it beautifies. The gold-infused formula creates a subtle luminosity that enhances your natural radiance.",
    ingredients:
      "Ricinus Communis (Castor) Seed Oil, Caprylic/Capric Triglyceride, Cetyl Ricinoleate, Euphorbia Cerifera (Candelilla) Wax, Silica, Microcrystalline Wax, Copernicia Cerifera (Carnauba) Wax, Mica, Helianthus Annuus (Sunflower) Seed Oil, Tocopherol, Rosmarinus Officinalis (Rosemary) Leaf Extract. May Contain: CI 77891 (Titanium Dioxide), CI 77491 (Iron Oxides), CI 15850 (Red 7 Lake).",
    images: [
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631214524020-3c8707199930?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599733589046-833caccbbd03?q=80&w=1000&auto=format&fit=crop",
    ],
    video: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1000&auto=format&fit=crop",
    colors: [
      { id: "ruby", name: "Ruby", value: "#9B2335" },
      { id: "gold", name: "Gold", value: "#D4AF37" },
      { id: "rose", name: "Rose", value: "#E8ADAA" },
      { id: "nude", name: "Nude", value: "#C8A99B" },
    ],
    collection: "makeup",
  },
  rtw1: {
    id: "rtw1",
    name: "Golden Light Blouse",
    price: "$1,200",
    description:
      "The Golden Light Blouse embodies celestial elegance in everyday luxury. Crafted from the finest silk with sacred intention, this piece brings divine feminine energy to your wardrobe.",
    details:
      "Made from 100% silk with hand-finished details. The subtle gold-infused thread creates a luminous effect that shifts with movement, embodying the sacred light of Angelic Royalty.",
    care: "Dry clean only. Store in a cool, dry place away from direct sunlight.",
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=1000&auto=format&fit=crop",
    ],
    video: "https://images.unsplash.com/photo-1551163943-3f7fb896e0f5?q=80&w=1000&auto=format&fit=crop",
    sizes: ["XS", "S", "M", "L", "XL"],
    collection: "ready-to-wear-women",
  },
  rtm1: {
    id: "rtm1",
    name: "Divine Tailored Jacket",
    price: "$2,200",
    description:
      "The Divine Tailored Jacket embodies regal strength and sacred masculinity. Crafted with celestial precision, this piece brings divine elegance to the modern man's wardrobe.",
    details:
      "Made from the finest wool with silk lining and hand-finished details. The subtle gold accents create a distinguished look that commands respect and admiration.",
    care: "Dry clean only. Store on a padded hanger in a cool, dry place.",
    images: [
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1608030609295-a581b8f46672?q=80&w=1000&auto=format&fit=crop",
    ],
    video: "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?q=80&w=1000&auto=format&fit=crop",
    sizes: ["S", "M", "L", "XL", "XXL"],
    collection: "ready-to-wear-men",
  },
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products[params.id as keyof typeof products]
  const { toast } = useToast()

  if (!product) {
    notFound()
  }

  const [selectedColor, setSelectedColor] = useState(product.colors?.[0]?.id || "")
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || "")
  const [depositOption, setDepositOption] = useState(false)
  const [isAddingToCart, setIsAddingToCart] = useState(false)
  const [isAddedToWishlist, setIsAddedToWishlist] = useState(false)

  const { addItem } = useCart()

  const handleAddToCart = () => {
    setIsAddingToCart(true)

    setTimeout(() => {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        quantity: 1,
        color: product.colors ? product.colors.find((c) => c.id === selectedColor)?.name : undefined,
        size: selectedSize || undefined,
        isDepositOnly: depositOption,
      })

      setIsAddingToCart(false)

      toast({
        title: "Added to cart",
        description: `${product.name} has been added to your cart.`,
      })
    }, 500)
  }

  const handleAddToWishlist = () => {
    setIsAddedToWishlist(!isAddedToWishlist)

    toast({
      title: isAddedToWishlist ? "Removed from wishlist" : "Added to wishlist",
      description: `${product.name} has been ${isAddedToWishlist ? "removed from" : "added to"} your wishlist.`,
    })
  }

  return (
    <main className="pt-24 pb-16 bg-white">
      <div className="container mx-auto px-4">
        <Link
          href={`/collections/${product.collection}`}
          className="inline-flex items-center text-amber-700 hover:text-amber-900 mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to{" "}
          {product.collection
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Product Images - Using Cinematic Product View */}
          <CinematicProductView images={product.images} video={product.video} alt={product.name} />

          {/* Product Details */}
          <div className="space-y-8">
            <div>
              <h1 className="font-serif text-3xl md:text-4xl text-amber-900 mb-2">{product.name}</h1>
              <p className="text-2xl text-amber-800">{product.price}</p>
            </div>

            <p className="text-amber-800 leading-relaxed">{product.description}</p>

            {/* Color Selection for Makeup */}
            {product.colors && (
              <div className="space-y-4">
                <h3 className="font-medium text-amber-900">Color</h3>
                <div className="flex space-x-4">
                  {product.colors.map((color) => (
                    <button
                      key={color.id}
                      className={`h-10 w-10 rounded-full border-2 ${selectedColor === color.id ? "ring-2 ring-amber-500 ring-offset-2" : "border-amber-200"}`}
                      style={{ backgroundColor: color.value }}
                      onClick={() => setSelectedColor(color.id)}
                      aria-label={color.name}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Size Selection for Clothing */}
            {product.sizes && (
              <div className="space-y-4">
                <h3 className="font-medium text-amber-900">Size</h3>
                <RadioGroup value={selectedSize} onValueChange={setSelectedSize} className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <div key={size} className="flex items-center space-x-2">
                      <RadioGroupItem value={size} id={`size-${size}`} className="peer sr-only" />
                      <Label
                        htmlFor={`size-${size}`}
                        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-amber-200 bg-white text-center peer-data-[state=checked]:bg-amber-100 peer-data-[state=checked]:border-amber-500 peer-data-[state=checked]:text-amber-900"
                      >
                        {size}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            )}

            {/* 50% Deposit Option */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="deposit-option"
                  checked={depositOption}
                  onChange={() => setDepositOption(!depositOption)}
                  className="h-4 w-4 rounded border-amber-300 text-amber-600 focus:ring-amber-500"
                />
                <label htmlFor="deposit-option" className="text-amber-900 font-medium">
                  Pay 50% Deposit Now (${(Number.parseFloat(product.price.replace(/[^0-9.]/g, "")) / 2).toFixed(2)})
                </label>
              </div>
              <p className="text-sm text-amber-700 pl-6">
                Pay 50% now and the remaining balance will be invoiced before shipping.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-amber-100 text-amber-900 border border-amber-300 hover:bg-amber-200 flex-1"
                onClick={handleAddToCart}
                disabled={isAddingToCart}
              >
                {isAddingToCart ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-amber-900"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Adding...
                  </span>
                ) : (
                  <>
                    <ShoppingBag className="mr-2 h-4 w-4" /> Add to Cart
                  </>
                )}
              </Button>
              <Button
                variant="outline"
                className={`border-amber-300 hover:bg-amber-50 ${isAddedToWishlist ? "bg-amber-50 text-amber-700" : "text-amber-900"}`}
                onClick={handleAddToWishlist}
              >
                {isAddedToWishlist ? (
                  <>
                    <Check className="mr-2 h-4 w-4" /> Added to Wishlist
                  </>
                ) : (
                  <>
                    <Heart className="mr-2 h-4 w-4" /> Add to Wishlist
                  </>
                )}
              </Button>
            </div>

            <Tabs defaultValue="details" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-amber-50">
                <TabsTrigger value="details">Details</TabsTrigger>
                {product.ingredients && <TabsTrigger value="ingredients">Ingredients</TabsTrigger>}
                {product.care && <TabsTrigger value="care">Care</TabsTrigger>}
              </TabsList>
              <TabsContent value="details" className="pt-4 text-amber-800">
                <p className="leading-relaxed">{product.details}</p>
              </TabsContent>
              {product.ingredients && (
                <TabsContent value="ingredients" className="pt-4 text-amber-800">
                  <p className="leading-relaxed">{product.ingredients}</p>
                </TabsContent>
              )}
              {product.care && (
                <TabsContent value="care" className="pt-4 text-amber-800">
                  <p className="leading-relaxed">{product.care}</p>
                </TabsContent>
              )}
            </Tabs>
          </div>
        </div>

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: product.name,
              image: product.images,
              description: product.description,
              brand: {
                "@type": "Brand",
                name: "Angelic Royalty",
              },
              offers: {
                "@type": "Offer",
                url: `https://angelicroyalty.com/products/${product.id}`,
                priceCurrency: "USD",
                price: product.price.replace(/[^0-9.]/g, ""),
                availability: "https://schema.org/InStock",
              },
            }),
          }}
        />
      </div>
    </main>
  )
}
