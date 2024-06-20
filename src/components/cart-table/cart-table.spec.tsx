import { render, screen } from '@testing-library/react'
import { CartTable } from '.'

const mockDispatch = jest.fn()

jest.mock('react-redux', () => ({
  useSelector: () => [],
  useDispatch: () => mockDispatch,
}))

describe('<CartTable/>', () => {
  it('Render the cart table component', () => {
    render(<CartTable />)
    const table = screen.getByRole('table')
    expect(table).toBeInTheDocument()
  })
})
