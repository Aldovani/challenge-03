import { usePagination } from './usePagination'
import { PaginationItem } from './item'

type PaginationProps = {
  currentPage: number
  totalElements: number
  totalPages: number
  pageSize: number
  onChangePage: (page: number) => void
}

export function Pagination({
  currentPage,
  totalElements,
  totalPages,
  onChangePage,
  pageSize = 12,
}: PaginationProps) {
  const { paginationRange, handleNextPage, handlePreviousPage } = usePagination(
    {
      currentPage,
      pageSize,
      siblingCount: 4,
      totalCount: totalElements,
      onChangePage,
    },
  )
  return (
    <footer className="flex justify-center items-center gap-8 my-16">
      {currentPage > 1 && (
        <button
          onClick={() => handlePreviousPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="rounded-lg bg-primary-100 text-xl py-4 px-7  flex items-center justify-center hover:bg-primary-500 hover:text-white transition-colors"
        >
          previous
        </button>
      )}

      {paginationRange?.map((item) => (
        <PaginationItem
          key={item}
          onClick={() => onChangePage(item)}
          active={currentPage === item}
        >
          {item}
        </PaginationItem>
      ))}

      <button
        onClick={() => handleNextPage(currentPage + 1)}
        disabled={totalPages === currentPage}
        className="rounded-[0.625rem]  text-xl py-4 px-7 bg-primary-100  flex items-center justify-center disabled:opacity-30 hover:bg-primary-500 hover:text-white transition-colors"
      >
        Next
      </button>
    </footer>
  )
}
