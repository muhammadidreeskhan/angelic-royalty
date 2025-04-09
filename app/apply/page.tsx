"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ApplyPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    postalCode: "",
    interest: "",
    budget: "",
    timeline: "",
    measurements: "",
    additionalInfo: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, this would submit the form data to a server
    setStep(4) // Move to thank you step
  }

  return (
    <main className="pt-24 pb-16 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link href="/" className="inline-flex items-center text-amber-700 hover:text-amber-900 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
        </Link>

        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-amber-900 mb-4">Apply for Couture</h1>
          <p className="text-amber-800">
            Our exclusive 1-of-1 couture designs are available by application only. Please complete the form below to
            begin your sacred journey with Angelic Royalty.
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-between mb-12">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex flex-col items-center">
              <div
                className={`h-10 w-10 rounded-full flex items-center justify-center ${
                  step >= s
                    ? "bg-amber-100 text-amber-900 border border-amber-300"
                    : "bg-gray-100 text-gray-400 border border-gray-200"
                }`}
              >
                {s}
              </div>
              <span className={`text-sm mt-2 ${step >= s ? "text-amber-900" : "text-gray-400"}`}>
                {s === 1 ? "Personal Details" : s === 2 ? "Preferences" : "Measurements"}
              </span>
            </div>
          ))}
        </div>

        {step === 1 && (
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault()
              setStep(2)
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input id="address" name="address" value={formData.address} onChange={handleChange} required />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input id="city" name="city" value={formData.city} onChange={handleChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="country">Country</Label>
                <Select value={formData.country} onValueChange={(value) => handleSelectChange("country", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="fr">France</SelectItem>
                    <SelectItem value="it">Italy</SelectItem>
                    <SelectItem value="jp">Japan</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="postalCode">Postal Code</Label>
              <Input id="postalCode" name="postalCode" value={formData.postalCode} onChange={handleChange} required />
            </div>

            <div className="flex justify-end">
              <Button type="submit" className="bg-amber-100 text-amber-900 border border-amber-300 hover:bg-amber-200">
                Next Step
              </Button>
            </div>
          </form>
        )}

        {step === 2 && (
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault()
              setStep(3)
            }}
          >
            <div className="space-y-2">
              <Label htmlFor="interest">What type of couture piece are you interested in?</Label>
              <RadioGroup
                value={formData.interest}
                onValueChange={(value) => handleSelectChange("interest", value)}
                className="space-y-3"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="gown" id="interest-gown" />
                  <Label htmlFor="interest-gown">Gown</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="dress" id="interest-dress" />
                  <Label htmlFor="interest-dress">Dress</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="ensemble" id="interest-ensemble" />
                  <Label htmlFor="interest-ensemble">Ensemble (Multiple Pieces)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="other" id="interest-other" />
                  <Label htmlFor="interest-other">Other</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="budget">Budget Range</Label>
              <Select value={formData.budget} onValueChange={(value) => handleSelectChange("budget", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                  <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                  <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                  <SelectItem value="100k+">$100,000+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="timeline">When do you need the piece by?</Label>
              <Select value={formData.timeline} onValueChange={(value) => handleSelectChange("timeline", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select timeline" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-3">1-3 months</SelectItem>
                  <SelectItem value="3-6">3-6 months</SelectItem>
                  <SelectItem value="6-12">6-12 months</SelectItem>
                  <SelectItem value="flexible">Flexible</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="additionalInfo">Additional Information</Label>
              <Textarea
                id="additionalInfo"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                rows={5}
                placeholder="Please share any specific details, inspiration, or requirements for your couture piece."
              />
            </div>

            <div className="flex justify-between">
              <Button
                type="button"
                variant="outline"
                className="border-amber-300 text-amber-900 hover:bg-amber-50"
                onClick={() => setStep(1)}
              >
                Previous
              </Button>
              <Button type="submit" className="bg-amber-100 text-amber-900 border border-amber-300 hover:bg-amber-200">
                Next Step
              </Button>
            </div>
          </form>
        )}

        {step === 3 && (
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="measurements">Your Measurements</Label>
              <Textarea
                id="measurements"
                name="measurements"
                value={formData.measurements}
                onChange={handleChange}
                rows={8}
                placeholder="Please provide your measurements or let us know if you would prefer a virtual or in-person fitting session."
              />
            </div>

            <div className="border border-amber-200 rounded-md p-4 bg-amber-50">
              <h3 className="font-medium text-amber-900 mb-2">Next Steps</h3>
              <p className="text-sm text-amber-800">
                After submitting your application, our team will review your request and contact you within 48 hours to
                discuss your couture piece in more detail. A 50% deposit will be required to begin the creation process.
              </p>
            </div>

            <div className="flex justify-between">
              <Button
                type="button"
                variant="outline"
                className="border-amber-300 text-amber-900 hover:bg-amber-50"
                onClick={() => setStep(2)}
              >
                Previous
              </Button>
              <Button type="submit" className="bg-amber-100 text-amber-900 border border-amber-300 hover:bg-amber-200">
                Submit Application
              </Button>
            </div>
          </form>
        )}

        {step === 4 && (
          <div className="text-center space-y-6 py-12">
            <h2 className="font-serif text-3xl text-amber-900 mb-4">Thank You for Your Application</h2>
            <p className="text-amber-800 max-w-xl mx-auto">
              Your application has been received. Our team will review your request and contact you within 48 hours to
              discuss your couture piece in more detail. We look forward to creating something divine for you.
            </p>
            <Button asChild className="bg-amber-100 text-amber-900 border border-amber-300 hover:bg-amber-200 mt-8">
              <Link href="/">Return to Home</Link>
            </Button>
          </div>
        )}
      </div>
    </main>
  )
}
