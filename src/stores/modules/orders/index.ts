import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { IOrderItem } from './types'

export const ordersApi = createApi({
  reducerPath: 'ordersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL_API_ORDERS,
  }),
  endpoints: (builder) => ({
    getOrderByID: builder.query<IOrderItem, string>({
      query: (id) => `/${id}`,
    }),
    saveOrder: builder.mutation<IOrderItem, IOrderItem>({
      query: (body) => ({
        body,
        url: '/',
        method: 'post',
      }),
    }),
    getOrdersByUserId: builder.query<IOrderItem[], string>({
      query: (userId) => `/?user_id=${userId}`,
    }),
  }),
})

export const {
  useGetOrderByIDQuery,
  useGetOrdersByUserIdQuery,
  useSaveOrderMutation,
} = ordersApi
