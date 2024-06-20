import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import { ICartState } from './modules/cart/types'
import { thunk, ThunkMiddleware } from 'redux-thunk'
import { IProductState } from './modules/products/types'
import { RootReducer, rootReducer } from './modules/root-reducer'

export interface IState {
  cart: ICartState
  products: IProductState
}

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk as ThunkMiddleware<RootReducer>),
)

export type AppDispatch = typeof store.dispatch
