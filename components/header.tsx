"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Menu, X, ShoppingBag, User, Search, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { Input } from "@/components/ui/input"
import { useCart } from "@/components/cart/cart-provider"
import { useAuth } from "@/components/auth/auth-provider"
import LoginModal from "@/components/auth/login-modal"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const pathname = usePathname()
  const router = useRouter()
  const { state, openCart } = useCart()
  const { user, isAuthenticated, logout } = useAuth()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
      setShowSearch(false)
      setSearchQuery("")
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 backdrop-blur-md py-3 shadow-sm" : "bg-transparent py-6",
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-10" aria-label="Angelic Royalty Home">
          <h1 className="font-serif text-2xl text-amber-900">Angelic Royalty</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/shop"
            className={cn(
              "text-amber-900 hover:text-amber-700 transition-colors",
              pathname.includes("/shop") && "font-medium",
            )}
          >
            Shop
          </Link>
          <Link
            href="/collections/womens-couture"
            className={cn(
              "text-amber-900 hover:text-amber-700 transition-colors",
              pathname.includes("/collections/womens-couture") && "font-medium",
            )}
          >
            Women's Couture
          </Link>
          <Link
            href="/collections/ready-to-wear"
            className={cn(
              "text-amber-900 hover:text-amber-700 transition-colors",
              pathname.includes("/collections/ready-to-wear") && "font-medium",
            )}
          >
            Ready-to-Wear
          </Link>
          <Link
            href="/collections/makeup"
            className={cn(
              "text-amber-900 hover:text-amber-700 transition-colors",
              pathname.includes("/collections/makeup") && "font-medium",
            )}
          >
            Makeup
          </Link>
          <Link
            href="/about"
            className={cn(
              "text-amber-900 hover:text-amber-700 transition-colors",
              pathname === "/about" && "font-medium",
            )}
          >
            About
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-amber-900 hover:text-amber-700 hover:bg-amber-50"
            onClick={() => setShowSearch(!showSearch)}
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </Button>

          <Link href="/account/wishlist">
            <Button
              variant="ghost"
              size="icon"
              className="text-amber-900 hover:text-amber-700 hover:bg-amber-50"
              aria-label="Wishlist"
            >
              <Heart className="h-5 w-5" />
            </Button>
          </Link>

          {isAuthenticated ? (
            <Link href="/account">
              <Button
                variant="ghost"
                size="icon"
                className="text-amber-900 hover:text-amber-700 hover:bg-amber-50"
                aria-label="Account"
              >
                <User className="h-5 w-5" />
              </Button>
            </Link>
          ) : (
            <LoginModal
              trigger={
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-amber-900 hover:text-amber-700 hover:bg-amber-50"
                  aria-label="Account"
                >
                  <User className="h-5 w-5" />
                </Button>
              }
            />
          )}

          <Button
            variant="ghost"
            size="icon"
            className="text-amber-900 hover:text-amber-700 hover:bg-amber-50 relative"
            onClick={openCart}
            aria-label="Shopping Bag"
          >
            <ShoppingBag className="h-5 w-5" />
            {state.items.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {state.items.length}
              </span>
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="flex items-center md:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="text-amber-900 hover:text-amber-700 hover:bg-amber-50 mr-2"
            onClick={() => setShowSearch(!showSearch)}
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="text-amber-900 hover:text-amber-700 hover:bg-amber-50 mr-2 relative"
            onClick={openCart}
            aria-label="Shopping Bag"
          >
            <ShoppingBag className="h-5 w-5" />
            {state.items.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {state.items.length}
              </span>
            )}
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-amber-900 hover:text-amber-700 hover:bg-amber-50"
                aria-label="Menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-white w-[300px] sm:w-[350px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between py-4 border-b border-amber-100">
                  <h2 className="font-serif text-xl text-amber-900">Menu</h2>
                  <SheetTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-amber-900 hover:text-amber-700 hover:bg-amber-50"
                      aria-label="Close"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </SheetTrigger>
                </div>

                <nav className="flex flex-col space-y-6 py-8">
                  <Link
                    href="/shop"
                    className={cn(
                      "text-amber-900 hover:text-amber-700 transition-colors text-lg",
                      pathname.includes("/shop") && "font-medium",
                    )}
                  >
                    Shop
                  </Link>
                  <Link
                    href="/collections/womens-couture"
                    className={cn(
                      "text-amber-900 hover:text-amber-700 transition-colors text-lg",
                      pathname.includes("/collections/womens-couture") && "font-medium",
                    )}
                  >
                    Women's Couture
                  </Link>
                  <Link
                    href="/collections/ready-to-wear"
                    className={cn(
                      "text-amber-900 hover:text-amber-700 transition-colors text-lg",
                      pathname.includes("/collections/ready-to-wear") && "font-medium",
                    )}
                  >
                    Ready-to-Wear
                  </Link>
                  <Link
                    href="/collections/makeup"
                    className={cn(
                      "text-amber-900 hover:text-amber-700 transition-colors text-lg",
                      pathname.includes("/collections/makeup") && "font-medium",
                    )}
                  >
                    Makeup
                  </Link>
                  <Link
                    href="/about"
                    className={cn(
                      "text-amber-900 hover:text-amber-700 transition-colors text-lg",
                      pathname === "/about" && "font-medium",
                    )}
                  >
                    About
                  </Link>

                  {isAuthenticated ? (
                    <>
                      <Link href="/account" className="text-amber-900 hover:text-amber-700 transition-colors text-lg">
                        My Account
                      </Link>
                      <button
                        onClick={() => logout()}
                        className="text-amber-900 hover:text-amber-700 transition-colors text-lg text-left"
                      >
                        Sign Out
                      </button>
                    </>
                  ) : (
                    <Link href="/register" className="text-amber-900 hover:text-amber-700 transition-colors text-lg">
                      Sign In / Register
                    </Link>
                  )}
                </nav>

                <div className="mt-auto pt-6 border-t border-amber-100">
                  <Button
                    asChild
                    className="w-full bg-amber-100 text-amber-900 border border-amber-300 hover:bg-amber-200"
                  >
                    <Link href="/apply">Apply for Couture</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Search Bar */}
      {showSearch && (
        <div
          className={cn(
            "absolute left-0 right-0 bg-white shadow-md transition-all duration-300 overflow-hidden",
            isScrolled ? "top-[61px]" : "top-[88px]",
          )}
        >
          <div className="container mx-auto px-4 py-4">
            <form onSubmit={handleSearch} className="flex items-center">
              <Input
                type="search"
                placeholder="Search for products..."
                className="flex-1 border-amber-200 focus-visible:ring-amber-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              <Button
                type="submit"
                className="ml-2 bg-amber-100 text-amber-900 border border-amber-300 hover:bg-amber-200"
              >
                Search
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="ml-2 text-amber-900 hover:text-amber-700 hover:bg-amber-50"
                onClick={() => setShowSearch(false)}
                aria-label="Close Search"
              >
                <X className="h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      )}
    </header>
  )
}
