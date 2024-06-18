import { IProduct, ActionTypes } from './types'

export function addProductToCart(product: IProduct) {
  return {
    type: ActionTypes.addProductToCart as const,
    payload: {
      product,
    },
  }
}

export function removeProductToCart(productId: string) {
  return {
    type: ActionTypes.removeProductToCart as const,
    payload: { productId },
  }
}

export function deleteProductToCart(productId: string) {
  return {
    type: ActionTypes.deleteProductToCart as const,
    payload: { productId },
  }
}
export function clearProductToCart() {
  return {
    type: ActionTypes.clearProductToCart as const,
  }
}

type AddProductToCartAction = ReturnType<typeof addProductToCart>
type RemoveProductToCartAction = ReturnType<typeof removeProductToCart>
type DeleteProductToCartAction = ReturnType<typeof deleteProductToCart>
type ClearProductToCartAction = ReturnType<typeof clearProductToCart>

export type ICartActions =
  | AddProductToCartAction
  | RemoveProductToCartAction
  | DeleteProductToCartAction
  | ClearProductToCartAction
