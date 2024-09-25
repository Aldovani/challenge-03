import { ICartItem } from '@/stores/modules/cart/types'
import { FormateMoney } from '@/utils/formate-money'

type CheckoutListProps = {
  products: ICartItem[]
}
export function CheckoutList({ products }: CheckoutListProps) {
  return (
    <ul className="flex flex-col gap-4 mt-4">
      {products.map((item) => (
        <li
          key={item.product.id}
          className="flex justify-between items-center "
        >
          <div className="flex justify-between text-zinc-400 gap-3 font-medium items-center max-w-[200px] w-full">
            <span className="max-w-[150px] w-full truncate ">
              {item.product.name}
            </span>
            <span>x</span>
            <span className=" text-zinc-900"> {item.quantity}</span>
          </div>
          <span className="font-semibold text-zinc-400">
            {FormateMoney(item.quantity * item.product.price)}
          </span>
        </li>
      ))}
    </ul>
  )
}
