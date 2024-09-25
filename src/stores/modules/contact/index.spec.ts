import { describe, expect, it } from 'vitest'
import { contact as reducer, contactSlice, saveContact } from './index'

describe.only('Cart', () => {
  describe('add product', () => {
    it('should be abe to save a contact', () => {
      const initialState = contactSlice.getInitialState()

      const contact = {
        email: 'aldovanihcosta@gmail.com',
        message: 'Hello',
        name: 'Aldovani',
      }

      const state = reducer(initialState, saveContact(contact))

      expect(state.contacts).toHaveLength(1)
      expect(state.contacts[0]).toEqual(expect.objectContaining(contact))
    })
  })
})
