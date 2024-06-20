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

export async function findProducts({
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

  const response = await productsApi.get<FindProductsResponse>('', {
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

  return { response }
}

export async function GetProduct({ id }: GetProductsProps) {
  await delay(2000)

  const { data } = await productsApi.get<Products>(`${id}`)

  return data
}

export const Products = {
  findProducts,
  GetProduct,
}
