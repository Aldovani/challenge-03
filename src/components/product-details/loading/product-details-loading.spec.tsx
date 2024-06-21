import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ProductLoading } from '.'

describe('<ProductDetailsLoading/>', () => {
  it('should be able to rende the component', () => {
    render(<ProductLoading />)

    const element = screen.getByTestId('ProductLoading')

    expect(element).toBeInTheDocument()
  })
})
