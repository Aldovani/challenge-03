import { productsApi } from '../../../libs/axios'
import { delay } from '../../../utils/delay'

type FindProductsProps = {
  page?: number
  perPage?: number
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

export async function findProducts({ page, perPage }: FindProductsProps) {
  await delay(2000)

  const response = await productsApi.get<FindProductsResponse>('', {
    params: { _per_page: perPage, _page: page },
  })

  return { response }
}

export async function GetProduct({ id }: GetProductsProps) {
  const data = await productsApi.get(`${id}`)

  return data
}

export const Products = {
  findProducts,
  GetProduct,
}
