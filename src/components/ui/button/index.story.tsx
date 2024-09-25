import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '.'
import { fn } from '@storybook/test'

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Button',
  argTypes: {
    variants: {
      control: 'radio',
      description: '',
      table: { defaultValue: { summary: 'primary' } },
      options: ['primary', 'secondary', 'outline'],
    },
    children: {
      description: '',
    },
    isLoading: {
      type: 'boolean',
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
  },
  args: { onClick: fn() },
}

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    children: 'Button',
    variants: 'primary',
  },
}
export const Secondary: Story = {
  args: {
    children: 'Button',
    variants: 'secondary',
  },
}
export const Outline: Story = {
  args: {
    children: 'Button',
    variants: 'outline',
  },
}
export const IsLoading: Story = {
  args: {
    children: 'Button',
    isLoading: true,
  },
}

export default meta
