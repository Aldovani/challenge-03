export enum ActionTypes {
  addProductToCart = 'ADD_PRODUCT_TO_CART',
  removeProductToCart = 'REMOVE_PRODUCT_TO_CART',
  deleteProductToCart = 'DELETE_PRODUCT_TO_CART',
  clearProductToCart = 'CLEAR_PRODUCT_TO_CART',
}

export interface IProduct {
  id: string
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
