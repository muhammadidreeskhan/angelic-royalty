"use client"

import { createContext, useContext, useReducer, useEffect, type ReactNode } from "react"

export type CartItem = {
  id: string
  name: string
  price: string
  image: string
  quantity: number
  color?: string
  size?: string
  isDepositOnly?: boolean
}

type CartState = {
  items: CartItem[]
  isOpen: boolean
  subtotal: string
}

type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "UPDATE_QUANTITY"; payload: { id: string; quantity: number } }
  | { type: "CLEAR_CART" }
  | { type: "OPEN_CART" }
  | { type: "CLOSE_CART" }

const initialState: CartState = {
  items: [],
  isOpen: false,
  subtotal: "$0.00",
}

const calculateSubtotal = (items: CartItem[]): string => {
  const total = items.reduce((sum, item) => {
    const price = Number.parseFloat(item.price.replace(/[^0-9.]/g, ""))
    const multiplier = item.isDepositOnly ? 0.5 : 1
    return sum + price * item.quantity * multiplier
  }, 0)

  return `$${total.toFixed(2)}`
}

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItemIndex = state.items.findIndex(
        (item) =>
          item.id === action.payload.id &&
          item.color === action.payload.color &&
          item.size === action.payload.size &&
          item.isDepositOnly === action.payload.isDepositOnly,
      )

      let newItems

      if (existingItemIndex > -1) {
        newItems = [...state.items]
        newItems[existingItemIndex].quantity += action.payload.quantity
      } else {
        newItems = [...state.items, action.payload]
      }

      return {
        ...state,
        items: newItems,
        subtotal: calculateSubtotal(newItems),
        isOpen: true,
      }
    }

    case "REMOVE_ITEM": {
      const newItems = state.items.filter(
        (item) =>
          !(
            item.id === action.payload &&
            item.color === state.items.find((i) => i.id === action.payload)?.color &&
            item.size === state.items.find((i) => i.id === action.payload)?.size &&
            item.isDepositOnly === state.items.find((i) => i.id === action.payload)?.isDepositOnly
          ),
      )

      return {
        ...state,
        items: newItems,
        subtotal: calculateSubtotal(newItems),
      }
    }

    case "UPDATE_QUANTITY": {
      const newItems = state.items.map((item) =>
        item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item,
      )

      return {
        ...state,
        items: newItems,
        subtotal: calculateSubtotal(newItems),
      }
    }

    case "CLEAR_CART":
      return {
        ...state,
        items: [],
        subtotal: "$0.00",
      }

    case "OPEN_CART":
      return {
        ...state,
        isOpen: true,
      }

    case "CLOSE_CART":
      return {
        ...state,
        isOpen: false,
      }

    default:
      return state
  }
}

type CartContextType = {
  state: CartState
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  openCart: () => void
  closeCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("angelicRoyaltyCart")
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart)
      parsedCart.items.forEach((item: CartItem) => {
        dispatch({ type: "ADD_ITEM", payload: item })
      })
    }
  }, [])

  // Save cart to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("angelicRoyaltyCart", JSON.stringify({ items: state.items }))
  }, [state.items])

  const addItem = (item: CartItem) => {
    dispatch({ type: "ADD_ITEM", payload: item })
  }

  const removeItem = (id: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: id })
  }

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } })
  }

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" })
  }

  const openCart = () => {
    dispatch({ type: "OPEN_CART" })
  }

  const closeCart = () => {
    dispatch({ type: "CLOSE_CART" })
  }

  return (
    <CartContext.Provider
      value={{
        state,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        openCart,
        closeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
