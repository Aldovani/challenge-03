import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Products } from '../../services/api/products'
import { MemoryRouter } from 'react-router-dom'
import { ProductItem } from './product-item'

const product: Products = {
  name: 'Plush Velvet Sofa',
  id: '4',
  style: 'Glamorous',
  price: 1799.0,
  description:
    'Add a touch of luxury to your living room with this sumptuous plush velvet sofa. Its soft, inviting texture and rich color will make you feel like royalty.',
  rate: 4.9,
  images: [
    'https://furniro-pb.s3.us-east-2.amazonaws.com/products/image+4.png',
  ],
  priceDiscount: 0,
  isNew: true,
  category: 'Sofas',
  tags: ['Velvet', 'Glamorous', 'Luxurious', 'Inviting'],
}

vi.mock('react-redux', () => ({
  useDispatch: () => vi.fn(),
}))

describe('<ProductItem/>', () => {
  it('should be able to render the component', () => {
    render(
      <MemoryRouter>
        <ProductItem product={product} />
      </MemoryRouter>,
    )

    const title = screen.getByRole('heading', {
      name: /Plush Velvet Sofa/i,
    })

    expect(title).toBeInTheDocument()
  })
})
