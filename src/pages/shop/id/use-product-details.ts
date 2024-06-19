import { useCallback, useEffect, useState } from 'react'
import { Products } from '../../../services/api/products'
import { useParams } from 'react-router-dom'

export function useProductDetails() {
  const { id } = useParams()

  const [product, setProduct] = useState<Products>()
  const [productLoading, setProductLoading] = useState(true)
  const [productError, setProductError] = useState(false)

  const getProduct = useCallback(async (id: string) => {
    try {
      setProductLoading(true)
      const product = await Products.GetProduct({ id })
      setProduct(product)
    } catch (err) {
      setProductError(true)
    } finally {
      setProductLoading(false)
    }
  }, [])

  useEffect(() => {
    if (!id) return

    getProduct(id)
  }, [getProduct, id])

  return { product, productLoading, productError }
}
