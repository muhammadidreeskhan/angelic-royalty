"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAuth } from "./auth-provider"
import { Loader2 } from "lucide-react"

export default function LoginModal({ trigger }: { trigger: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { login } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsSubmitting(true)

    try {
      await login(email, password)
      setIsOpen(false)
      router.refresh()
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl text-amber-900 text-center">Sign In</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          {error && <div className="bg-red-50 text-red-800 p-3 rounded-md text-sm">{error}</div>}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border-amber-200"
            />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label htmlFor="password">Password</Label>
              <Link href="/forgot-password" className="text-sm text-amber-700 hover:text-amber-900">
                Forgot password?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border-amber-200"
            />
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-amber-100 text-amber-900 border border-amber-300 hover:bg-amber-200"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Signing In
              </>
            ) : (
              "Sign In"
            )}
          </Button>
          <div className="text-center text-sm text-amber-800">
            Don't have an account?{" "}
            <Link href="/register" className="text-amber-700 hover:text-amber-900 font-medium">
              Create Account
            </Link>
          </div>
          <div className="text-center text-xs text-amber-700 mt-6">
            <p>For demo purposes, you can use:</p>
            <p>Email: vip@angelicroyalty.com</p>
            <p>Password: angelic</p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
