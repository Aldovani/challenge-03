import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Header } from '.'
import { MemoryRouter } from 'react-router-dom'
import { FactoryICartItem } from '../../tests/factory/cart-item'

vi.mock('react-redux', () => ({
  useSelector: () => FactoryICartItem(7),
  useDispatch: () => vi.fn(),
}))

describe('<Header/>', () => {
  it('should be able to rende the component', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    )

    const logo = screen.getByRole('link', { name: /Furniro logo/i })
    const links = screen.getAllByRole('link')

    expect(logo).toBeInTheDocument()
    expect(links).toHaveLength(10)
  })
})
