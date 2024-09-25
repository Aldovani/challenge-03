import type { Meta, StoryObj } from '@storybook/react'

import { Header } from './'
import { BrowserRouter } from 'react-router-dom'
import { Providers } from '@/providers'

const meta: Meta<typeof Header> = {
  component: Header,
  tags: ['autodocs'],
  title: 'Components/Header',
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Providers>
          <Story />
        </Providers>
      </BrowserRouter>
    ),
  ],
}

type Story = StoryObj<typeof Header>

export const Default: Story = {
  args: {
    transparent: false,
  },
}

export default meta
