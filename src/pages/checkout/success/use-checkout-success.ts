import { useDispatch } from 'react-redux'
import { ICartItem } from '../../../stores/modules/cart/types'
import { clearProductToCart } from '../../../stores/modules/cart/actions'
import { useEffect } from 'react'
import { CalcTotal } from '../../../utils/calc-total'

type FinishedCart = {
  items: ICartItem[]
  orderData: Date
  orderID: string
  paymentMethod: string
}

export function useCheckoutSuccess() {
  const finishedCart =
    (JSON.parse(
      sessionStorage.getItem('finishedCart') || '[]',
    ) as FinishedCart) || []

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(clearProductToCart())
  }, [dispatch])

  const { total } = CalcTotal(finishedCart.items)

  return { total, finishedCart }
}
