"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CreditCard, Plus, Trash2, Loader2 } from "lucide-react"

export default function AccountPayment() {
  const [isAddingCard, setIsAddingCard] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  })

  // Mock saved cards
  const [savedCards, setSavedCards] = useState([
    {
      id: "1",
      cardNumber: "**** **** **** 4567",
      cardName: "Divine Essence",
      expiryDate: "09/27",
      isDefault: true,
    },
  ])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Add new card to saved cards
    const newCard = {
      id: `${savedCards.length + 1}`,
      cardNumber: `**** **** **** ${formData.cardNumber.slice(-4)}`,
      cardName: formData.cardName,
      expiryDate: formData.expiryDate,
      isDefault: savedCards.length === 0,
    }

    setSavedCards([...savedCards, newCard])
    setFormData({
      cardNumber: "",
      cardName: "",
      expiryDate: "",
      cvv: "",
    })
    setIsSaving(false)
    setIsAddingCard(false)
  }

  const removeCard = (id: string) => {
    setSavedCards(savedCards.filter((card) => card.id !== id))
  }

  const setDefaultCard = (id: string) => {
    setSavedCards(
      savedCards.map((card) => ({
        ...card,
        isDefault: card.id === id,
      })),
    )
  }

  return (
    <div className="bg-white rounded-lg border border-amber-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-serif text-2xl text-amber-900">Payment Methods</h2>
        {!isAddingCard && (
          <Button
            variant="outline"
            className="border-amber-300 text-amber-900 hover:bg-amber-100"
            onClick={() => setIsAddingCard(true)}
          >
            <Plus className="mr-2 h-4 w-4" /> Add Payment Method
          </Button>
        )}
      </div>

      {isAddingCard ? (
        <div className="border border-amber-200 rounded-lg p-4 mb-6">
          <h3 className="font-medium text-amber-900 mb-4">Add New Card</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="cardNumber">Card Number</Label>
              <Input
                id="cardNumber"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
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
                value={formData.cardName}
                onChange={handleChange}
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
                  value={formData.expiryDate}
                  onChange={handleChange}
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
                  value={formData.cvv}
                  onChange={handleChange}
                  placeholder="123"
                  required
                  className="border-amber-200"
                  maxLength={4}
                />
              </div>
            </div>

            <div className="flex justify-end space-x-4 pt-2">
              <Button
                type="button"
                variant="outline"
                className="border-amber-300 text-amber-900 hover:bg-amber-50"
                onClick={() => setIsAddingCard(false)}
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
                  "Save Card"
                )}
              </Button>
            </div>
          </form>
        </div>
      ) : null}

      {savedCards.length === 0 ? (
        <div className="text-center py-8">
          <div className="bg-amber-50 p-6 rounded-full inline-flex mb-4">
            <CreditCard className="h-8 w-8 text-amber-300" />
          </div>
          <h3 className="font-medium text-amber-900 mb-2">No Payment Methods</h3>
          <p className="text-amber-700 mb-4">You haven't added any payment methods yet.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {savedCards.map((card) => (
            <div key={card.id} className="border border-amber-200 rounded-lg p-4 flex justify-between items-center">
              <div className="flex items-center">
                <div className="bg-amber-50 p-2 rounded-md mr-4">
                  <CreditCard className="h-6 w-6 text-amber-700" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium text-amber-900">{card.cardNumber}</h3>
                    {card.isDefault && (
                      <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">Default</span>
                    )}
                  </div>
                  <p className="text-sm text-amber-700">
                    {card.cardName} • Expires {card.expiryDate}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {!card.isDefault && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-amber-300 text-amber-900 hover:bg-amber-50 text-xs"
                    onClick={() => setDefaultCard(card.id)}
                  >
                    Set Default
                  </Button>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-red-500 hover:text-red-700 hover:bg-red-50"
                  onClick={() => removeCard(card.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
