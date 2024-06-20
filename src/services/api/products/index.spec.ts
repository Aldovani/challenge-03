import { findProducts } from '.'

describe('Fetch Products', () => {
  it('should be able fetch the products', async () => {
    const { response } = await findProducts({})

    expect(response?.data.data).toHaveLength(16)
  })
  it('should be able fetch the products by filters', async () => {
    const { response } = await findProducts({ type: 'sofas' })

    expect(response?.data.data[0].category).toBe('sofas')
  })
})
