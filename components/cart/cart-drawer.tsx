"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { X, Minus, Plus, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/sheet"
import { useCart, type CartItem as CartItemType } from "./cart-provider"
import { cn } from "@/lib/utils"

export default function CartDrawer() {
  const { state, removeItem, updateQuantity, closeCart } = useCart()
  const { items, isOpen, subtotal } = state

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && closeCart()}>
      <SheetContent className="w-full sm:max-w-md flex flex-col h-full">
        <SheetHeader className="border-b border-amber-100 pb-4">
          <SheetTitle className="font-serif text-2xl text-amber-900 flex items-center">
            <ShoppingBag className="mr-2 h-5 w-5" /> Your Cart
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center flex-grow py-12">
            <div className="bg-amber-50 p-6 rounded-full mb-6">
              <ShoppingBag className="h-12 w-12 text-amber-300" />
            </div>
            <h3 className="font-serif text-xl text-amber-900 mb-2">Your cart is empty</h3>
            <p className="text-amber-700 text-center mb-6">
              Discover our divine collections and add sacred pieces to your cart.
            </p>
            <Button
              asChild
              className="bg-amber-100 text-amber-900 border border-amber-300 hover:bg-amber-200"
              onClick={closeCart}
            >
              <Link href="/collections">Explore Collections</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-grow overflow-y-auto py-6">
              <ul className="space-y-6">
                {items.map((item) => (
                  <CartItem
                    key={`${item.id}-${item.color}-${item.size}-${item.isDepositOnly ? "deposit" : "full"}`}
                    item={item}
                  />
                ))}
              </ul>
            </div>

            <SheetFooter className="border-t border-amber-100 pt-4 flex-col gap-4">
              <div className="flex justify-between items-center w-full">
                <span className="text-amber-900 font-medium">Subtotal</span>
                <span className="text-amber-900 font-serif text-lg">{subtotal}</span>
              </div>
              <p className="text-amber-700 text-sm">Shipping and taxes calculated at checkout</p>
              <Button asChild className="w-full bg-amber-100 text-amber-900 border border-amber-300 hover:bg-amber-200">
                <Link href="/checkout" onClick={closeCart}>
                  Proceed to Checkout
                </Link>
              </Button>
              <Button
                variant="outline"
                className="w-full border-amber-300 text-amber-900 hover:bg-amber-50"
                onClick={closeCart}
              >
                Continue Shopping
              </Button>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}

function CartItem({ item }: { item: CartItemType }) {
  const { removeItem, updateQuantity } = useCart()
  const [isRemoving, setIsRemoving] = useState(false)

  const handleRemove = () => {
    setIsRemoving(true)
    setTimeout(() => {
      removeItem(item.id)
    }, 300)
  }

  const incrementQuantity = () => {
    updateQuantity(item.id, item.quantity + 1)
  }

  const decrementQuantity = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1)
    }
  }

  const itemPrice = Number.parseFloat(item.price.replace(/[^0-9.]/g, ""))
  const multiplier = item.isDepositOnly ? 0.5 : 1
  const displayPrice = `$${(itemPrice * multiplier).toFixed(2)}`
  const totalPrice = `$${(itemPrice * item.quantity * multiplier).toFixed(2)}`

  return (
    <li className={cn("flex gap-4 transition-all duration-300", isRemoving && "opacity-0 transform -translate-x-4")}>
      <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md">
        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill sizes="96px" className="object-cover" />
      </div>
      <div className="flex flex-col flex-grow min-w-0">
        <div className="flex justify-between">
          <h4 className="font-medium text-amber-900 truncate">{item.name}</h4>
          <button onClick={handleRemove} className="text-amber-500 hover:text-amber-700 ml-2" aria-label="Remove item">
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="text-sm text-amber-700 mt-1">
          {item.isDepositOnly && <span className="block text-amber-600">50% Deposit</span>}
          {item.color && <span className="block">Color: {item.color}</span>}
          {item.size && <span className="block">Size: {item.size}</span>}
          <span className="block">{displayPrice} each</span>
        </div>
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center border border-amber-200 rounded-md">
            <button
              onClick={decrementQuantity}
              disabled={item.quantity <= 1}
              className="px-2 py-1 text-amber-900 disabled:text-amber-300"
              aria-label="Decrease quantity"
            >
              <Minus className="h-3 w-3" />
            </button>
            <span className="px-2 py-1 text-amber-900 text-sm min-w-[2rem] text-center">{item.quantity}</span>
            <button onClick={incrementQuantity} className="px-2 py-1 text-amber-900" aria-label="Increase quantity">
              <Plus className="h-3 w-3" />
            </button>
          </div>
          <span className="font-medium text-amber-900">{totalPrice}</span>
        </div>
      </div>
    </li>
  )
}
