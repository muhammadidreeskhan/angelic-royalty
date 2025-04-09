"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { X, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart/cart-provider"

export default function AccountWishlist() {
  // Mock wishlist data
  const [wishlist, setWishlist] = useState([
    {
      id: "rtw1",
      name: "Golden Light Blouse",
      price: "$1,200",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: "mk1",
      name: "Divine Radiance Lipstick - Ruby",
      price: "$85",
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: "rtm1",
      name: "Divine Tailored Jacket",
      price: "$2,200",
      image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1000&auto=format&fit=crop",
    },
  ])

  const { addItem } = useCart()

  const removeFromWishlist = (id: string) => {
    setWishlist(wishlist.filter((item) => item.id !== id))
  }

  const addToCart = (item: any) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      quantity: 1,
    })
  }

  if (wishlist.length === 0) {
    return (
      <div className="bg-white rounded-lg border border-amber-100 p-6 text-center">
        <h2 className="font-serif text-2xl text-amber-900 mb-4">Your Wishlist</h2>
        <p className="text-amber-800 mb-6">Your wishlist is empty.</p>
        <Button asChild className="bg-amber-100 text-amber-900 border border-amber-300 hover:bg-amber-200">
          <Link href="/collections">Explore Collections</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg border border-amber-100 p-6">
      <h2 className="font-serif text-2xl text-amber-900 mb-6">Your Wishlist</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlist.map((item) => (
          <div key={item.id} className="border border-amber-100 rounded-lg overflow-hidden group relative">
            <button
              onClick={() => removeFromWishlist(item.id)}
              className="absolute top-2 right-2 bg-white/80 hover:bg-white p-1 rounded-full z-10"
              aria-label="Remove from wishlist"
            >
              <X className="h-4 w-4 text-amber-900" />
            </button>

            <Link href={`/products/${item.id}`} className="block">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-4">
                <h3 className="font-medium text-amber-900 mb-1">{item.name}</h3>
                <p className="text-amber-800">{item.price}</p>
              </div>
            </Link>

            <div className="p-4 pt-0">
              <Button
                onClick={() => addToCart(item)}
                className="w-full bg-amber-100 text-amber-900 border border-amber-300 hover:bg-amber-200"
              >
                <ShoppingBag className="mr-2 h-4 w-4" /> Add to Cart
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
