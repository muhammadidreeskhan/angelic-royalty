"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <main className="pt-24 pb-16 bg-white">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h1 className="font-serif text-3xl md:text-4xl text-amber-900 mb-6">Something Went Wrong</h1>
        <p className="text-lg text-amber-800 mb-8">
          We apologize for the inconvenience. Our divine craftsmen are working to resolve the issue.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button onClick={reset} className="bg-amber-100 text-amber-900 border border-amber-300 hover:bg-amber-200">
            Try Again
          </Button>
          <Button asChild variant="outline" className="border-amber-300 text-amber-900 hover:bg-amber-50">
            <Link href="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
