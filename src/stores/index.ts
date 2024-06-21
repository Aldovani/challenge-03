import { applyMiddleware, createStore, Reducer } from 'redux'
import rootReducer from './modules/root-reducer'
import { ICartState } from './modules/cart/types'
import { thunk } from 'redux-thunk'
import { IProductState } from './modules/products/types'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { composeWithDevTools } from 'redux-devtools-extension'

export interface IState {
  cart: ICartState
  products: IProductState
}

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(
  persistConfig,
  rootReducer as unknown as Reducer,
)

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk)),
)

export type AppDispatch = typeof store.dispatch

const persistor = persistStore(store)

export { store, persistor }
