"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function VIPPage() {
  const [password, setPassword] = useState("")
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, this would validate against a server
    if (password === "angelic") {
      setIsAuthenticated(true)
    }
  }

  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, this would submit the form data to a server
    setIsSubmitted(true)
  }

  if (!isAuthenticated) {
    return (
      <main className="pt-24 pb-16 bg-white">
        <div className="container mx-auto px-4 max-w-md">
          <Link href="/" className="inline-flex items-center text-amber-700 hover:text-amber-900 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>

          <div className="text-center mb-8">
            <h1 className="font-serif text-3xl md:text-4xl text-amber-900 mb-4">VIP Access</h1>
            <p className="text-amber-800">
              This area is reserved for our VIP clients. Please enter the password to continue.
            </p>
          </div>

          <form onSubmit={handlePasswordSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-amber-100 text-amber-900 border border-amber-300 hover:bg-amber-200"
            >
              Enter
            </Button>
          </form>
        </div>
      </main>
    )
  }

  if (isSubmitted) {
    return (
      <main className="pt-24 pb-16 bg-white">
        <div className="container mx-auto px-4 max-w-xl">
          <div className="text-center space-y-6 py-12">
            <h2 className="font-serif text-3xl text-amber-900 mb-4">Thank You</h2>
            <p className="text-amber-800 max-w-xl mx-auto">
              Your VIP access request has been received. Our team will review your request and contact you shortly with
              exclusive access to our private collections.
            </p>
            <Button asChild className="bg-amber-100 text-amber-900 border border-amber-300 hover:bg-amber-200 mt-8">
              <Link href="/">Return to Home</Link>
            </Button>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="pt-24 pb-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <Link href="/" className="inline-flex items-center text-amber-700 hover:text-amber-900 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
        </Link>

        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl text-amber-900 mb-4">VIP Access</h1>
          <p className="text-amber-800 max-w-2xl mx-auto">
            Welcome to our exclusive VIP area. Here you can request access to our private collections and receive
            personalized services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <div className="relative h-[60vh] w-full mb-6">
              <Image src="/placeholder.svg?height=1200&width=800" alt="VIP Collection" fill className="object-cover" />
            </div>

            <h2 className="font-serif text-2xl text-amber-900 mb-4">Exclusive Benefits</h2>
            <ul className="space-y-3 text-amber-800">
              <li>• Early access to new collections</li>
              <li>• Private viewings and fittings</li>
              <li>• Exclusive limited edition pieces</li>
              <li>• Personal styling consultations</li>
              <li>• Invitations to private events</li>
              <li>• Complimentary alterations</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-amber-900 mb-6">Request VIP Access</h2>
            <form onSubmit={handleRequestSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="interests">Your Interests</Label>
                <Textarea
                  id="interests"
                  rows={4}
                  placeholder="Please share which collections or services you are most interested in."
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="referral">How did you hear about us?</Label>
                <Input id="referral" required />
              </div>

              <Button
                type="submit"
                className="w-full bg-amber-100 text-amber-900 border border-amber-300 hover:bg-amber-200"
              >
                Submit Request
              </Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
