import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ProductNotFound } from '.'
import { MemoryRouter } from 'react-router-dom'

describe('<ProductDetailsNotFound/>', () => {
  it('should be able to rende the component', () => {
    render(
      <MemoryRouter>
        <ProductNotFound />
      </MemoryRouter>,
    )

    const title = screen.getByRole('heading', {
      name: /Product Not Found/i,
    })
    const link = screen.getByRole('link', {
      name: /Go to shopping/i,
    })

    expect(title).toBeInTheDocument()
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/shop')
  })
})
