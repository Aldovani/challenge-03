import { render, screen } from '@testing-library/react'
import { Breadcrumb } from '.'
import { MemoryRouter } from 'react-router-dom'

describe('<Breadcrumb/>', () => {
  it('Render the banner component', () => {
    render(
      <MemoryRouter>
        <Breadcrumb name="product" />
      </MemoryRouter>,
    )

    expect(screen.getByRole('link', { name: /shop/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Home/i })).toBeInTheDocument()
    expect(screen.getByText(/product/i)).toBeInTheDocument()
  })
})
