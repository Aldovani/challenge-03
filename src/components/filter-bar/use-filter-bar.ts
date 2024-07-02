import { useState } from 'react'
import { useFilter } from '../../hooks/use-filter'

export function useFilterBar() {
  const { page, perPage, sortBy, handleChangePerPage, handleChangeSortBy } =
    useFilter()

  const [isFilterOpen, setIisFilterOpen] = useState(false)

  function handleOpenFilterDrawer() {
    setIisFilterOpen(true)
  }

  function handleCloseFilterDrawer() {
    setIisFilterOpen(false)
  }

  return {
    handleCloseFilterDrawer,
    handleOpenFilterDrawer,
    isFilterOpen,
    page,
    perPage,
    sortBy,
    handleChangePerPage,
    handleChangeSortBy,
  }
}
