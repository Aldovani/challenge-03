import { useParams } from 'react-router-dom'
import {
  useGetProductByIDQuery,
  useGetProductsQuery,
} from '../../../stores/modules/products/products-api'

export function useProductDetails() {
  const { id } = useParams()

  const {
    isError: productError,
    isLoading,
    data: product,
  } = useGetProductByIDQuery(id || '')

  const { isLoading: isProductsRelatedLoading, data: productsRelated } =
    useGetProductsQuery(
      {
        perPage: 6,
        page: 1,
        type: product?.category,
      },
      { refetchOnMountOrArgChange: false },
    )

  return {
    isProductsRelatedLoading,
    product,
    productError,
    isProductLoading: isLoading,
    productsRelated,
  }
}
