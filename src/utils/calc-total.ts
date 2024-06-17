import { useMemo } from 'react'
import { ICartItem } from '../stores/modules/cart/types'

export function CalcTotal(products: ICartItem[]) {
  const total = useMemo(
    () =>
      products.reduce((accumulator, currentValue) => {
        const subTotal = currentValue.product.price * currentValue.quantity

        return accumulator + subTotal
      }, 0),
    [products],
  )
  return { total }
}
