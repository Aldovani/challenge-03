import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Field } from './field'

describe('<Field/>', () => {
  it('Should be able to render the component', () => {
    render(<Field placeholder="name" name="name" type="text" />)

    const input = screen.getByPlaceholderText('name')

    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('placeholder', 'name')
    expect(input).toHaveAttribute('type', 'text')
  })

  it('Must be disabled when in loading state', () => {
    render(<Field placeholder="name" name="name" type="text" isLoading />)

    const input = screen.getByRole('textbox')
    expect(input).toHaveAttribute('disabled')
  })

  it('Must be have styles from error when isError true ', () => {
    render(<Field placeholder="name" name="name" type="text" isError />)

    const input = screen.getByRole('textbox')
    expect(input).toHaveClass('border-action-error')
  })
})
