import { useAppDispatch } from '@/stores'
import { CalcTotal } from '../../../utils/calc-total'
import { useEffect } from 'react'
import { clearCart } from '@/stores/modules/cart'
import { useParams } from 'react-router-dom'
import { useGetOrderByIDQuery } from '@/stores/modules/orders'

export function useCheckoutSuccess() {
  const dispatch = useAppDispatch()
  const { id } = useParams()

  const { isLoading, data } = useGetOrderByIDQuery(id || '')

  const { total } = CalcTotal(data?.items || [])

  useEffect(() => {
    dispatch(clearCart())
  }, [dispatch])

  return { total, isLoading, data }
}
