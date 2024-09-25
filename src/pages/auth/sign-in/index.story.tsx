import type { Meta, StoryObj } from '@storybook/react'

import { SignInPage } from './'
import { MemoryRouter } from 'react-router-dom'

const meta: Meta<typeof SignInPage> = {
  component: SignInPage,
  tags: ['autodocs'],
  title: 'Pages/Auth/Sign-in',
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
}

type Story = StoryObj<typeof SignInPage>

export const Default: Story = {}

export default meta
