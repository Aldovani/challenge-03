export enum ActionTypes {
  fetchDataRequest = 'FETCH_DATA_REQUEST',
  fetchDataSuccess = 'FETCH_DATA_SUCCESS',
  fetchDataFailure = 'FETCH_DATA_FAILURE',
}

export interface IProduct {
  id: string
  name: string
  images: string[]
  price: number
  style: string
  description: string
  rate: number
  priceDiscount: number
  isNew: boolean
  category: string
  tags: string[]
}

export interface IProductState {
  items: IProduct[]
  first: number
  prev: number | null
  next: number | null
  last: number | null
  pages: number | null
  loading: boolean
  totalOfElements: number | null
  error: boolean | null
}

export type FetchProductsProps = {
  perPage?: number
  page?: number
  sort?: string
  priceFrom?: number | string
  priceTo?: number | string
  type?: string
  isNew?: string
  isOnSales?: string
}
