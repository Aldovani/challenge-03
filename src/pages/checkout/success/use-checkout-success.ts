import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { CalcTotal } from '../../../utils/calc-total'

type FinishedCart = {
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

  const { total } = CalcTotal(finishedCart.items || [])

  return { total, finishedCart }
}
