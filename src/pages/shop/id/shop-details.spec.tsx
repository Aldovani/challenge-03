import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ProductDetailsPage } from '.'
import { Providers } from '@/providers'

describe('<ProductDetailsPage/>', () => {
  it('should be able to render the component initial state', () => {
    render(
      <Providers>
        <ProductDetailsPage />
      </Providers>,
    )
    expect(screen.getByTestId('ProductLoading')).toBeInTheDocument()
  })

  it('should be able to render the component initial state', () => {
    render(
      <Providers>
        <ProductDetailsPage />
      </Providers>,
    )
    expect(screen.getByTestId('ProductLoading')).toBeInTheDocument()
  })
})
