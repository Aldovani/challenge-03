import { Reducer } from 'redux'
import { ActionTypes, IContactState } from './types'
import { IContactActions } from './actions'

const INITIAL_STATE: IContactState = {
  contact: undefined,
}

export const contact: Reducer<IContactState, IContactActions> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case ActionTypes.saveContact: {
      if (action.payload.contact) {
        return { contact: action.payload.contact }
      }

      return { ...state }
    }

    default: {
      return state
    }
  }
}
