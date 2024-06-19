import { useEffect, useState } from 'react'
import { useFilter } from '../../hooks/useFilter'
import { useSelector } from 'react-redux'
import { IState } from '../../stores'
import { fetchProducts } from '../../stores/modules/products/fetchProducts'

export function useFilterBar() {
  const numbeOfElements = useSelector<IState, number>(
    (state) => state.products.totalOfElements || 0,
  )

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

  const [isFilterOpen, setIisFilterOpen] = useState(false)

  function handleOpenFilterDrawer() {
    setIisFilterOpen(true)
  }

  function handleCloseFilterDrawer() {
    setIisFilterOpen(false)
  }

  useEffect(() => {
    dispatch(
      fetchProducts({
        page,
        perPage,
        priceFrom,
        priceTo,
        type,
        sort: sortBy,
        isNew,
        isOnSales,
      }),
    )
  }, [
    dispatch,
    perPage,
    priceFrom,
    priceTo,
    sortBy,
    type,
    isNew,
    isOnSales,
    page,
  ])

  return {
    numbeOfElements,
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
