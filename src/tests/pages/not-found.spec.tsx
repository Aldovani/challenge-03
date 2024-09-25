import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { NotFoundPage } from '../../pages/not-found'
import { MemoryRouter } from 'react-router-dom'
import { Providers } from '@/providers'

vi.mock('@/components/header', () => ({
  Header: () => 'header',
}))

describe('<NotFoundPage/>', () => {
  it('should be able to rende the page', () => {
    render(
      <MemoryRouter>
        <Providers>
          <NotFoundPage />
        </Providers>
      </MemoryRouter>,
    )

    const title = screen.getByRole('heading', { name: /Oops! Page Not Found/i })
    const linkGoBack = screen.getByRole('link', { name: /Go Back/i })

    expect(title).toBeInTheDocument()
    expect(linkGoBack).toBeInTheDocument()
  })
})
