"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ArrowLeft, CreditCard, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useCart } from "@/components/cart/cart-provider"
import { useAuth } from "@/components/auth/auth-provider"

export default function CheckoutPage() {
  const { state, clearCart } = useCart()
  const { user, isAuthenticated } = useAuth()
  const router = useRouter()
  const [activeStep, setActiveStep] = useState(1)
  const [isProcessing, setIsProcessing] = useState(false)
  const [orderComplete, setOrderComplete] = useState(false)
  const [shippingInfo, setShippingInfo] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    phone: "",
    address: "",
    city: "",
    country: "",
    postalCode: "",
  })
  const [paymentMethod, setPaymentMethod] = useState("credit-card")
  const [cardInfo, setCardInfo] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  })

  useEffect(() => {
    if (state.items.length === 0 && !orderComplete) {
      router.push("/")
    }
  }, [state.items, orderComplete, router])

  const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setShippingInfo((prev) => ({ ...prev, [name]: value }))
  }

  const handleCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCardInfo((prev) => ({ ...prev, [name]: value }))
  }

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setActiveStep(2)
    window.scrollTo(0, 0)
  }

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsProcessing(false)
    setOrderComplete(true)
    clearCart()
    window.scrollTo(0, 0)
  }

  // Calculate order summary
  const subtotal = Number.parseFloat(state.subtotal.replace(/[^0-9.]/g, ""))
  const shipping = 15
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  if (orderComplete) {
    return (
      <main className="pt-24 pb-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center py-12">
            <div className="bg-amber-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-amber-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="font-serif text-3xl md:text-4xl text-amber-900 mb-4">Order Confirmed</h1>
            <p className="text-amber-800 mb-8">
              Thank you for your order. We've received your payment and will begin processing your order right away.
            </p>
            <p className="text-amber-800 mb-8">
              Order confirmation has been sent to <span className="font-medium">{shippingInfo.email}</span>
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild className="bg-amber-100 text-amber-900 border border-amber-300 hover:bg-amber-200">
                <Link href="/">Return to Home</Link>
              </Button>
              {isAuthenticated && (
                <Button asChild variant="outline" className="border-amber-300 text-amber-900 hover:bg-amber-50">
                  <Link href="/account?tab=orders">View Orders</Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="pt-24 pb-16 bg-white">
      <div className="container mx-auto px-4">
        <Link href="/" className="inline-flex items-center text-amber-700 hover:text-amber-900 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" /> Continue Shopping
        </Link>

        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl text-amber-900 mb-4">Checkout</h1>
          <div className="flex justify-center items-center space-x-4">
            <div className={`flex items-center ${activeStep >= 1 ? "text-amber-900" : "text-amber-400"}`}>
              <div
                className={`h-8 w-8 rounded-full flex items-center justify-center ${activeStep >= 1 ? "bg-amber-100 border border-amber-300" : "bg-amber-50 border border-amber-200"}`}
              >
                1
              </div>
              <span className="ml-2 font-medium">Shipping</span>
            </div>
            <div className="w-8 h-0.5 bg-amber-200"></div>
            <div className={`flex items-center ${activeStep >= 2 ? "text-amber-900" : "text-amber-400"}`}>
              <div
                className={`h-8 w-8 rounded-full flex items-center justify-center ${activeStep >= 2 ? "bg-amber-100 border border-amber-300" : "bg-amber-50 border border-amber-200"}`}
              >
                2
              </div>
              <span className="ml-2 font-medium">Payment</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            {activeStep === 1 && (
              <div className="bg-white rounded-lg border border-amber-100 p-6">
                <h2 className="font-serif text-2xl text-amber-900 mb-6">Shipping Information</h2>

                <form onSubmit={handleShippingSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={shippingInfo.firstName}
                        onChange={handleShippingChange}
                        required
                        className="border-amber-200"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={shippingInfo.lastName}
                        onChange={handleShippingChange}
                        required
                        className="border-amber-200"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={shippingInfo.email}
                      onChange={handleShippingChange}
                      required
                      className="border-amber-200"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={shippingInfo.phone}
                      onChange={handleShippingChange}
                      required
                      className="border-amber-200"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      name="address"
                      value={shippingInfo.address}
                      onChange={handleShippingChange}
                      required
                      className="border-amber-200"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        name="city"
                        value={shippingInfo.city}
                        onChange={handleShippingChange}
                        required
                        className="border-amber-200"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">Country</Label>
                      <Input
                        id="country"
                        name="country"
                        value={shippingInfo.country}
                        onChange={handleShippingChange}
                        required
                        className="border-amber-200"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="postalCode">Postal Code</Label>
                      <Input
                        id="postalCode"
                        name="postalCode"
                        value={shippingInfo.postalCode}
                        onChange={handleShippingChange}
                        required
                        className="border-amber-200"
                      />
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      className="w-full bg-amber-100 text-amber-900 border border-amber-300 hover:bg-amber-200"
                    >
                      Continue to Payment
                    </Button>
                  </div>
                </form>
              </div>
            )}

            {activeStep === 2 && (
              <div className="bg-white rounded-lg border border-amber-100 p-6">
                <h2 className="font-serif text-2xl text-amber-900 mb-6">Payment Method</h2>

                <form onSubmit={handlePaymentSubmit} className="space-y-6">
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="credit-card" id="credit-card" />
                      <Label htmlFor="credit-card" className="flex items-center">
                        <CreditCard className="mr-2 h-4 w-4" /> Credit Card
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="paypal" id="paypal" />
                      <Label htmlFor="paypal">PayPal</Label>
                    </div>
                  </RadioGroup>

                  {paymentMethod === "credit-card" && (
                    <div className="space-y-4 border border-amber-200 rounded-lg p-4 mt-4">
                      <div className="space-y-2">
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input
                          id="cardNumber"
                          name="cardNumber"
                          value={cardInfo.cardNumber}
                          onChange={handleCardChange}
                          placeholder="1234 5678 9012 3456"
                          required
                          className="border-amber-200"
                          maxLength={19}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="cardName">Name on Card</Label>
                        <Input
                          id="cardName"
                          name="cardName"
                          value={cardInfo.cardName}
                          onChange={handleCardChange}
                          placeholder="John Doe"
                          required
                          className="border-amber-200"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiryDate">Expiry Date</Label>
                          <Input
                            id="expiryDate"
                            name="expiryDate"
                            value={cardInfo.expiryDate}
                            onChange={handleCardChange}
                            placeholder="MM/YY"
                            required
                            className="border-amber-200"
                            maxLength={5}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="cvv">CVV</Label>
                          <Input
                            id="cvv"
                            name="cvv"
                            type="password"
                            value={cardInfo.cvv}
                            onChange={handleCardChange}
                            placeholder="123"
                            required
                            className="border-amber-200"
                            maxLength={4}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="pt-4 flex flex-col sm:flex-row gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      className="border-amber-300 text-amber-900 hover:bg-amber-50 sm:w-1/3"
                      onClick={() => setActiveStep(1)}
                    >
                      Back
                    </Button>
                    <Button
                      type="submit"
                      className="bg-amber-100 text-amber-900 border border-amber-300 hover:bg-amber-200 sm:w-2/3"
                      disabled={isProcessing}
                    >
                      {isProcessing ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing
                        </>
                      ) : (
                        `Complete Order • $${total.toFixed(2)}`
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border border-amber-100 p-6 sticky top-24">
              <h2 className="font-serif text-xl text-amber-900 mb-4">Order Summary</h2>

              <div className="space-y-4 mb-6">
                {state.items.map((item) => (
                  <div key={`${item.id}-${item.color}-${item.size}`} className="flex gap-4">
                    <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <h4 className="font-medium text-amber-900 truncate">{item.name}</h4>
                      <div className="text-sm text-amber-700">
                        {item.isDepositOnly && <span className="block text-amber-600">50% Deposit</span>}
                        {item.color && <span className="block">Color: {item.color}</span>}
                        {item.size && <span className="block">Size: {item.size}</span>}
                        <span className="block">Qty: {item.quantity}</span>
                      </div>
                    </div>
                    <div className="ml-auto text-right">
                      <span className="font-medium text-amber-900">
                        $
                        {(
                          Number.parseFloat(item.price.replace(/[^0-9.]/g, "")) *
                          (item.isDepositOnly ? 0.5 : 1) *
                          item.quantity
                        ).toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-amber-100 pt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-amber-700">Subtotal</span>
                  <span className="text-amber-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-amber-700">Shipping</span>
                  <span className="text-amber-900">${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-amber-700">Tax</span>
                  <span className="text-amber-900">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between border-t border-amber-100 pt-2 font-medium">
                  <span className="text-amber-900">Total</span>
                  <span className="text-amber-900">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
