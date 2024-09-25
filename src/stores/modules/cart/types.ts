export type IProduct = {
  id: string
  name: string
  imgUrl: string
  price: number
  discount: number
  color: string
  size: string | null
}

export type ICartItem = {
  product: IProduct
  quantity: number
}

export type ICartState = {
  items: ICartItem[]
}
