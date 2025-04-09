import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="pt-24 pb-16 bg-white">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h1 className="font-serif text-6xl md:text-8xl text-amber-900 mb-6">404</h1>
        <h2 className="font-serif text-3xl md:text-4xl text-amber-800 mb-8">Page Not Found</h2>
        <p className="text-lg text-amber-700 mb-12">
          The divine page you are seeking does not exist in our celestial collection.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild className="bg-amber-100 text-amber-900 border border-amber-300 hover:bg-amber-200">
            <Link href="/">Return to Home</Link>
          </Button>
          <Button asChild variant="outline" className="border-amber-300 text-amber-900 hover:bg-amber-50">
            <Link href="/shop">Browse Collections</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
