import { render, screen } from '@testing-library/react'
import { CheckoutList } from '.'
import { ICartItem } from '../../../stores/modules/cart/types'

const products: ICartItem[] = [
  { product: { id: '1', name: '', imgUrl: '', price: 1 }, quantity: 1 },
  { product: { id: '2', name: '', imgUrl: '', price: 1 }, quantity: 1 },
  { product: { id: '3', name: '', imgUrl: '', price: 1 }, quantity: 1 },
]

describe('<CheckoutFormList/>', () => {
  it('Render CheckoutFormList component ', () => {
    render(<CheckoutList products={products} />)

    expect(screen.getAllByRole('listitem')).toHaveLength(3)
  })
})
