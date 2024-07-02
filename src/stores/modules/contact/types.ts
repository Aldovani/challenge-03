export interface IContact {
  name: string
  email: string
  subject?: string
  message: string
}

export interface IContactState {
  contacts: IContact[]
}
