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
  colors: { name: string; hex: string }[]
  sizes?: { name: string; acronym: string }[]
}

export interface IProductState {
  data: IProduct[]
  first: number
  prev: number
  next: number
  last: number
  pages: number
  loading: boolean
  items: number
  error: boolean
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
