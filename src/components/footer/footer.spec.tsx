import { render, screen } from '@testing-library/react'
import { Footer } from '.'
import { MemoryRouter } from 'react-router-dom'

describe('<Footer/>', () => {
  it('Render the Footer component', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    )

    expect(screen.getByRole('link', { name: /Funiro/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /shop/i })).toBeInTheDocument()
  })
})
