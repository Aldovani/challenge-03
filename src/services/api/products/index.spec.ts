import { describe, expect, it } from 'vitest'
import { Products } from '.'

describe('Fetch Products', () => {
  it('should be able fetch the products', async () => {
    const { products } = await Products.FindProducts({})
    expect(products).toHaveLength(16)
  })

  it('should be able fetch the products by filters', async () => {
    const response = await Products.FindProducts({ type: 'sofas' })
    expect(response.products[0].category).toBe('sofas')
  })

  it('should be able fetch one product by id', async () => {
    const { product } = await Products.GetProduct({ id: '1' })
    expect(product.id).toBe('1')
  })
})
