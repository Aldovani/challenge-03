import { Products } from '../../../services/api/products'
import { fetchDataFailure, fetchDataRequest, fetchDataSuccess } from './actions'
import { Dispatch } from 'redux'

type FetchProductsProps = {
  perPage?: number
  page?: number
  sort?: string
  priceFrom?: number | string
  priceTo?: number | string
  type?: string
  isNew?: string
  isOnSales?: string
}

export const fetchProducts = ({
  page,
  perPage,
  sort,
  priceFrom,
  priceTo,
  type,
  isNew,
  isOnSales,
}: FetchProductsProps) => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchDataRequest())
    try {
      const data = await Products.FindProducts({
        page,
        perPage,
        sort,
        priceFrom,
        priceTo,
        type,
        isNew,
        isOnSales,
      })
      dispatch(fetchDataSuccess(data))
    } catch (error) {
      dispatch(fetchDataFailure(!!error))
    }
  }
}

export type FetchProducts = typeof fetchProducts
