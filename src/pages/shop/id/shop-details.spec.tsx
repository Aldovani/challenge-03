import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ProductDetailsPage } from '.'

describe('<ProductDetailsPage/>', () => {
  it('should be able to render the component initial state', () => {
    render(<ProductDetailsPage />)
    expect(screen.getByTestId('ProductLoading')).toBeInTheDocument()
  })

  it('should be able to render the component initial state', () => {
    render(<ProductDetailsPage />)
    expect(screen.getByTestId('ProductLoading')).toBeInTheDocument()
  })
})
