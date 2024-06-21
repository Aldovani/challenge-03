import { Reducer } from 'redux'
import { IProductActions } from './actions'

import { ActionTypes, IProductState } from './types'

const INITIAL_STATE: IProductState = {
  items: [],
  totalOfElements: null,
  loading: false,
  first: 1,
  last: null,
  next: null,
  pages: null,
  prev: null,
  error: null,
}

export const products: Reducer<IProductState, IProductActions> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case ActionTypes.fetchDataRequest: {
      return {
        ...state,
        loading: true,
        error: null,
        items: [],
      }
    }

    case ActionTypes.fetchDataFailure:
      return {
        ...state,
        items: [],
        loading: false,
        error: null,
      }

    case ActionTypes.fetchDataSuccess:
      return {
        ...state,
        error: null,
        loading: false,
        first: action.payload.first,
        last: action.payload.last,
        next: action.payload.next,
        pages: action.payload.pages,
        prev: action.payload.prev,
        totalOfElements: action.payload.items,
        items: [...action.payload.products],
      }

    default:
      return state
  }
}
