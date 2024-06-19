import { useCallback, useEffect, useState } from 'react'
import { Products } from '../../../services/api/products'
import { useParams } from 'react-router-dom'

export function useProductDetails() {
  const { id } = useParams()

  const [product, setProduct] = useState<Products>()
  const [isProductLoading, setIsProductLoading] = useState(true)
  const [productsRelated, setProductsRelated] = useState<Products[]>([])
  const [isProductsRelatedLoading, setIsProductsRelatedLoading] = useState(true)
  const [productError, setProductError] = useState(false)

  const getProduct = useCallback(async (id: string) => {
    try {
      setIsProductLoading(true)
      setIsProductsRelatedLoading(true)

      const product = await Products.GetProduct({ id })
      setProduct(product)

      Products.findProducts({
        type: product.category,
        page: 1,
        perPage: 4,
      })
        .then(({ response }) => {
          setProductsRelated(response.data.data)
        })
        .finally(() => {
          setIsProductsRelatedLoading(false)
        })
    } catch (err) {
      setProductError(true)
    } finally {
      setIsProductLoading(false)
    }
  }, [])

  useEffect(() => {
    if (!id) return

    getProduct(id)
  }, [getProduct, id])

  return {
    product,
    isProductsRelatedLoading,
    productError,
    productsRelated,
    isProductLoading,
  }
}
