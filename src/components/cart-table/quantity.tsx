import { useDispatch, useSelector } from 'react-redux'
import {
  addProductToCart,
  removeProductToCart,
} from '../../stores/modules/cart/actions'
import { IProduct } from '../../stores/modules/cart/types'
import { IState } from '../../stores'
import { tv } from 'tailwind-variants'

type QuantityProps = {
  product: IProduct
  className?: string
}

const quantity = tv({
  base: 'w-fit flex items-center  gap-6  border border-gray-200 rounded-[10px]',
})

export function Quantity({ product, className }: QuantityProps) {
  const dispatch = useDispatch()
  const productsQuantity = useSelector<IState, number>(
    (state) =>
      state.cart.items.find((e) => e.product.id === product.id)?.quantity || 0,
  )

  return (
    <div className={quantity({ className })}>
      <button
        onClick={() => dispatch(removeProductToCart(product.id))}
        className="py-4 px-3 hover:bg-primary-100 rounded-l-[10px]"
      >
        -
      </button>
      <span>{productsQuantity}</span>
      <button
        onClick={() => dispatch(addProductToCart(product))}
        className="p-4 hover:bg-primary-100 rounded-r-[10px]"
      >
        +
      </button>
    </div>
  )
}
