import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './'

type Input = {
  errorMessage: string
} & typeof Input.Field

const meta: Meta<Input> = {
  component: Input.Field,
  tags: ['autodocs'],
  title: 'Components/Input',
}

type Story = StoryObj<Input>

export const Default: Story = {
  render: (args) => (
    <Input.Label htmlFor="Label" name="Label">
      <Input.Field id="Label" {...args} />
    </Input.Label>
  ),
  args: {},
}

export const IsError: Story = {
  render: (args) => (
    <Input.Label htmlFor="Label" name="Label">
      <Input.Field id="Label" {...args} />
      <Input.MessageError error="Message error" />
    </Input.Label>
  ),
  args: { isError: true },
}

export const IsLoading: Story = {
  render: (args) => (
    <Input.Label htmlFor="Label" name="Label">
      <Input.Field id="Label" {...args} />
    </Input.Label>
  ),
  args: { isLoading: true },
}

export const Range: Story = {
  render: () => (
    <Input.Label htmlFor="Label" name="Label">
      <Input.Range onChange={() => {}} values={[0, 100]} />
    </Input.Label>
  ),
  args: { isLoading: true },
}

export const TextArea: Story = {
  render: () => (
    <Input.Label htmlFor="Label" name="Label">
      <Input.Textarea id="Label" />
    </Input.Label>
  ),
  args: { isLoading: true },
}

export default meta
