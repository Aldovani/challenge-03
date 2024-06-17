import { Reducer } from 'redux'
import { ICartState, ActionTypes } from './types'
import { ICartActions } from './actions'

const INITIAL_STATE: ICartState = {
  items: [],
}

export const cart: Reducer<ICartState, ICartActions> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case ActionTypes.addProductToCart: {
      const { product } = action.payload
      const productInCartIndex = state.items.findIndex(
        (item) => item.product.id === product.id,
      )

      if (productInCartIndex > -1) {
        state.items[productInCartIndex].quantity++
      } else {
        return {
          items: [...state.items, { ...action.payload, quantity: 1 }],
        }
      }

      return { items: [...state.items] }
    }

    case ActionTypes.removeProductToCart: {
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
    }

    case ActionTypes.deleteProductToCart: {
      const { productId } = action.payload

      const newState = state.items.filter(
        (item) => item.product.id !== productId,
      )

      return { items: newState }
    }

    case ActionTypes.clearProductToCart: {
      return { items: [] }
    }

    default: {
      return { items: [...state.items] }
    }
  }
}
