import { applyMiddleware, createStore } from 'redux'
import rootReducer from './modules/root-reducer'
import { ICartState } from './modules/cart/types'
import { thunk } from 'redux-thunk'
import { IProductState } from './modules/products/types'

export interface IState {
  cart: ICartState
  products: IProductState
}

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppDispatch = typeof store.dispatch
