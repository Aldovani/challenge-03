import { useDispatch } from 'react-redux'
import {
  addProductToCart,
  removeProductToCart,
} from '../../stores/modules/cart/actions'
import { IProduct } from '../../stores/modules/cart/types'

type QuantityProps = {
  quantity: number
  product: IProduct
}

export function Quantity({ product, quantity }: QuantityProps) {
  const dispatch = useDispatch()

  return (
    <div className="w-fit flex items-center  gap-6  border border-gray-200 rounded-[10px]">
      <button
        onClick={() => dispatch(removeProductToCart(product.id))}
        className="py-4 px-3 hover:bg-primary-100 rounded-l-[10px]"
      >
        -
      </button>
      <span>{quantity}</span>
      <button
        onClick={() => dispatch(addProductToCart(product))}
        className="p-4 hover:bg-primary-100 rounded-r-[10px]"
      >
        +
      </button>
    </div>
  )
}
