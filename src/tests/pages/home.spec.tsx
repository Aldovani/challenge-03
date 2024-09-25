import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import { FactoryICartItem } from '../factory/cart-item'
import { HomePage } from '../../pages/home'

vi.mock('react-redux', () => ({
  useSelector: () => FactoryICartItem(7),
  useDispatch: () => vi.fn(),
}))

vi.mock('@/pages/home/components/products', () => ({
  Products: () => 'products',
}))

vi.mock('@/pages/home/components/slide', () => ({
  Slide: () => <div>slide</div>,
}))

describe('<Home/>', () => {
  it('should be able to rende the page', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    )

    const title = screen.getByRole('heading', {
      name: /Discover Our New Collection/i,
    })
    const linkGoToShop = screen.getByRole('link', { name: /Buy now/i })

    expect(title).toBeInTheDocument()
    expect(linkGoToShop).toBeInTheDocument()
  })
})
