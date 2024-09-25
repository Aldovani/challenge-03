import { useFilter } from '@/hooks/use-filter'

export function useFilterBar() {
  const { page, perPage, sortBy, handleChangePerPage, handleChangeSortBy } =
    useFilter()

  return {
    page,
    perPage,
    sortBy,
    handleChangePerPage,
    handleChangeSortBy,
  }
}
