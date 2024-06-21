import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Cart } from '.'
import { MemoryRouter } from 'react-router-dom'

vi.mock('react-redux', () => ({
  useSelector: () => [],
}))

describe('<Cart/>', () => {
  it('should be able to render the component', () => {
    render(
      <MemoryRouter>
        <Cart isOpen={true} onClose={() => {}} isOpening={false} />
      </MemoryRouter>,
    )

    const cart = screen.getByTestId('card')

    expect(cart).toBeInTheDocument()
    expect(cart).toBeVisible()
  })
})
