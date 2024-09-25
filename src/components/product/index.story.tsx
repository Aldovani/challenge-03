import type { Meta, StoryObj } from '@storybook/react'

import { ProductList } from './product-list'
import { Products } from '@/types/products'
import { MemoryRouter } from 'react-router-dom'
import { Providers } from '@/providers'

const products: Products[] = [
  {
    colors: [{ hex: '#000', name: 'black' }],
    priceDiscount: 5,
    id: '2',
    images: ['/products/image 16.png'],
    name: 'Product',
    price: 1000,
    sizes: [{ acronym: 'sm', name: 'small' }],
    category: '',
    description: '',
    isNew: false,
    rate: 5,
    style: '',
    tags: [''],
  },
  {
    colors: [{ hex: '#000', name: 'black' }],
    priceDiscount: 5,
    id: '2',
    images: ['/products/image 18.png'],
    name: 'Product',
    price: 1000,
    sizes: [{ acronym: 'sm', name: 'small' }],
    category: '',
    description: '',
    isNew: false,
    rate: 5,
    style: '',
    tags: [''],
  },
  {
    colors: [{ hex: '#000', name: 'black' }],
    priceDiscount: 5,
    id: '2',
    images: ['/products/image 88.png'],
    name: 'Product',
    price: 1000,
    sizes: [{ acronym: 'sm', name: 'small' }],
    category: '',
    description: '',
    isNew: false,
    rate: 5,
    style: '',
    tags: [''],
  },
  {
    colors: [{ hex: '#000', name: 'black' }],
    priceDiscount: 5,
    id: '2',
    images: ['/products/image 54.png'],
    name: 'Product',
    price: 1000,
    sizes: [{ acronym: 'sm', name: 'small' }],
    category: '',
    description: '',
    isNew: false,
    rate: 5,
    style: '',
    tags: [''],
  },
  {
    colors: [{ hex: '#000', name: 'black' }],
    priceDiscount: 5,
    id: '2',
    images: ['/products/image 24.png'],
    name: 'Product',
    price: 1000,
    sizes: [{ acronym: 'sm', name: 'small' }],
    category: '',
    description: '',
    isNew: false,
    rate: 5,
    style: '',
    tags: [''],
  },
  {
    colors: [{ hex: '#000', name: 'black' }],
    priceDiscount: 5,
    id: '2',
    images: ['/products/image 11.png'],
    name: 'Product',
    price: 1000,
    sizes: [{ acronym: 'sm', name: 'small' }],
    category: '',
    description: '',
    isNew: false,
    rate: 5,
    style: '',
    tags: [''],
  },
]

const meta: Meta<typeof ProductList> = {
  component: ProductList,
  tags: ['autodocs'],
  title: 'Components/Products',
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Providers>
          <Story />
        </Providers>
      </MemoryRouter>
    ),
  ],
}

type Story = StoryObj<typeof ProductList>

export const Default: Story = {
  args: { items: products, className: 'grid grid-cols-3 gap-8' },
}

export const IsLoading: Story = {
  args: { isLoading: true },
}

export const IsEmpty: Story = {
  args: { items: [], isLoading: false },
}

export default meta
