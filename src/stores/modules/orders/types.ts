import { ICartItem } from '../cart/types'

export type IOrderItem = {
  items: ICartItem[]
  orderData: string
  orderID: string
  paymentMethod: string
  userId: string
  id: string
}

export type IOrdersState = {
  orders: IOrderItem[]
}
