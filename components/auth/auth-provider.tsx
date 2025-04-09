"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export type User = {
  id: string
  email: string
  firstName: string
  lastName: string
  isVIP: boolean
}

type AuthContextType = {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  register: (userData: Omit<User, "id" | "isVIP"> & { password: string }) => Promise<void>
  logout: () => void
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

// Mock users for demo purposes
const MOCK_USERS = [
  {
    id: "1",
    email: "vip@angelicroyalty.com",
    firstName: "Divine",
    lastName: "Essence",
    password: "angelic",
    isVIP: true,
  },
  {
    id: "2",
    email: "user@example.com",
    firstName: "Celestial",
    lastName: "Beauty",
    password: "password",
    isVIP: false,
  },
]

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for saved user in localStorage
    const savedUser = localStorage.getItem("angelicRoyaltyUser")
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const foundUser = MOCK_USERS.find((u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password)

    if (!foundUser) {
      setIsLoading(false)
      throw new Error("Invalid email or password")
    }

    const { password: _, ...userWithoutPassword } = foundUser
    setUser(userWithoutPassword)
    localStorage.setItem("angelicRoyaltyUser", JSON.stringify(userWithoutPassword))
    setIsLoading(false)
  }

  const register = async (userData: Omit<User, "id" | "isVIP"> & { password: string }) => {
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Check if email already exists
    if (MOCK_USERS.some((u) => u.email.toLowerCase() === userData.email.toLowerCase())) {
      setIsLoading(false)
      throw new Error("Email already in use")
    }

    // Create new user
    const newUser = {
      id: `${MOCK_USERS.length + 1}`,
      ...userData,
      isVIP: false,
    }

    // In a real app, we would save this to a database
    MOCK_USERS.push({ ...newUser, password: userData.password })

    const { password: _, ...userWithoutPassword } = newUser
    setUser(userWithoutPassword)
    localStorage.setItem("angelicRoyaltyUser", JSON.stringify(userWithoutPassword))
    setIsLoading(false)
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("angelicRoyaltyUser")
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        login,
        register,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
