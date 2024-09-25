import type { Meta, StoryObj } from '@storybook/react'

import { Quantity } from './'
import { Providers } from '@/providers'
import { IProduct } from '@/stores/modules/cart/types'

const product: IProduct = {
  color: '',
  discount: 5,
  id: '2',
  imgUrl: '',
  name: 'Product',
  price: 1000,
  size: 'sm',
}

const meta: Meta<typeof Quantity> = {
  component: Quantity,
  tags: ['autodocs'],
  title: 'Components/Quantity',
  argTypes: { sizes: { control: 'radio', options: ['normal', 'small'] } },
  decorators: [
    (Story) => (
      <Providers>
        <Story />
      </Providers>
    ),
  ],
}

type Story = StoryObj<typeof Quantity>

export const Default: Story = {
  args: { product, sizes: 'normal' },
}
export const Small: Story = {
  args: { product, sizes: 'small' },
}

export default meta
