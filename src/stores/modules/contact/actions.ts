import { ActionTypes, IContact } from './types'

export function saveContact(contact: IContact) {
  return {
    type: ActionTypes.saveContact as const,
    payload: {
      contact,
    },
  }
}

type SaveContactAction = ReturnType<typeof saveContact>

export type IContactActions = SaveContactAction
