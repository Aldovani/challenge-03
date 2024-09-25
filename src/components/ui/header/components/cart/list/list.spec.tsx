import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CartList } from '.'
import { Providers } from '@/providers'

describe('<CartList/>', () => {
  it('should be able to render component', () => {
    render(
      <Providers>
        <CartList />
      </Providers>,
    )

    const items = screen.queryAllByRole('listitem')

    expect(items).toHaveLength(0)
  })
})
