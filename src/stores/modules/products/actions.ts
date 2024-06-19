import { ActionTypes, fetchDataSuccessProps } from './types'

export const fetchDataRequest = () => ({
  type: ActionTypes.fetchDataRequest as const,
})

export const fetchDataSuccess = (data: fetchDataSuccessProps) => ({
  type: ActionTypes.fetchDataSuccess as const,
  payload: data,
})

export const fetchDataFailure = (error: boolean) => ({
  type: ActionTypes.fetchDataFailure as const,
  payload: error,
})

type FetchDataRequestAction = ReturnType<typeof fetchDataRequest>
type FetchDataSuccessAction = ReturnType<typeof fetchDataSuccess>
type FetchDataFailureAction = ReturnType<typeof fetchDataFailure>

export type IProductActions =
  | FetchDataRequestAction
  | FetchDataSuccessAction
  | FetchDataFailureAction
