import type { Meta, StoryObj } from '@storybook/react'

import { Link } from './'
import { MemoryRouter } from 'react-router-dom'

const meta: Meta<typeof Link> = {
  component: Link,
  tags: ['autodocs'],
  title: 'Components/Link',
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
}

type Story = StoryObj<typeof Link>

export const Default: Story = {
  args: { children: 'Link' },
}
export const Secondary: Story = {
  args: { children: 'Link', variants: 'secondary' },
}
export const Outline: Story = {
  args: { children: 'Link', variants: 'outline' },
}

export default meta
