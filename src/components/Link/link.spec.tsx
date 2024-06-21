import { MemoryRouter } from 'react-router-dom'
import { Link } from '.'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

describe('<Link/>', () => {
  it('Render the Link component', () => {
    render(
      <MemoryRouter>
        <Link to="/">Home</Link>
      </MemoryRouter>,
    )

    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
  })
  it('check is href is correct ', () => {
    render(
      <MemoryRouter>
        <Link to="/shop/123">Product 123</Link>
      </MemoryRouter>,
    )

    expect(screen.getByRole('link', { name: /Product 123/i })).toHaveAttribute(
      'href',
      '/shop/123',
    )
  })
})
