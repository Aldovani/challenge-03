import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { FetchProductsProps, IProduct, IProductState } from './types'

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL_API_PRODUCTS,
  }),
  endpoints: (builder) => ({
    getProductByID: builder.query<IProduct, string>({
      query: (id) => `/${id}`,
    }),
    getProducts: builder.query<IProductState, FetchProductsProps>({
      query: (data) => {
        const filterPayload = {
          isNew: data.isNew || '',
          priceDiscount_gte: data.isOnSales || '0',
          _page: String(data.page || '1'),
          _per_page: String(data.perPage || '16'),
          price_lte: String(data.priceTo || ''),
          price_gte: String(data.priceFrom || ''),
          _sort: data.sort || '',
          category: data.type || '',
        }

        const queryString = new URLSearchParams(filterPayload)

        return `/?${queryString}`
      },
    }),
  }),
})

export const { useGetProductByIDQuery, useGetProductsQuery } = productsApi
