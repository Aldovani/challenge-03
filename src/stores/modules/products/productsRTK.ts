import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { FetchProductsProps, IProduct, IProductState } from './types'

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3333/products' }),
  endpoints: (builder) => ({
    getProductByID: builder.query<IProduct, string>({
      query: (id) => `/${id}`,
    }),
    getProducts: builder.query<IProductState, FetchProductsProps>({
      query: (data) => {
        const filter = {
          isNew: data.isNew || '',
          isOnSales: data.isOnSales || '',
          page: String(data.page || '1'),
          perPage: String(data.perPage || '16'),
          priceFrom: String(data.priceFrom || ''),
          priceTo: String(data.priceTo || ''),
          sort: data.sort || '',
          type: data.type || '',
        }

        const queryString = new URLSearchParams(filter)

        return `/?${queryString.toString()}`
      },
    }),
  }),
})

export const { useGetProductByIDQuery, useGetProductsQuery } = productsApi
