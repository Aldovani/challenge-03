import { combineReducers } from 'redux'
import { cart } from './cart/reducer'
import { products } from './products/reducer'
import { contact } from './contact/reducer'

export default combineReducers({
  cart,
  products,
  contact,
})
