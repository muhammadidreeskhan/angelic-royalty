"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, this would submit the form data to a server
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <main className="pt-24 pb-16 bg-white">
        <div className="container mx-auto px-4 max-w-xl">
          <div className="text-center space-y-6 py-12">
            <h2 className="font-serif text-3xl text-amber-900 mb-4">Thank You</h2>
            <p className="text-amber-800 max-w-xl mx-auto">
              Your message has been received. Our team will contact you shortly.
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
      <div className="container mx-auto px-4">
        <Link href="/" className="inline-flex items-center text-amber-700 hover:text-amber-900 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
        </Link>

        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-amber-900 mb-6">Contact Us</h1>
          <p className="text-lg text-amber-800">
            We would be honored to hear from you. Reach out to us with any inquiries about our collections or services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          <div>
            <div className="relative h-[40vh] lg:h-[60vh] w-full mb-8">
              <Image
                src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=1000&auto=format&fit=crop"
                alt="Angelic Royalty Boutique"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-amber-700 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium text-amber-900 mb-1">Our Location</h3>
                  <p className="text-amber-800">123 Divine Avenue, Celestial District</p>
                  <p className="text-amber-800">New York, NY 10001</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-amber-700 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium text-amber-900 mb-1">Email</h3>
                  <p className="text-amber-800">inquiries@angelicroyalty.com</p>
                  <p className="text-amber-800">couture@angelicroyalty.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-amber-700 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-medium text-amber-900 mb-1">Phone</h3>
                  <p className="text-amber-800">+1 (212) 555-0123</p>
                  <p className="text-amber-800">By appointment only</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-amber-900 mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
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
                <Label htmlFor="inquiry">Inquiry Type</Label>
                <Select defaultValue="general">
                  <SelectTrigger>
                    <SelectValue placeholder="Select inquiry type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="couture">Couture Inquiry</SelectItem>
                    <SelectItem value="rtw">Ready-to-Wear Inquiry</SelectItem>
                    <SelectItem value="makeup">Makeup Inquiry</SelectItem>
                    <SelectItem value="press">Press Inquiry</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  rows={5}
                  placeholder="Please share your inquiry or message for our team."
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-amber-100 text-amber-900 border border-amber-300 hover:bg-amber-200"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
