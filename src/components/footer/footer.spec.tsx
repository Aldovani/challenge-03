import { MemoryRouter } from 'react-router-dom'
import { Footer } from '.'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

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
