import type { Meta, StoryObj } from '@storybook/react'

import { Logo } from './'

const meta: Meta<typeof Logo> = {
  component: Logo,
  tags: ['autodocs'],
  title: 'Components/Logo',
}

type Story = StoryObj<typeof Logo>

export const Default: Story = {
  args: { variants: 'black' },
}
export const White: Story = {
  args: { variants: 'white' },
}

export default meta
