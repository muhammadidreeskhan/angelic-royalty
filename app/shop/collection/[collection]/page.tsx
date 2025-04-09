import type { Metadata } from "next"
import { notFound } from "next/navigation"
import ShopCollectionClientPage from "./ShopCollectionClientPage"
import { allProducts } from "@/data/products"

// Get all unique collections
const collections = Array.from(new Set(allProducts.map((product) => product.collection)))

export function generateStaticParams() {
  return collections.map((collection) => ({
    collection,
  }))
}

export function generateMetadata({ params }: { params: { collection: string } }): Metadata {
  // Find the collection with exact matching
  const collection = collections.find((c) => c === params.collection)

  if (!collection) {
    return {
      title: "Collection Not Found | Angelic Royalty",
      description: "The requested collection could not be found.",
    }
  }

  const formattedCollection = collection
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  return {
    title: `${formattedCollection} | Angelic Royalty`,
    description: `Browse our divine ${formattedCollection.toLowerCase()} collection.`,
    openGraph: {
      title: `${formattedCollection} | Angelic Royalty`,
      description: `Browse our divine ${formattedCollection.toLowerCase()} collection.`,
      images: [
        {
          url: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop",
          width: 1200,
          height: 630,
          alt: `Angelic Royalty ${formattedCollection}`,
        },
      ],
    },
  }
}

export default function ShopCollectionPage({ params }: { params: { collection: string } }) {
  // Find the collection with exact matching
  const collection = collections.find((c) => c === params.collection)

  if (!collection) {
    notFound()
  }

  return <ShopCollectionClientPage collection={collection} />
}
