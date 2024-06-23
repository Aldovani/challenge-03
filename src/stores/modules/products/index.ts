import { createSlice } from '@reduxjs/toolkit'
import { IProductState } from './types'

const INITIAL_STATE: IProductState = {
  items: [],
  totalOfElements: null,
  loading: false,
  first: 1,
  last: null,
  next: null,
  pages: null,
  prev: null,
  error: null,
}

const productSlice = createSlice({
  name: 'cart',
  initialState: INITIAL_STATE,
  reducers: {},
})

export const cart = productSlice.reducer
