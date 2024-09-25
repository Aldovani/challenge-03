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
  colors: { name: string; hex: string }[]
  sizes?: { name: string; acronym: string }[]
}
