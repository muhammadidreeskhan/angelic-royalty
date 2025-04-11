import type React from "react"
import type { Metadata } from "next"
import { Inter, Cormorant_Garamond } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { CartProvider } from "@/components/cart/cart-provider"
import { AuthProvider } from "@/components/auth/auth-provider"
import CartDrawer from "@/components/cart/cart-drawer"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Angelic Royalty | Luxury Fashion House",
  description: "A private luxury fashion house merging divine essence with material elegance.",
  keywords: ["luxury fashion", "couture", "ready-to-wear", "luxury makeup", "divine fashion", "angelic royalty"],
  authors: [{ name: "Angelic Royalty" }],
  creator: "Angelic Royalty",
  metadataBase: new URL("https://angelicroyalty.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://angelicroyalty.com",
    title: "Angelic Royalty | Luxury Fashion House",
    description: "A private luxury fashion house merging divine essence with material elegance.",
    siteName: "Angelic Royalty",
    images: [
      {
        url: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Angelic Royalty",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Angelic Royalty | Luxury Fashion House",
    description: "A private luxury fashion house merging divine essence with material elegance.",
    images: ["https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop"],
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://angelicroyalty.com" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={`${inter.variable} ${cormorant.variable} font-sans antialiased`}>
        <AuthProvider>
          <CartProvider>
            <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
              <Header />
              {children}
              <Footer />
              <CartDrawer />
              <Toaster />
            </ThemeProvider>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}


import './globals.css'