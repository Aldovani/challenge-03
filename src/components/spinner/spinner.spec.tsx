import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Spinner } from '.'

describe('<Spinner/>', () => {
  it('should be able to render the component', () => {
    render(<Spinner />)

    const element = screen.getByTestId('spinner-test-id')

    expect(element).toBeInTheDocument()
    expect(element).toHaveClass(
      'block',
      'animate-spin',
      'top-0',
      'left-0',
      'w-6',
      'h-6',
    )
  })
})
