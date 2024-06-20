import { render, screen } from '@testing-library/react'
import { Banner } from '.'
import { MemoryRouter } from 'react-router-dom'

describe('<Banner/>', () => {
  it('Render the banner component', () => {
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
