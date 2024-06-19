import { IState } from '../../stores'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

export const SIBLINGS_COUNT = 2

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1
    })
    .filter((page) => page > 0)
}

export function usePagination() {
  const [searchParams, setSearchParams] = useSearchParams()

  const pages =
    useSelector<IState, number | null>((state) => state.products.pages) || 0

  const totalOfElements =
    useSelector<IState, number | null>(
      (state) => state.products.totalOfElements,
    ) || 0

  const currentPage = Number(searchParams.get('page')) || 1
  const perPage = Number(searchParams.get('perPage')) || 16

  function handleChangePage(page: number) {
    setSearchParams((state) => {
      state.set('page', page.toString())

      return state
    })
  }

  const lastPage = Math.floor(totalOfElements / perPage)

  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - SIBLINGS_COUNT, currentPage - 1)
      : []

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + SIBLINGS_COUNT, lastPage),
        )
      : []

  return {
    nextPages,
    previousPages,
    lastPage,
    handleChangePage,
    currentPage,
    pages,
  }
}
