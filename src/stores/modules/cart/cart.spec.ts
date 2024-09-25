import { describe, expect, it } from 'vitest'
import {
  cart as reducer,
  cartSlice,
  addProduct,
  removeProduct,
  clearCart,
  deleteProduct,
} from './index'

describe('Cart', () => {
  describe('add product', () => {
    it('should be abe to add a item to cart', () => {
      const initialState = cartSlice.getInitialState()

      const product = {
        color: 'red',
        discount: 0,
        id: '1',
        imgUrl: '',
        name: '',
        price: 400,
        size: 'large',
      }

      const state = reducer(initialState, addProduct(product))

      expect(state.items).toHaveLength(1)
      expect(state.items[0]).toEqual(
        expect.objectContaining({ product, quantity: 1 }),
      )
    })

    it('should be abe to add two items to cart', () => {
      const initialState = cartSlice.getInitialState()

      const product = {
        color: 'red',
        discount: 0,
        id: '1',
        imgUrl: '',
        name: '',
        price: 400,
        size: 'large',
      }

      const firstState = reducer(initialState, addProduct(product))
      const secondState = reducer(firstState, addProduct(product))

      expect(secondState.items).toHaveLength(1)
      expect(secondState.items[0]).toEqual(
        expect.objectContaining({ product, quantity: 2 }),
      )
    })

    it('should be abe to add two different items to cart', () => {
      const initialState = cartSlice.getInitialState()

      const product1 = {
        color: 'red',
        discount: 0,
        id: '1',
        imgUrl: '',
        name: '',
        price: 400,
        size: 'large',
      }
      const product2 = {
        color: 'red',
        discount: 0,
        id: '2',
        imgUrl: '',
        name: '',
        price: 400,
        size: 'large',
      }

      const firstState = reducer(initialState, addProduct(product1))
      const secondState = reducer(firstState, addProduct(product2))

      expect(secondState.items).toHaveLength(2)
      expect(secondState.items[0]).toEqual(
        expect.objectContaining({ product: product1, quantity: 1 }),
      )

      expect(secondState.items[1]).toEqual(
        expect.objectContaining({ product: product2, quantity: 1 }),
      )
    })

    it('should be abe to add two different and more one the same items to cart', () => {
      const initialState = cartSlice.getInitialState()

      const product1 = {
        color: 'red',
        discount: 0,
        id: '1',
        imgUrl: '',
        name: '',
        price: 400,
        size: 'large',
      }
      const product2 = {
        color: 'red',
        discount: 0,
        id: '2',
        imgUrl: '',
        name: '',
        price: 400,
        size: 'large',
      }

      const firstState = reducer(initialState, addProduct(product1))
      const secondState = reducer(firstState, addProduct(product2))
      const thirdState = reducer(secondState, addProduct(product2))

      expect(thirdState.items).toHaveLength(2)
      expect(thirdState.items[0]).toEqual(
        expect.objectContaining({ product: product1, quantity: 1 }),
      )

      expect(thirdState.items[1]).toEqual(
        expect.objectContaining({ product: product2, quantity: 2 }),
      )
    })
  })

  describe('Remove product', () => {
    it('should be able to remove a item from cart when only have 1', () => {
      const initialState = cartSlice.getInitialState()

      const product = {
        color: 'red',
        discount: 0,
        id: '1',
        imgUrl: '',
        name: '',
        price: 400,
        size: 'large',
      }

      const firstState = reducer(initialState, addProduct(product))
      const secondState = reducer(firstState, removeProduct(product))

      expect(secondState.items).toHaveLength(0)
    })

    it('should be able to remove a item from cart', () => {
      const initialState = cartSlice.getInitialState()

      const product = {
        color: 'red',
        discount: 0,
        id: '1',
        imgUrl: '',
        name: '',
        price: 400,
        size: 'large',
      }

      const firstState = reducer(initialState, addProduct(product))
      const secondState = reducer(firstState, addProduct(product))
      const thirdState = reducer(secondState, removeProduct(product))

      expect(thirdState.items).toHaveLength(1)
    })

    it('should not be able to remove a item not exist in the cart', () => {
      const initialState = cartSlice.getInitialState()

      const product = {
        color: 'red',
        discount: 0,
        id: '1',
        imgUrl: '',
        name: '',
        price: 400,
        size: 'large',
      }

      const fistState = reducer(initialState, addProduct(product))
      const secondState = reducer(
        fistState,
        removeProduct({ ...product, id: '2' }),
      )

      expect(secondState.items).toHaveLength(1)
    })
  })

  describe('Delete product', () => {
    it('should be able to remove  the cart a item from cart', () => {
      const initialState = cartSlice.getInitialState()

      const product = {
        color: 'red',
        discount: 0,
        id: '1',
        imgUrl: '',
        name: '',
        price: 400,
        size: 'large',
      }

      const firstState = reducer(initialState, addProduct(product))
      const secondState = reducer(firstState, addProduct(product))
      const thirdState = reducer(secondState, deleteProduct(product))

      expect(thirdState.items).toHaveLength(0)
    })
  })

  describe('Clear cart', () => {
    it('should be able to clear the cart a item from cart', () => {
      const initialState = cartSlice.getInitialState()

      const product = {
        color: 'red',
        discount: 0,
        id: '1',
        imgUrl: '',
        name: '',
        price: 400,
        size: 'large',
      }

      const firstState = reducer(initialState, addProduct(product))
      const secondState = reducer(firstState, clearCart())

      expect(secondState.items).toHaveLength(0)
    })
  })
})
