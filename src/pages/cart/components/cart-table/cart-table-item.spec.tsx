import { render, screen } from '@testing-library/react'
import { CartTableItem } from './cart-table-item'
import { describe, expect, it } from 'vitest'
import { FormateMoney } from '@/utils/formate-money'
import { Providers } from '@/providers'

const product = {
  id: '1',
  imgUrl: 'https://furniro-pb.s3.us-east-2.amazonaws.com/products/image+2.png',
  name: 'Mid-Century Modern Sofa',
  price: 5000,
  color: 'blue',
  size: 'large',
  discount: 0,
}

describe('<CartTableItem/>', () => {
  it('Render the cart table component', () => {
    const tableBody = document.createElement('tbody')

    render(
      <Providers>
        <CartTableItem product={product} quantity={1} />
      </Providers>,
      {
        container: document.body.appendChild(tableBody),
      },
    )
    const image = screen.getByRole('img', { name: /Mid-Century Modern Sofa/i })
    const cellName = screen.getByText(/Mid-Century Modern Sofa/i)

    expect(image).toBeInTheDocument()
    expect(cellName).toBeInTheDocument()
  })

  it('Check subtotal calc', () => {
    const tableBody = document.createElement('tbody')
    const quantity = 2
    render(
      <Providers>
        <CartTableItem product={product} quantity={quantity} />
      </Providers>,
      {
        container: document.body.appendChild(tableBody),
      },
    )

    const subTotal = FormateMoney(product.price * quantity)
    const cellSubTotal = screen.getByRole('cell', {
      name: new RegExp(subTotal),
    })

    expect(cellSubTotal).toBeInTheDocument()
  })
})
