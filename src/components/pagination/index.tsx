import { SIBLINGS_COUNT, usePagination } from './usePagination'
import { PaginationItem } from './item'

type PaginationProps = {
  totalOfPages?: number
  lastPages?: number
}

export function Pagination({
  lastPages = 1,
  totalOfPages = 1,
}: PaginationProps) {
  const {
    lastPage,
    nextPages,
    previousPages,
    currentPage,
    handleChangePage,
    pages,
  } = usePagination({ lastPage: lastPages, pages: totalOfPages })
  return (
    <footer className="flex justify-center items-center gap-4 sm:gap-8 my-16">
      {currentPage > 1 && (
        <button
          onClick={() => handleChangePage(currentPage - 1)}
          disabled={currentPage === 1}
          className="rounded-lg bg-primary-100 sm:text-xl text-base sm:py-4 py-2 sm:px-7 px-3  flex items-center justify-center hover:bg-primary-500 hover:text-white transition-colors"
        >
          previous
        </button>
      )}

      {currentPage > 1 + SIBLINGS_COUNT && (
        <>
          <PaginationItem onPageChange={handleChangePage} number={1} />
          {currentPage > 2 + SIBLINGS_COUNT && <span>...</span>}
        </>
      )}

      {previousPages.map((item) => (
        <PaginationItem
          key={item}
          number={item}
          onPageChange={handleChangePage}
        />
      ))}

      {currentPage && (
        <PaginationItem
          active
          number={currentPage}
          onPageChange={handleChangePage}
        />
      )}

      {nextPages.map((item) => (
        <PaginationItem
          key={item}
          number={item}
          onPageChange={handleChangePage}
        />
      ))}

      {currentPage + SIBLINGS_COUNT < lastPage && (
        <>
          {currentPage + 1 + SIBLINGS_COUNT < lastPage && <span>...</span>}
          <PaginationItem onPageChange={handleChangePage} number={lastPage} />
        </>
      )}

      <button
        onClick={() => handleChangePage(currentPage + 1)}
        disabled={pages === currentPage}
        className="rounded-[0.625rem] sm:text-xl text-base sm:py-4 py-2 sm:px-7 px-3 bg-primary-100  flex items-center justify-center disabled:opacity-30 hover:bg-primary-500 hover:text-white transition-colors"
      >
        Next
      </button>
    </footer>
  )
}
