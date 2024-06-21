import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Label } from './label'

describe('<Label/>', () => {
  it('Should be able to render the component', () => {
    render(
      <Label htmlFor="email">
        <input id="email" placeholder="email" />
      </Label>,
    )

    const input = screen.getByPlaceholderText('email')

    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('id', 'email')
  })
})
