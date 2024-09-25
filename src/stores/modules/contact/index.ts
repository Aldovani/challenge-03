import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IContact, IContactState } from './types'

const INITIAL_STATE: IContactState = {
  contacts: [],
}

export const contactSlice = createSlice({
  name: 'contact',
  initialState: INITIAL_STATE,
  reducers: {
    saveContact(state, action: PayloadAction<IContact>) {
      state.contacts.push(action.payload)
    },
  },
})

export const contact = contactSlice.reducer
export const { saveContact } = contactSlice.actions
