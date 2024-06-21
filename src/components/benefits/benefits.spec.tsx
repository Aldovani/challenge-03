import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Benefits } from '.'

describe('<Benefits/>', () => {
  it('Render the banner component', () => {
    render(<Benefits />)

    expect(
      screen.getByRole('heading', { name: /High Quality/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Warranty Protection/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Free Shipping/i }),
    ).toBeInTheDocument()
  })
})
