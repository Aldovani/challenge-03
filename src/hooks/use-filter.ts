import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { AppDispatch } from '../stores'
import { fetchProducts } from '../stores/modules/products/fetchProducts'

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
  const dispatch = useDispatch<AppDispatch>()

  function handleChangePerPage(value: number) {
    dispatch(fetchProducts({ page: 1, perPage: value, sort: sortBy }))

    setSearchParams((state) => {
      state.set('perPage', value.toString())
      state.set('page', '1')
      return state
    })
  }

  function handleChangeSortBy(sortBy: string) {
    dispatch(
      fetchProducts({
        page: 1,
        perPage,
        sort: sortBy,
        type,
        isNew,
        isOnSales,
        priceFrom,
        priceTo,
      }),
    )
    setSearchParams((state) => {
      state.set('sortBy', sortBy)
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
    handleChangeSortBy,
    handleChangePerPage,
  }
}
