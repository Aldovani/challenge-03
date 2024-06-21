import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Banner } from '.'
import { MemoryRouter } from 'react-router-dom'

describe('<Banner/>', () => {
  it('should be able to render ', () => {
    render(
      <MemoryRouter>
        <Banner page="contact" />
      </MemoryRouter>,
    )
    expect(
      screen.getByRole('heading', { name: /contact/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
  })
})
