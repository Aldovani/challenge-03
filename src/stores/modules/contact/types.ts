export enum ActionTypes {
  saveContact = 'SAVE_CONTACT',
}

export interface IContact {
  name: string
  email: string
  subject?: string
  message: string
}

export interface IContactState {
  contact: IContact | undefined
}
