import type { Meta, StoryObj } from '@storybook/react'

import { Banner } from './'

const meta: Meta<typeof Banner> = {
  component: Banner,
  tags: ['autodocs'],
  title: 'Components/Banner',
  argTypes: {},
}

type Story = StoryObj<typeof Banner>

export const Default: Story = {
  args: {
    className: '',
    page: 'Home',
  },
}

export default meta
