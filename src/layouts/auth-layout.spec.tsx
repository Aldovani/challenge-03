import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { AuthLayout } from './auth-layout'

describe('<AuthLayout/>', () => {
  it('should be able to render the layout', () => {
    render(<AuthLayout />)

    const authLayout = screen.getByTestId('auth-layout')

    expect(authLayout).toBeInTheDocument()
  })
})
