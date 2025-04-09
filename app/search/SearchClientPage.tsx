"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ShoppingBag, Heart, SearchIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useCart } from "@/components/cart/cart-provider"
import { useToast } from "@/components/ui/use-toast"
import { allProducts } from "@/data/products"

type Product = (typeof allProducts)[0]

export default function SearchClientPage({ initialQuery = "" }: { initialQuery?: string }) {
  const { addItem } = useCart()
  const { toast } = useToast()
  const [query, setQuery] = useState(initialQuery)
  const [results, setResults] = useState<Product[]>([])

  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([])
      return
    }

    const searchTerms = query.toLowerCase().split(" ").filter(Boolean)

    const filteredProducts = allProducts.filter((product) => {
      const searchableText =
        `${product.name} ${product.description} ${product.category} ${product.collection}`.toLowerCase()
      return searchTerms.some((term) => searchableText.includes(term))
    })

    setResults(filteredProducts)
  }, [query])

  const handleAddToCart = (product: Product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity: 1,
    })

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  const handleAddToWishlist = (product: Product) => {
    toast({
      title: "Added to wishlist",
      description: `${product.name} has been added to your wishlist.`,
    })
  }

  return (
    <main className="pt-24 pb-16 bg-white">
      <div className="container mx-auto px-4">
        <Link href="/" className="inline-flex items-center text-amber-700 hover:text-amber-900 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
        </Link>

        <div className="max-w-3xl mx-auto text-center mb-8">
          <h1 className="font-serif text-4xl md:text-5xl text-amber-900 mb-6">Search</h1>
          <p className="text-lg text-amber-800 mb-6">Find divine luxury products from our collections.</p>

          <div className="relative max-w-xl mx-auto">
            <Input
              type="search"
              placeholder="Search for products..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10 border-amber-200 focus-visible:ring-amber-300"
            />
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-amber-400" />
          </div>
        </div>

        {query.trim().length < 2 ? (
          <div className="text-center py-12">
            <p className="text-amber-800">Enter at least 2 characters to search</p>
          </div>
        ) : results.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="font-serif text-2xl text-amber-900 mb-4">No results found</h2>
            <p className="text-amber-800 mb-6">Try different keywords or browse our collections.</p>
            <Button asChild className="bg-amber-100 text-amber-900 border border-amber-300 hover:bg-amber-200">
              <Link href="/shop">Browse All Products</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="mb-8">
              <p className="text-amber-800">
                Found <span className="font-medium">{results.length}</span> results for &quot;{query}&quot;
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
              {results.map((product) => (
                <div key={product.id} className="group relative">
                  <Link href={`/products/${product.id}`} className="block">
                    <div className="relative aspect-[3/4] mb-4 overflow-hidden">
                      <Image
                        src={product.images[0] || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {product.isNew && (
                        <div className="absolute top-2 left-2 bg-amber-100 text-amber-900 text-xs px-2 py-1 rounded-full">
                          New
                        </div>
                      )}
                      {product.isBestSeller && (
                        <div className="absolute top-2 right-2 bg-amber-500 text-white text-xs px-2 py-1 rounded-full">
                          Best Seller
                        </div>
                      )}
                    </div>
                    <h3 className="font-serif text-lg text-amber-900 mb-1">{product.name}</h3>
                    <p className="text-amber-800 mb-1">{product.price}</p>
                    <p className="text-amber-700 text-sm">{product.category}</p>
                  </Link>

                  <div className="mt-4 flex gap-2">
                    <Button
                      className="flex-1 bg-amber-100 text-amber-900 border border-amber-300 hover:bg-amber-200"
                      onClick={() => handleAddToCart(product)}
                    >
                      <ShoppingBag className="mr-2 h-4 w-4" /> Add to Cart
                    </Button>
                    <Button
                      variant="outline"
                      className="border-amber-300 text-amber-900 hover:bg-amber-50 px-3"
                      onClick={() => handleAddToWishlist(product)}
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  )
}
