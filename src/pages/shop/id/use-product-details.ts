import { useParams } from 'react-router-dom'
import { useGetProductByIDQuery } from '../../../stores/modules/products/productsRTK'

export function useProductDetails() {
  const { id } = useParams()

  const { isError, isLoading, data } = useGetProductByIDQuery(id || '')

  return {
    product: data,
    productError: isError,
    isProductLoading: isLoading,
    productCategory: data?.category,
  }
}
