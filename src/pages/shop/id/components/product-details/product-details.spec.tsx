import { describe, expect, it, vi } from 'vitest'
import { ProductDetails } from '.'
import { IProduct } from '../../stores/modules/products/types'
import { render, screen } from '@testing-library/react'

const product: IProduct = {
  name: 'Scandinavian Sofa',
  id: '3',
  style: 'Scandinavian',
  price: 1199.0,
  description:
    'Embrace the minimalist beauty of Scandinavian design with this sleek and functional Scandinavian sofa. Its clean lines and neutral tones create a sense of calm and tranquility.',
  rate: 4.6,
  images: [
    'https://furniro-pb.s3.us-east-2.amazonaws.com/products/image+3.png',
  ],
  priceDiscount: 50,
  isNew: false,
  category: 'Sofas',
  colors: [{ hex: '#000', name: 'black' }],
  tags: ['Scandinavian', 'Minimalist', 'Functional', 'Relaxing'],
}
const deleteProductToCartFN = vi.fn()
vi.mock('react-redux', () => ({
  useSelector: () => true,
  useDispatch: () => deleteProductToCartFN,
}))

describe('<ProductDetails/>', () => {
  it('should be able to render the component', () => {
    render(<ProductDetails product={product} />)

    const title = screen.getByRole('heading', {
      name: new RegExp(product.name),
    })

    expect(title).toBeInTheDocument()
  })
})
