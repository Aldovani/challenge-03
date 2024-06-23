import { , useState } from 'react'
import { useFilter } from '../../hooks/use-filter'
import { useGetProductsQuery } from '../../stores/modules/products/productsRTK'

export function useFilterBar() {
  const {
    handleChangePerPage,
    handleChangeSortBy,
    isNew,
    isOnSales,
    page,
    perPage,
    priceFrom,
    priceTo,
    type,
    sortBy,
    dispatch,
  } = useFilter()

  const { isError, isLoading, data } = useGetProductsQuery({
    isNew,
    isOnSales,
    page,
    perPage,
    priceTo,
    priceFrom,
    sort: sortBy,
    type,
  })

  const [isFilterOpen, setIisFilterOpen] = useState(false)

  function handleOpenFilterDrawer() {
    setIisFilterOpen(true)
  }

  function handleCloseFilterDrawer() {
    setIisFilterOpen(false)
  }

  return {
    numbeOfElements: data?.totalOfElements,
    handleCloseFilterDrawer,
    handleOpenFilterDrawer,
    isFilterOpen,
    handleChangePerPage,
    handleChangeSortBy,
    page,
    perPage,
    sortBy,
  }
}
