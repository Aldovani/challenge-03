import { describe, expect, it, vi } from 'vitest'
import { ProductDetails } from '.'
import { IProduct } from '../../stores/modules/products/types'
import { fireEvent, render, screen } from '@testing-library/react'

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

  it('should be able to on button to remove item', () => {
    vi.resetAllMocks()
    render(<ProductDetails product={product} />)

    const button = screen.getByRole('button', {
      name: /Remove from Cart/i,
    })

    fireEvent.click(button)

    expect(deleteProductToCartFN).toHaveBeenCalled()
  })
})
