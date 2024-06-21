import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { CartFooter } from '.'
import { FactoryICartItem } from '../../../tests/factory/cart-item'
import { MemoryRouter } from 'react-router-dom'

vi.mock('react-redux', () => ({
  useSelector: () => FactoryICartItem(5),
}))

describe('<CartFooter/>', () => {
  it('should be able to render the component', () => {
    render(
      <MemoryRouter>
        <CartFooter onCloseCart={() => {}} />
      </MemoryRouter>,
    )

    expect(screen.getByRole('link', { name: /Cart/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Checkout/i })).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /Comparison/i }),
    ).toBeInTheDocument()
  })
})
