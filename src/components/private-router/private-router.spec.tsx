import { render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { PrivateRouter } from '.'
import { MemoryRouter } from 'react-router-dom'

describe('<PrivateRoute/>', () => {
  afterEach(() => {
    vi.resetAllMocks()
  })

  it('should not be able access a private without be logged', () => {
    render(
      <MemoryRouter>
        <PrivateRouter>
          <h1>Private</h1>
        </PrivateRouter>
      </MemoryRouter>,
    )

    const contentPrivatePage = screen.queryByRole('heading', {
      name: /Private/i,
    })

    expect(contentPrivatePage).not.toBeInTheDocument()
  })
})
