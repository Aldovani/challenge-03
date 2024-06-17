import { useSelector } from 'react-redux'
import { IState } from '../../stores'
import { ICartItem } from '../../stores/modules/cart/types'
import { CalcTotal } from '../../utils/calc-total'

export function useCheckoutForm() {
  const products = useSelector<IState, ICartItem[]>((state) => state.cart.items)
  const { total } = CalcTotal(products)

  return {
    products,
    total,
  }
}
