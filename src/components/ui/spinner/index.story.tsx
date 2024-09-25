import type { Meta, StoryObj } from '@storybook/react'

import { Spinner } from './'

const meta: Meta<typeof Spinner> = {
  component: Spinner,
  tags: ['autodocs'],
  title: 'Components/Spinner',
}

type Story = StoryObj<typeof Spinner>

export const Default: Story = {}

export default meta
