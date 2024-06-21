import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { NotFoundPage } from '../../pages/not-found'
import { MemoryRouter } from 'react-router-dom'

vi.mock('react-redux', () => ({
  useSelector: () => {},
}))

describe('<NotFoundPage/>', () => {
  it('should be able to rende the page', () => {
    render(
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>,
    )

    const title = screen.getByRole('heading', { name: /Oops! Page Not Found/i })
    const linkGoBack = screen.getByRole('link', { name: /Go Back/i })

    expect(title).toBeInTheDocument()
    expect(linkGoBack).toBeInTheDocument()
  })
})
