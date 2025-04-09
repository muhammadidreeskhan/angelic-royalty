import type { Metadata } from "next"
import ShopClientPage from "./ShopClientPage"

export const metadata: Metadata = {
  title: "Shop | Angelic Royalty",
  description: "Browse our divine collections of luxury fashion and beauty products.",
  openGraph: {
    title: "Shop | Angelic Royalty",
    description: "Browse our divine collections of luxury fashion and beauty products.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Angelic Royalty Shop",
      },
    ],
  },
}

export default function ShopPage() {
  return <ShopClientPage />
}
