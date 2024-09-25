import type { Meta, StoryObj } from '@storybook/react'

import { Footer } from './'
import { BrowserRouter } from 'react-router-dom'

const meta: Meta<typeof Footer> = {
  component: Footer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  title: 'Components/Footer',
  argTypes: {},
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
}

type Story = StoryObj<typeof Footer>

export const Default: Story = {}

export default meta
