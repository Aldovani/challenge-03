import { render, screen } from '@testing-library/react'
import { CartTable } from '.'
import { describe, expect, it } from 'vitest'
import { Providers } from '@/providers'
import { MemoryRouter } from 'react-router-dom'
import { ICartItem } from '@/stores/modules/cart/types'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { cart } from '@/stores/modules'
import { ReactNode } from 'react'

const product: ICartItem = {
  product: {
    color: '',
    discount: 0,
    id: '',
    imgUrl: '',
    name: '',
    price: 5,
    size: '',
  },
  quantity: 1,
}

function renderWithProvider(
  ui: ReactNode,
  {
    preloadedState = {
      cart: { items: [product] },
    },
    store = configureStore({
      reducer: { cart },
      preloadedState,
    }),
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }: { children: ReactNode }) {
    return <Provider store={store}>{children}</Provider>
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}

describe('<CartTable/>', () => {
  it('Render the cartTable component', () => {
    renderWithProvider(
      <MemoryRouter>
        <CartTable />
      </MemoryRouter>,
    )

    const table = screen.getByRole('table')
    expect(table).toBeInTheDocument()
  })

  it('Render the empty cartTable component', () => {
    render(
      <MemoryRouter>
        <Providers>
          <CartTable />
        </Providers>
      </MemoryRouter>,
    )

    const table = screen.getByRole('heading')
    expect(table).toBeInTheDocument()
  })
})
