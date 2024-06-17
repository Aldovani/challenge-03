import { createStore } from 'redux'
import rootReducer from './modules/root-reducer'
import { ICartState } from './modules/cart/types'

export interface IState {
  cart: ICartState
}

export const store = createStore(rootReducer)
