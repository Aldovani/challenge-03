import { CalcTotal } from '../../../utils/calc-total'

type FinishedCart = {
  orderData: Date
  orderID: string
  paymentMethod: string
  items: any
}

export function useCheckoutSuccess() {
  const finishedCart =
    (JSON.parse(
      sessionStorage.getItem('finishedCart') || '[]',
    ) as FinishedCart) || []

  const { total } = CalcTotal(finishedCart.items || [])

  return { total, finishedCart }
}
