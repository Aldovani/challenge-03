import { render, screen } from '@testing-library/react'
import { Quantity } from './quantity'

const product = {
  id: '1',
  imgUrl: 'https://furniro-pb.s3.us-east-2.amazonaws.com/products/image+2.png',
  name: 'Mid-Century Modern Sofa',
  price: 5000,
}

const mockDispatch = jest.fn()

jest.mock('react-redux', () => ({
  useSelector: () => 0,
  useDispatch: () => mockDispatch,
}))

describe('<Quantity/>', () => {
  it('Render the Quantity component', () => {
    render(<Quantity product={product} />)
    const minuisButton = screen.getByRole('button', {
      name: '-',
    })
    const addButton = screen.getByRole('button', {
      name: '+',
    })
    expect(minuisButton).toBeInTheDocument()
    expect(addButton).toBeInTheDocument()
  })
})
