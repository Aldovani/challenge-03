import { configureStore } from '@reduxjs/toolkit'
import { cart } from './modules/cart'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { productsApi } from './modules/products/productsRTK'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  devTools: true,
  reducer: {
    cart,
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
