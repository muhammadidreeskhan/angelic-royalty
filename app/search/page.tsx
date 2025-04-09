import type { Metadata } from "next"
import SearchClientPage from "./SearchClientPage"

export const metadata: Metadata = {
  title: "Search | Angelic Royalty",
  description: "Search our divine collections of luxury fashion and beauty products.",
  openGraph: {
    title: "Search | Angelic Royalty",
    description: "Search our divine collections of luxury fashion and beauty products.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Angelic Royalty Search",
      },
    ],
  },
}

export default function SearchPage({ searchParams }: { searchParams: { q?: string } }) {
  return <SearchClientPage initialQuery={searchParams.q || ""} />
}
