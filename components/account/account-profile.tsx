"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useAuth } from "@/components/auth/auth-provider"
import { Loader2 } from "lucide-react"

export default function AccountProfile() {
  const { user } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [formData, setFormData] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    phone: "",
    address: "",
    city: "",
    country: "",
    postalCode: "",
    bio: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSaving(false)
    setIsEditing(false)
    // In a real app, we would update the user profile in the database
  }

  if (isEditing) {
    return (
      <div className="bg-white rounded-lg border border-amber-100 p-6">
        <h2 className="font-serif text-2xl text-amber-900 mb-6">Edit Profile</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="border-amber-200"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
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
              value={formData.email}
              onChange={handleChange}
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
              value={formData.phone}
              onChange={handleChange}
              className="border-amber-200"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="border-amber-200"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input id="city" name="city" value={formData.city} onChange={handleChange} className="border-amber-200" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="country">Country</Label>
              <Input
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="border-amber-200"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="postalCode">Postal Code</Label>
              <Input
                id="postalCode"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                className="border-amber-200"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              rows={4}
              className="border-amber-200"
              placeholder="Tell us a bit about yourself..."
            />
          </div>

          <div className="flex justify-end space-x-4">
            <Button
              type="button"
              variant="outline"
              className="border-amber-300 text-amber-900 hover:bg-amber-50"
              onClick={() => setIsEditing(false)}
              disabled={isSaving}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-amber-100 text-amber-900 border border-amber-300 hover:bg-amber-200"
              disabled={isSaving}
            >
              {isSaving ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving
                </>
              ) : (
                "Save Changes"
              )}
            </Button>
          </div>
        </form>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg border border-amber-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-serif text-2xl text-amber-900">Profile Information</h2>
        <Button
          variant="outline"
          className="border-amber-300 text-amber-900 hover:bg-amber-100"
          onClick={() => setIsEditing(true)}
        >
          Edit Profile
        </Button>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-medium text-amber-700 mb-1">First Name</h3>
            <p className="text-amber-900">{user?.firstName || "Not provided"}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-amber-700 mb-1">Last Name</h3>
            <p className="text-amber-900">{user?.lastName || "Not provided"}</p>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-amber-700 mb-1">Email</h3>
          <p className="text-amber-900">{user?.email || "Not provided"}</p>
        </div>

        <div>
          <h3 className="text-sm font-medium text-amber-700 mb-1">Phone</h3>
          <p className="text-amber-900">Not provided</p>
        </div>

        <div>
          <h3 className="text-sm font-medium text-amber-700 mb-1">Address</h3>
          <p className="text-amber-900">Not provided</p>
        </div>

        {user?.isVIP && (
          <div className="bg-amber-50 border border-amber-200 rounded-md p-4">
            <h3 className="font-medium text-amber-900 mb-2">VIP Status</h3>
            <p className="text-amber-800 mb-2">
              You have exclusive VIP access to our private collections and services.
            </p>
            <p className="text-amber-800">
              Your personal stylist: <span className="font-medium">Divine Essence</span>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
