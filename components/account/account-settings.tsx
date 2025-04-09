"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Loader2 } from "lucide-react"

export default function AccountSettings() {
  const [isChangingPassword, setIsChangingPassword] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })
  const [settings, setSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    newCollectionAlerts: true,
    orderUpdates: true,
    marketingEmails: false,
  })
  const [error, setError] = useState("")

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setPasswordData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSettingChange = (name: string, checked: boolean) => {
    setSettings((prev) => ({ ...prev, [name]: checked }))
  }

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setError("New passwords do not match")
      return
    }

    setIsSaving(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSaving(false)
    setIsChangingPassword(false)
    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    })
    // In a real app, we would update the password in the database
  }

  return (
    <div className="bg-white rounded-lg border border-amber-100 p-6">
      <h2 className="font-serif text-2xl text-amber-900 mb-6">Account Settings</h2>

      <div className="space-y-8">
        <div>
          <h3 className="font-medium text-amber-900 mb-4">Password</h3>

          {isChangingPassword ? (
            <form onSubmit={handlePasswordSubmit} className="space-y-4 border border-amber-200 rounded-lg p-4">
              {error && <div className="bg-red-50 text-red-800 p-3 rounded-md text-sm">{error}</div>}

              <div className="space-y-2">
                <Label htmlFor="currentPassword">Current Password</Label>
                <Input
                  id="currentPassword"
                  name="currentPassword"
                  type="password"
                  value={passwordData.currentPassword}
                  onChange={handlePasswordChange}
                  required
                  className="border-amber-200"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="newPassword">New Password</Label>
                <Input
                  id="newPassword"
                  name="newPassword"
                  type="password"
                  value={passwordData.newPassword}
                  onChange={handlePasswordChange}
                  required
                  className="border-amber-200"
                  minLength={6}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={passwordData.confirmPassword}
                  onChange={handlePasswordChange}
                  required
                  className="border-amber-200"
                />
              </div>

              <div className="flex justify-end space-x-4 pt-2">
                <Button
                  type="button"
                  variant="outline"
                  className="border-amber-300 text-amber-900 hover:bg-amber-50"
                  onClick={() => setIsChangingPassword(false)}
                  disabled={isSaving}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-amber-100 text-amber-900 border border-amber-300 hover:bg-amber-200"
                  disabled={isSaving}
                >
                  {isSaving ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving
                    </>
                  ) : (
                    "Change Password"
                  )}
                </Button>
              </div>
            </form>
          ) : (
            <Button
              variant="outline"
              className="border-amber-300 text-amber-900 hover:bg-amber-100"
              onClick={() => setIsChangingPassword(true)}
            >
              Change Password
            </Button>
          )}
        </div>

        <div>
          <h3 className="font-medium text-amber-900 mb-4">Notifications</h3>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="emailNotifications" className="text-amber-900">
                  Email Notifications
                </Label>
                <p className="text-sm text-amber-700">Receive order updates and announcements via email</p>
              </div>
              <Switch
                id="emailNotifications"
                checked={settings.emailNotifications}
                onCheckedChange={(checked) => handleSettingChange("emailNotifications", checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="smsNotifications" className="text-amber-900">
                  SMS Notifications
                </Label>
                <p className="text-sm text-amber-700">Receive order updates and announcements via text message</p>
              </div>
              <Switch
                id="smsNotifications"
                checked={settings.smsNotifications}
                onCheckedChange={(checked) => handleSettingChange("smsNotifications", checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="newCollectionAlerts" className="text-amber-900">
                  New Collection Alerts
                </Label>
                <p className="text-sm text-amber-700">Be the first to know when new collections are released</p>
              </div>
              <Switch
                id="newCollectionAlerts"
                checked={settings.newCollectionAlerts}
                onCheckedChange={(checked) => handleSettingChange("newCollectionAlerts", checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="orderUpdates" className="text-amber-900">
                  Order Updates
                </Label>
                <p className="text-sm text-amber-700">Receive notifications about your order status</p>
              </div>
              <Switch
                id="orderUpdates"
                checked={settings.orderUpdates}
                onCheckedChange={(checked) => handleSettingChange("orderUpdates", checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="marketingEmails" className="text-amber-900">
                  Marketing Emails
                </Label>
                <p className="text-sm text-amber-700">Receive promotional emails and special offers</p>
              </div>
              <Switch
                id="marketingEmails"
                checked={settings.marketingEmails}
                onCheckedChange={(checked) => handleSettingChange("marketingEmails", checked)}
              />
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-medium text-amber-900 mb-4">Account Actions</h3>

          <div className="space-y-4">
            <Button variant="outline" className="border-red-300 text-red-700 hover:bg-red-50">
              Delete Account
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
