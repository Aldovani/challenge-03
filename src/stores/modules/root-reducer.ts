import { combineReducers } from 'redux'
import { cart } from './cart/reducer'
import { products } from './products/reducer'

export const rootReducer = combineReducers({
  cart,
  products,
})

export type RootReducer = ReturnType<typeof rootReducer>
