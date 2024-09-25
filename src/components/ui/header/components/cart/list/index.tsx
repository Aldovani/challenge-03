import { useAppSelector } from '../../../../../../stores'
import { CartListItem } from './item'

export function CartList() {
  const products = useAppSelector((state) => state.cart.items)

  return (
    <ul className=" pr-10 pl-8 mt-10 flex flex-col gap-6  overflow-y-auto ">
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
