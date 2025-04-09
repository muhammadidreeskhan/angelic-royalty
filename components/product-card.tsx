import Link from "next/link"
import Image from "next/image"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProductCardProps {
  id: string
  name: string
  price: string
  image: string
  category?: string
  collection: string
  priority?: boolean
}

export default function ProductCard({
  id,
  name,
  price,
  image,
  category,
  collection,
  priority = false,
}: ProductCardProps) {
  return (
    <div className="group relative">
      <div className="relative aspect-[3/4] mb-4 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          loading={priority ? "eager" : "lazy"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 text-amber-900 bg-white/80 hover:bg-white hover:text-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-label="Add to wishlist"
        >
          <Heart className="h-5 w-5" />
        </Button>
      </div>
      <Link href={`/products/${id}`} className="block">
        <h3 className="font-serif text-xl text-amber-900 mb-1">{name}</h3>
        <p className="text-amber-800 mb-1">{price}</p>
        {category && <p className="text-amber-700 text-sm">{category}</p>}
      </Link>
    </div>
  )
}
