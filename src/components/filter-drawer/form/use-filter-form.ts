import { useState } from 'react'
import { useFilter } from '../../../hooks/use-filter'

type useFilterFormProps = {
  handleClose: () => void
}

export function useFilterForm({ handleClose }: useFilterFormProps) {
  const {
    setSearchParams,
    type: _type,
    isNew: _isNew,
    isOnSales: _isOnSales,
    priceFrom: _priceFrom,
    priceTo: _priceTo,
  } = useFilter()

  const [type, setType] = useState(_type)
  const [isNewOrOnSales, setIsNewOrOnSales] = useState(() => {
    if (_isNew) return 'isNew'
    if (_isOnSales) return 'isOnSales'

    return ''
  })

  const [priceFrom, setPriceFrom] = useState(_priceFrom)
  const [priceTo, setPriceTo] = useState(_priceTo)

  function handleFilterProducts() {
    setSearchParams((state) => {
      if (type) {
        state.set('category', type)
      } else {
        state.delete('category')
      }

      if (priceFrom) {
        state.set('priceFrom', priceFrom.toString())
      } else {
        state.delete('priceFrom')
      }

      if (priceTo) {
        state.set('priceTo', priceTo.toString())
      } else {
        state.delete('priceTo')
      }

      if (isNewOrOnSales === 'isNew' || state.get('isNew')) {
        state.set('isNew', 'true')
        state.delete('isOnSales')
      } else {
        state.delete('isNew')
      }

      if (isNewOrOnSales === 'isOnSales' || state.get('isOnSales')) {
        state.set('isOnSales', 'true')
        state.delete('isNew')
      } else {
        state.delete('isOnSales')
      }

      return state
    })
    handleClose()
  }

  function resetFilter() {
    setPriceTo(0)
    setPriceFrom(0)
    setType('')
    setIsNewOrOnSales('')

    setSearchParams((state) => {
      state.delete('category')
      state.delete('priceFrom')
      state.delete('priceTo')
      state.delete('isNew')
      state.delete('isOnSales')
      return state
    })
    handleClose()
  }

  function handleChangeIsNewOrIsOnSales(value: string) {
    setIsNewOrOnSales(value)
  }

  function handleChangeType(value: string) {
    setType(value)
  }

  function handleChangePriceFom(value: number) {
    setPriceFrom(value)
  }

  function handleChangePriceTo(value: number) {
    setPriceTo(value)
  }

  return {
    handleChangePriceTo,
    handleChangePriceFom,
    handleFilterProducts,
    handleChangeType,
    type,
    priceFrom,
    priceTo,
    resetFilter,
    handleChangeIsNewOrIsOnSales,
    isNewOrOnSales,
  }
}
