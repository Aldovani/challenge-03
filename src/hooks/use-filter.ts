import { useSearchParams } from 'react-router-dom'
import { useAppDispatch } from '../stores'

export function useFilter() {
  const [searchParams, setSearchParams] = useSearchParams()

  const perPage = Number(searchParams.get('perPage')) || 16
  const page = Number(searchParams.get('page')) || 1
  const sortBy = searchParams.get('sortBy') || ''
  const type = searchParams.get('category') || ''
  const priceFrom = Number(searchParams.get('priceFrom')) || ''
  const priceTo = Number(searchParams.get('priceTo')) || ''
  const isNew = searchParams.get('isNew') || ''
  const isOnSales = searchParams.get('isOnSales') || ''
  const dispatch = useAppDispatch()

  function handleChangePerPage(value: number) {
    setSearchParams((state) => {
      state.set('perPage', value.toString())
      state.set('page', '1')
      return state
    })
  }
  function handleChangeSortBy(value: string) {
    setSearchParams((state) => {
      state.set('sortBy', value.toString())
      state.set('page', '1')
      return state
    })
  }

  return {
    dispatch,
    perPage,
    page,
    sortBy,
    type,
    priceFrom,
    priceTo,
    isNew,
    isOnSales,
    setSearchParams,
    handleChangePerPage,
    handleChangeSortBy,
  }
}
