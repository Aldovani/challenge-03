import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Pagination } from '.'
import { MemoryRouter } from 'react-router-dom'

vi.mock('react-redux', () => ({
  useSelector: () => {},
}))
const CURRENT_PAGE = 5
vi.mock('./usePagination', () => ({
  usePagination: () => ({
    lastPage: 10,
    nextPages: [],
    previousPages: [],
    currentPage: CURRENT_PAGE,
    handleChangePage: () => {},
    pages: 9,
  }),
  SIBLINGS_COUNT: 1,
}))

describe('<Pagination/>', () => {
  it('Should be able render the component', () => {
    render(
      <MemoryRouter>
        <Pagination />
      </MemoryRouter>,
    )

    expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: new RegExp(CURRENT_PAGE.toString()) }),
    ).toBeInTheDocument()
  })
})
