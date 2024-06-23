import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICartState, IProduct } from './types'

const INITIAL_STATE: ICartState = {
  items: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: INITIAL_STATE,
  reducers: {
    addProduct(state, action: PayloadAction<IProduct>) {
      const product = action.payload
      const productInCartIndex = state.items.findIndex(
        (item) => item.product.id === product.id,
      )

      if (productInCartIndex > -1) {
        state.items[productInCartIndex].quantity++
      } else {
        state.items.push({ product, quantity: 1 })
      }
    },

    removeProduct(state, action: PayloadAction<{ productId: string }>) {
      const { productId } = action.payload
      const productInCartIndex = state.items.findIndex(
        (item) => item.product.id === productId,
      )

      if (productInCartIndex === -1) {
        return { items: [...state.items] }
      }

      const productQuantity = state.items[productInCartIndex].quantity

      if (productQuantity > 1) {
        state.items[productInCartIndex].quantity--
      } else {
        const newState = state.items.filter(
          (item) => item.product.id !== productId,
        )

        return { items: newState }
      }

      return { items: [...state.items] }
    },

    deleteProduct(state, action: PayloadAction<{ productId: string }>) {
      const { productId } = action.payload

      const newState = state.items.filter(
        (item) => item.product.id !== productId,
      )

      state.items = newState
    },

    clearCart(state) {
      state.items = []
    },
  },
})

export const { addProduct, removeProduct, clearCart, deleteProduct } =
  cartSlice.actions
export const cart = cartSlice.reducer
