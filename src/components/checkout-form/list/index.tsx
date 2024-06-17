import { ICartItem } from '../../../stores/modules/cart/types'
import { FormateMoney } from '../../../utils/formate-money'

type CheckoutListProps = {
  products: ICartItem[]
}
export function CheckoutList({ products }: CheckoutListProps) {
  return (
    <ul className="flex flex-col gap-1 mt-4">
      {products.map((item) => (
        <li key={item.product.id} className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <span className="text-gray-200">{item.product.name}</span>
            <span className="text-xs">x {item.quantity}</span>
          </div>
          <span className="font-light">
            {FormateMoney(item.quantity * item.product.price)}
          </span>
        </li>
      ))}
    </ul>
  )
}
