import type { Metadata } from "next"
import { notFound } from "next/navigation"
import ShopCategoryClientPage from "./ShopCategoryClientPage"
import { allProducts } from "@/data/products"

// Get all unique categories
const categories = Array.from(new Set(allProducts.map((product) => product.category)))

export function generateStaticParams() {
  return categories.map((category) => ({
    category: category.toLowerCase(),
  }))
}

export function generateMetadata({ params }: { params: { category: string } }): Metadata {
  // Find the category with case-insensitive matching
  const category = categories.find((c) => c.toLowerCase() === params.category.toLowerCase())

  if (!category) {
    return {
      title: "Category Not Found | Angelic Royalty",
      description: "The requested category could not be found.",
    }
  }

  return {
    title: `${category} | Angelic Royalty`,
    description: `Browse our divine collection of ${category.toLowerCase()} products.`,
    openGraph: {
      title: `${category} | Angelic Royalty`,
      description: `Browse our divine collection of ${category.toLowerCase()} products.`,
      images: [
        {
          url: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop",
          width: 1200,
          height: 630,
          alt: `Angelic Royalty ${category}`,
        },
      ],
    },
  }
}

export default function ShopCategoryPage({ params }: { params: { category: string } }) {
  // Find the category with case-insensitive matching
  const category = categories.find((c) => c.toLowerCase() === params.category.toLowerCase())

  if (!category) {
    notFound()
  }

  return <ShopCategoryClientPage category={category} />
}
