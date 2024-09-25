import { useCallback, useEffect, useState } from 'react'
import { useFilter } from '@/hooks/use-filter'

export function useFilterForm() {
  const {
    setSearchParams,
    type: _type,
    isNew: _isNew,
    isOnSales: _isOnSales,
    price: _price,
  } = useFilter()

  const [type, setType] = useState(_type)
  const [isNewOrOnSales, setIsNewOrOnSales] = useState(() => {
    if (_isNew) return 'isNew'
    if (_isOnSales) return 'isOnSales'

    return ''
  })

  const [price, setPrice] = useState(_price)

  const handleFilterProducts = useCallback(() => {
    setSearchParams((state) => {
      if (type) {
        state.set('category', type)
      } else {
        state.delete('category')
      }

      if (price) {
        state.set('priceTo', price[1].toString())
        state.set('priceFrom', price[0].toString())
      } else {
        state.delete('priceFrom')
        state.delete('priceTo')
      }

      if (isNewOrOnSales === 'isNew' || state.get('isNew')) {
        state.set('isNew', 'true')
        state.delete('isOnSales')
      } else {
        state.delete('isNew')
      }

      if (isNewOrOnSales === 'isOnSales' || state.get('isOnSales')) {
        state.set('isOnSales', '1')
        state.delete('isNew')
      } else {
        state.delete('isOnSales')
      }

      return state
    })
  }, [isNewOrOnSales, price, setSearchParams, type])

  function resetFilter() {
    setPrice([0, 10000])
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
  }

  function handleChangeIsNewOrIsOnSales(value: string) {
    setIsNewOrOnSales(value)
  }

  function handleChangeType(value: string) {
    setType(value)
  }

  function handleChangePrice(value: number[]) {
    setPrice(value)
  }

  useEffect(() => {
    handleFilterProducts()
  }, [handleFilterProducts])

  return {
    handleChangePrice,
    handleFilterProducts,
    handleChangeType,
    type,
    price,
    resetFilter,
    handleChangeIsNewOrIsOnSales,
    isNewOrOnSales,
  }
}
