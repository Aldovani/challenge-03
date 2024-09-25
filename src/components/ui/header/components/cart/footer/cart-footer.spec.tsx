import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CartFooter } from '.'
import { MemoryRouter } from 'react-router-dom'
import { Providers } from '@/providers'

describe('<CartFooter/>', () => {
  it('should be able to render the component', () => {
    render(
      <MemoryRouter>
        <Providers>
          <CartFooter onCloseCart={() => {}} />
        </Providers>
      </MemoryRouter>,
    )

    expect(screen.getByRole('link', { name: /Cart/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Checkout/i })).toBeInTheDocument()
  })
})
