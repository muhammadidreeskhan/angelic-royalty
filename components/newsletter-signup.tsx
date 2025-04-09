"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Thank you for subscribing",
      description: "You will now receive updates on our divine collections and exclusive offers.",
    })

    setEmail("")
    setIsSubmitting(false)
  }

  return (
    <div className="bg-amber-50 py-16">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="font-serif text-3xl text-amber-900 mb-4">Join Our Divine Journey</h2>
        <p className="text-amber-800 mb-8 max-w-2xl mx-auto">
          Subscribe to receive updates on our celestial collections, exclusive offers, and sacred events.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border-amber-200 flex-grow"
            aria-label="Email address"
          />
          <Button
            type="submit"
            className="bg-amber-100 text-amber-900 border border-amber-300 hover:bg-amber-200"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
      </div>
    </div>
  )
}
