import { useSelector } from 'react-redux'
import { CartTableItem } from './cart-table-item'
import { IState } from '../../stores'
import { ICartItem } from '../../stores/modules/cart/types'

export function CartTable() {
  const products = useSelector<IState, ICartItem[]>((state) => state.cart.items)

  return (
    <table className="w-full">
      <thead className="bg-primary-100 ">
        <tr>
          <th></th>
          <th className="p-4 text-start font-medium">Product</th>
          <th className="p-4 text-start font-medium">Price</th>
          <th className="p-4 text-start font-medium">Quantity</th>
          <th className="p-4 text-start font-medium">Subtotal</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {products?.map((item) => (
          <CartTableItem
            product={item.product}
            quantity={item.quantity}
            key={item.product.id}
          />
        ))}
      </tbody>
    </table>
  )
}
