export type IProduct = {
  id: string
  name: string
  imgUrl: string
  price: number
}

export type ICartItem = {
  product: IProduct
  quantity: number
}

export type ICartState = {
  items: ICartItem[]
}
