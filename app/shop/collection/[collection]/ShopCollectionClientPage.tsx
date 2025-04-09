"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Filter, X, ShoppingBag, Heart, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
  SheetFooter,
} from "@/components/ui/sheet"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { useCart } from "@/components/cart/cart-provider"
import { useToast } from "@/components/ui/use-toast"
import { allProducts } from "@/data/products"

type Product = (typeof allProducts)[0]

export default function ShopCollectionClientPage({ collection }: { collection: string }) {
  const { addItem } = useCart()
  const { toast } = useToast()
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [sortOption, setSortOption] = useState("featured")
  const [priceRange, setPriceRange] = useState([0, 5000])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  // Format collection name for display
  const formattedCollection = collection
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  // Extract unique categories for this collection
  const categories = Array.from(
    new Set(allProducts.filter((product) => product.collection === collection).map((product) => product.category)),
  )

  // Initialize products
  useEffect(() => {
    const collectionProducts = allProducts.filter((product) => product.collection === collection)
    setProducts(collectionProducts)
    setFilteredProducts(collectionProducts)
  }, [collection])

  // Handle sorting
  const handleSort = (value: string) => {
    setSortOption(value)
    let sortedProducts = [...filteredProducts]

    switch (value) {
      case "price-low-high":
        sortedProducts.sort(
          (a, b) =>
            Number.parseFloat(a.price.replace(/[^0-9.]/g, "")) - Number.parseFloat(b.price.replace(/[^0-9.]/g, "")),
        )
        break
      case "price-high-low":
        sortedProducts.sort(
          (a, b) =>
            Number.parseFloat(b.price.replace(/[^0-9.]/g, "")) - Number.parseFloat(a.price.replace(/[^0-9.]/g, "")),
        )
        break
      case "newest":
        sortedProducts.sort((a, b) => (b.isNew === a.isNew ? 0 : b.isNew ? 1 : -1))
        break
      case "featured":
      default:
        sortedProducts = [...filteredProducts]
        break
    }

    setProducts(sortedProducts)
  }

  // Handle category filter
  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category])
    } else {
      setSelectedCategories(selectedCategories.filter((c) => c !== category))
    }
  }

  // Apply filters
  useEffect(() => {
    let result = allProducts.filter((product) => product.collection === collection)

    // Filter by price
    result = result.filter((product) => {
      const price = Number.parseFloat(product.price.replace(/[^0-9.]/g, ""))
      return price >= priceRange[0] && price <= priceRange[1]
    })

    // Filter by category
    if (selectedCategories.length > 0) {
      result = result.filter((product) => selectedCategories.includes(product.category))
    }

    setFilteredProducts(result)

    // Apply current sort
    handleSort(sortOption)
  }, [collection, priceRange, selectedCategories])

  // Update products when filtered products change
  useEffect(() => {
    handleSort(sortOption)
  }, [filteredProducts])

  // Reset filters
  const resetFilters = () => {
    setPriceRange([0, 5000])
    setSelectedCategories([])
    setSortOption("featured")
  }

  // Add to cart
  const handleAddToCart = (product: Product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity: 1,
    })

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  // Add to wishlist
  const handleAddToWishlist = (product: Product) => {
    toast({
      title: "Added to wishlist",
      description: `${product.name} has been added to your wishlist.`,
    })
  }

  return (
    <main className="pt-24 pb-16 bg-white">
      <div className="container mx-auto px-4">
        <Link href="/shop" className="inline-flex items-center text-amber-700 hover:text-amber-900 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Shop
        </Link>

        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-amber-900 mb-6">{formattedCollection}</h1>
          <p className="text-lg text-amber-800">Browse our divine {formattedCollection.toLowerCase()} collection.</p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex items-center gap-2">
            <p className="text-amber-800">
              Showing <span className="font-medium">{products.length}</span> products
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  className="border-amber-300 text-amber-900 hover:bg-amber-50 flex items-center gap-2"
                >
                  <Filter className="h-4 w-4" /> Filter
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-md overflow-y-auto">
                <SheetHeader className="border-b border-amber-100 pb-4">
                  <SheetTitle className="font-serif text-2xl text-amber-900">Filters</SheetTitle>
                </SheetHeader>

                <div className="py-6 space-y-8">
                  <div>
                    <h3 className="font-medium text-amber-900 mb-4">Price Range</h3>
                    <div className="px-2">
                      <Slider
                        defaultValue={[0, 5000]}
                        value={priceRange}
                        onValueChange={setPriceRange}
                        max={5000}
                        step={50}
                        className="mb-6"
                      />
                      <div className="flex justify-between text-sm text-amber-800">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}</span>
                      </div>
                    </div>
                  </div>

                  {categories.length > 1 && (
                    <div>
                      <h3 className="font-medium text-amber-900 mb-4">Category</h3>
                      <div className="space-y-3">
                        {categories.map((category) => (
                          <div key={category} className="flex items-center space-x-2">
                            <Checkbox
                              id={`category-${category}`}
                              checked={selectedCategories.includes(category)}
                              onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
                            />
                            <Label htmlFor={`category-${category}`} className="text-amber-800 cursor-pointer">
                              {category}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <SheetFooter className="border-t border-amber-100 pt-4 flex-col sm:flex-row gap-4">
                  <Button
                    variant="outline"
                    className="border-amber-300 text-amber-900 hover:bg-amber-50 w-full"
                    onClick={resetFilters}
                  >
                    Reset Filters
                  </Button>
                  <SheetClose asChild>
                    <Button className="bg-amber-100 text-amber-900 border border-amber-300 hover:bg-amber-200 w-full">
                      Apply Filters
                    </Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>

            <div className="flex items-center gap-2">
              <span className="text-amber-800">Sort by:</span>
              <Select value={sortOption} onValueChange={handleSort}>
                <SelectTrigger className="w-[180px] border-amber-300">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low-high">Price: Low to High</SelectItem>
                  <SelectItem value="price-high-low">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Active filters */}
        {(selectedCategories.length > 0 || priceRange[0] > 0 || priceRange[1] < 5000) && (
          <div className="flex flex-wrap gap-2 mb-6">
            {selectedCategories.map((category) => (
              <div
                key={`filter-${category}`}
                className="bg-amber-50 border border-amber-200 rounded-full px-3 py-1 flex items-center gap-1"
              >
                <span className="text-sm text-amber-800">{category}</span>
                <button
                  onClick={() => handleCategoryChange(category, false)}
                  className="text-amber-500 hover:text-amber-700"
                  aria-label={`Remove ${category} filter`}
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            ))}

            {(priceRange[0] > 0 || priceRange[1] < 5000) && (
              <div className="bg-amber-50 border border-amber-200 rounded-full px-3 py-1 flex items-center gap-1">
                <span className="text-sm text-amber-800">
                  ${priceRange[0]} - ${priceRange[1]}
                </span>
                <button
                  onClick={() => setPriceRange([0, 5000])}
                  className="text-amber-500 hover:text-amber-700"
                  aria-label="Remove price filter"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            )}

            <button onClick={resetFilters} className="text-amber-700 hover:text-amber-900 text-sm underline">
              Clear all
            </button>
          </div>
        )}

        {products.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="font-serif text-2xl text-amber-900 mb-4">No products found</h2>
            <p className="text-amber-800 mb-6">Try adjusting your filters to find what you're looking for.</p>
            <Button
              variant="outline"
              className="border-amber-300 text-amber-900 hover:bg-amber-100"
              onClick={resetFilters}
            >
              Reset Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <Link href={`/products/${product.id}`} className="block">
                  <div className="relative aspect-[3/4] mb-4 overflow-hidden">
                    <Image
                      src={product.images[0] || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {product.isNew && (
                      <div className="absolute top-2 left-2 bg-amber-100 text-amber-900 text-xs px-2 py-1 rounded-full">
                        New
                      </div>
                    )}
                    {product.isBestSeller && (
                      <div className="absolute top-2 right-2 bg-amber-500 text-white text-xs px-2 py-1 rounded-full">
                        Best Seller
                      </div>
                    )}
                  </div>
                  <h3 className="font-serif text-lg text-amber-900 mb-1">{product.name}</h3>
                  <p className="text-amber-800 mb-1">{product.price}</p>
                  <p className="text-amber-700 text-sm">{product.category}</p>
                </Link>

                <div className="mt-4 flex gap-2">
                  <Button
                    className="flex-1 bg-amber-100 text-amber-900 border border-amber-300 hover:bg-amber-200"
                    onClick={() => handleAddToCart(product)}
                  >
                    <ShoppingBag className="mr-2 h-4 w-4" /> Add to Cart
                  </Button>
                  <Button
                    variant="outline"
                    className="border-amber-300 text-amber-900 hover:bg-amber-50 px-3"
                    onClick={() => handleAddToWishlist(product)}
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
