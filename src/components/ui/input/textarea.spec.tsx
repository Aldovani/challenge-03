import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Textarea } from './textarea'

describe('<Field/>', () => {
  it('Should be able to render the component', () => {
    render(<Textarea placeholder="description" name="name" />)

    const textarea = screen.getByPlaceholderText('description')

    expect(textarea).toBeInTheDocument()
    expect(textarea).toHaveAttribute('name', 'name')
  })

  it('Must be have styles from error when isError true ', () => {
    render(<Textarea placeholder="name" name="name" isError />)

    const textarea = screen.getByRole('textbox')
    expect(textarea).toHaveClass('border-action-error')
  })
})
