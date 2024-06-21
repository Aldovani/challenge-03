import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { CartList } from '.'
import { FactoryICartItem } from '../../../tests/factory/cart-item'

vi.mock('react-redux', () => ({
  useSelector: () => FactoryICartItem(5),
  useDispatch: () => vi.fn(),
}))

describe('<CartList/>', () => {
  it('should be able to render component', () => {
    render(<CartList />)

    const items = screen.getAllByRole('listitem')

    expect(items).toHaveLength(6)
  })
})
