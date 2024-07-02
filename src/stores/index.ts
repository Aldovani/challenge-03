import { configureStore } from '@reduxjs/toolkit'
import { cart, contact } from './modules'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { productsApi } from './modules/products/products-api'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  devTools: true,
  reducer: {
    cart,
    contact,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useAppDispatch: () => AppDispatch = useDispatch
