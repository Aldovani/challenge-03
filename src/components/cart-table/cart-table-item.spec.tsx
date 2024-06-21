import { render, screen } from '@testing-library/react'
import { CartTableItem } from './cart-table-item'
import { describe, expect, it, vi } from 'vitest'
import { FormateMoney } from '../../utils/formate-money'

const product = {
  id: '1',
  imgUrl: 'https://furniro-pb.s3.us-east-2.amazonaws.com/products/image+2.png',
  name: 'Mid-Century Modern Sofa',
  price: 5000,
}

const fn = vi.fn()
vi.mock('react-redux', () => ({
  useSelector: vi.fn(),
  useDispatch: () => fn,
}))

describe('<CartTableItem/>', () => {
  it('Render the cart table component', () => {
    const tableBody = document.createElement('tbody')

    render(<CartTableItem product={product} quantity={1} />, {
      container: document.body.appendChild(tableBody),
    })
    const image = screen.getByRole('img', { name: /Mid-Century Modern Sofa/i })
    const cellName = screen.getByText(/Mid-Century Modern Sofa/i)

    expect(image).toBeInTheDocument()
    expect(cellName).toBeInTheDocument()
  })

  it('Check subtotal calc', () => {
    const tableBody = document.createElement('tbody')
    const quantity = 2
    render(<CartTableItem product={product} quantity={quantity} />, {
      container: document.body.appendChild(tableBody),
    })

    const subTotal = FormateMoney(product.price * quantity)
    const cellSubTotal = screen.getByRole('cell', {
      name: new RegExp(subTotal),
    })

    expect(cellSubTotal).toBeInTheDocument()
  })
})
