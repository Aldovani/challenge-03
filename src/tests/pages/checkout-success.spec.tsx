import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { CheckoutSuccessPage } from '../../pages/checkout/success'
import { MemoryRouter } from 'react-router-dom'

vi.mock('react-redux', () => ({
  useDispatch: () => vi.fn(),
}))

describe('<CheckoutSuccessPage/>', () => {
  it('Render page', () => {
    render(
      <MemoryRouter>
        <CheckoutSuccessPage />
      </MemoryRouter>,
    )

    const title = screen.queryByRole('heading', {
      name: /Your order is on its way!/i,
    })

    expect(title).not.toBeInTheDocument()
  })
})
