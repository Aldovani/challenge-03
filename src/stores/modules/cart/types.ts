export enum ActionTypes {
  addProductToCart = 'ADD_PRODUCT_TO_CART',
  removeProductToCart = 'REMOVE_PRODUCT_TO_CART',
  deleteProductToCart = 'DELETE_PRODUCT_TO_CART',
}

export interface IProduct {
  id: number
  name: string
  imgUrl: string
  price: number
}

export interface ICartItem {
  product: IProduct
  quantity: number
}

export interface ICartState {
  items: ICartItem[]
}
