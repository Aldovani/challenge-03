import { productsApi } from '../../../libs/axios'
import { delay } from '../../../utils/delay'

type FindProductsProps = {
  page?: number
  perPage?: number
  sort?: string
  priceFrom?: number | string
  priceTo?: number | string
  type?: string
  isNew?: string
  isOnSales?: string
}

export type Products = {
  name: string
  id: string
  style: string
  price: number
  description: string
  rate: number
  images: string[]
  priceDiscount: number
  isNew: boolean
  category: string
  tags: string[]
}

type FindProductsResponse = {
  first: number
  prev: number | null
  next: number | null
  last: number
  pages: number
  items: number
  data: Products[]
}

type GetProductsProps = {
  id: string
}

export async function FindProducts({
  page = 1,
  perPage = 16,
  sort,
  priceFrom,
  priceTo,
  type,
  isNew,
  isOnSales,
}: FindProductsProps) {
  await delay(2000)

  const { data } = await productsApi.get<FindProductsResponse>('', {
    params: {
      _per_page: perPage,
      _page: page,
      _sort: sort,
      price_get: priceFrom,
      price_lte: priceTo,
      category: type,
      isNew,
      isOnSales,
    },
  })

  return {
    products: data.data,
    items: data.items,
    next: data.next,
    pages: data.pages,
    prev: data.prev,
    last: data.last,
    first: data.first,
  }
}

export async function GetProduct({ id }: GetProductsProps) {
  await delay(2000)

  const { data } = await productsApi.get<Products>(`${id}`)

  return { product: data }
}

export const Products = {
  FindProducts,
  GetProduct,
}
