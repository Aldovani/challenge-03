import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { CheckoutSuccessPage } from '../../pages/checkout/success'
import { MemoryRouter } from 'react-router-dom'

vi.mock('@/pages/checkout/success/use-checkout-success.ts', () => ({
  useCheckoutSuccess: () => ({
    data: undefined,
    isLoading: false,
    total: 100,
  }),
}))
vi.mock('@splidejs/react-splide', () => ({
  Splide: 'Splide',
  SplideSlide: 'SplideSlide',
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

    expect(title).toBeInTheDocument()
  })
})
