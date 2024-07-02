import { useSearchParams } from 'react-router-dom'

type UsePaginationProps = {
  pages?: number
  lastPage?: number
}

export const SIBLINGS_COUNT = 1

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1
    })
    .filter((page) => page > 0)
}

export function usePagination({ lastPage = 1, pages = 1 }: UsePaginationProps) {
  const [searchParams, setSearchParams] = useSearchParams()

  const currentPage = Number(searchParams.get('page')) || 1

  function handleChangePage(page: number) {
    setSearchParams((state) => {
      state.set('page', page.toString())

      return state
    })
  }

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
