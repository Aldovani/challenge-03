import { useSelector } from 'react-redux'
import { IState } from '../../../stores'
import { CartListItem } from './item'
import { ICartItem } from '../../../stores/modules/cart/types'

export function CartList() {
  const products = useSelector<IState, ICartItem[]>((state) => state.cart.items)

  return (
    <ul className="pr-10 pl-8 mt-10 flex flex-col gap-5 max-h-full overflow-y-auto ">
      {products?.map((item) => (
        <CartListItem
          product={item.product}
          quantity={item.quantity}
          key={item.product.id}
        />
      ))}
    </ul>
  )
}
