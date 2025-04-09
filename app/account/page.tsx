"use client"

import { useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, User, Package, Heart, CreditCard, LogOut, Settings, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useAuth } from "@/components/auth/auth-provider"
import AccountProfile from "@/components/account/account-profile"
import AccountOrders from "@/components/account/account-orders"
import AccountWishlist from "@/components/account/account-wishlist"
import AccountPayment from "@/components/account/account-payment"
import AccountSettings from "@/components/account/account-settings"

export default function AccountPage() {
  const { user, isAuthenticated, isLoading, logout } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/login")
    }
  }, [isLoading, isAuthenticated, router])

  if (isLoading || !isAuthenticated) {
    return (
      <main className="pt-24 pb-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex justify-center items-center h-[50vh]">
            <div className="animate-pulse text-amber-800">Loading...</div>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="pt-24 pb-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <Link href="/" className="inline-flex items-center text-amber-700 hover:text-amber-900 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
        </Link>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4">
            <div className="bg-amber-50 p-6 rounded-lg mb-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-amber-100 h-16 w-16 rounded-full flex items-center justify-center">
                  <User className="h-8 w-8 text-amber-700" />
                </div>
                <div>
                  <h2 className="font-serif text-xl text-amber-900">
                    {user?.firstName} {user?.lastName}
                  </h2>
                  <p className="text-amber-700 text-sm">{user?.email}</p>
                </div>
              </div>
              {user?.isVIP && (
                <div className="bg-amber-100 border border-amber-300 rounded-md p-3 flex items-center gap-2 mb-4">
                  <Crown className="h-5 w-5 text-amber-700" />
                  <span className="text-amber-900 font-medium">VIP Member</span>
                </div>
              )}
              <Button
                variant="outline"
                className="w-full border-amber-300 text-amber-900 hover:bg-amber-100"
                onClick={() => logout()}
              >
                <LogOut className="mr-2 h-4 w-4" /> Sign Out
              </Button>
            </div>

            <Tabs defaultValue="profile" orientation="vertical" className="w-full">
              <TabsList className="flex flex-col h-auto bg-transparent space-y-1">
                <TabsTrigger
                  value="profile"
                  className="justify-start px-4 py-3 data-[state=active]:bg-amber-100 data-[state=active]:text-amber-900"
                >
                  <User className="mr-2 h-4 w-4" /> Profile
                </TabsTrigger>
                <TabsTrigger
                  value="orders"
                  className="justify-start px-4 py-3 data-[state=active]:bg-amber-100 data-[state=active]:text-amber-900"
                >
                  <Package className="mr-2 h-4 w-4" /> Orders
                </TabsTrigger>
                <TabsTrigger
                  value="wishlist"
                  className="justify-start px-4 py-3 data-[state=active]:bg-amber-100 data-[state=active]:text-amber-900"
                >
                  <Heart className="mr-2 h-4 w-4" /> Wishlist
                </TabsTrigger>
                <TabsTrigger
                  value="payment"
                  className="justify-start px-4 py-3 data-[state=active]:bg-amber-100 data-[state=active]:text-amber-900"
                >
                  <CreditCard className="mr-2 h-4 w-4" /> Payment Methods
                </TabsTrigger>
                <TabsTrigger
                  value="settings"
                  className="justify-start px-4 py-3 data-[state=active]:bg-amber-100 data-[state=active]:text-amber-900"
                >
                  <Settings className="mr-2 h-4 w-4" /> Settings
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="md:w-3/4">
            <Tabs defaultValue="profile" className="w-full">
              <TabsContent value="profile" className="mt-0">
                <AccountProfile />
              </TabsContent>
              <TabsContent value="orders" className="mt-0">
                <AccountOrders />
              </TabsContent>
              <TabsContent value="wishlist" className="mt-0">
                <AccountWishlist />
              </TabsContent>
              <TabsContent value="payment" className="mt-0">
                <AccountPayment />
              </TabsContent>
              <TabsContent value="settings" className="mt-0">
                <AccountSettings />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </main>
  )
}
