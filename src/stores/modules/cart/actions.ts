import { IProduct, ActionTypes } from './types'

export function addProductToCart(product: IProduct) {
  return {
    type: ActionTypes.addProductToCart as const,
    payload: {
      product,
    },
  }
}

export function removeProductToCart(productId: number) {
  return {
    type: ActionTypes.removeProductToCart as const,
    payload: { productId },
  }
}

export function deleteProductToCart(productId: number) {
  return {
    type: ActionTypes.deleteProductToCart as const,
    payload: { productId },
  }
}

type AddProductToCartAction = ReturnType<typeof addProductToCart>
type RemoveProductToCartAction = ReturnType<typeof removeProductToCart>
type DeleteProductToCartAction = ReturnType<typeof deleteProductToCart>

export type ICartActions =
  | AddProductToCartAction
  | RemoveProductToCartAction
  | DeleteProductToCartAction
