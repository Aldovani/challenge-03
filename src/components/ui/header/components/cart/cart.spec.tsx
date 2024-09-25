import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Cart } from '.'
import { MemoryRouter } from 'react-router-dom'
import { Providers } from '@/providers'

describe('<Cart/>', () => {
  it('should be able to render the component', () => {
    render(
      <MemoryRouter>
        <Providers>
          <Cart />
        </Providers>
      </MemoryRouter>,
    )

    const cart = screen.getByTestId('card')

    expect(cart).toBeInTheDocument()
    expect(cart).toBeVisible()
  })
})
