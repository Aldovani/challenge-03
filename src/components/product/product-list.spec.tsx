import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ProductList } from './product-list'
import { MemoryRouter } from 'react-router-dom'
import type { Products } from '@/types/products'
import { Providers } from '@/providers'

const products: Products[] = [
  {
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
    colors: [{ hex: '', name: '' }],
  },
  {
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
    colors: [{ hex: '', name: '' }],
  },
]

describe('<ProductList/>', () => {
  it('should be able to render the component', () => {
    render(
      <MemoryRouter>
        <Providers>
          <ProductList items={products} />
        </Providers>
      </MemoryRouter>,
    )

    const firstProduct = screen.getByRole('heading', {
      name: /Plush Velvet Sofa/i,
    })
    const secondProduct = screen.getByRole('heading', {
      name: /Scandinavian Sofa/i,
    })

    expect(firstProduct).toBeInTheDocument()
    expect(secondProduct).toBeInTheDocument()
  })

  it('should be able to render the loading component', () => {
    render(
      <MemoryRouter>
        <Providers>
          <ProductList items={[]} isLoading />
        </Providers>
      </MemoryRouter>,
    )

    const isLoading = screen.getAllByTestId('ProductListItemLoading')
    expect(isLoading).toHaveLength(8)
  })
})
