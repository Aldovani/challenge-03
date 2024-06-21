import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ProductListLoading } from '.'

describe('<ProductLoading/>', () => {
  it('should be able to render the component', () => {
    render(<ProductListLoading />)

    const totalOfElements = screen.getAllByTestId('ProductListItemLoading')

    expect(totalOfElements).toHaveLength(8)
  })
  it('should be able to render 16 elements', () => {
    render(<ProductListLoading numberOfElements={16} />)

    const totalOfElements = screen.getAllByTestId('ProductListItemLoading')

    expect(totalOfElements).toHaveLength(16)
  })
})
