import { ICONS } from '../../assets/icons'
import { IProduct } from '../../stores/modules/cart/types'
import { FormateMoney } from '../../utils/formate-money'
import { Quantity } from './quantity'
import { useAppDispatch } from '../../stores'
import { deleteProduct } from '../../stores/modules/cart'

type CartTableItemProps = {
  product: IProduct
  quantity: number
}

export function CartTableItem({ product, quantity }: CartTableItemProps) {
  const dispatch = useAppDispatch()
  const subTotal = product.price * quantity

  return (
    <tr>
      <td className="pt-14">
        <img
          src={product.imgUrl}
          alt={product.name}
          className="w-28 h-28 rounded-[0.625rem] max-w-none"
        />
      </td>
      <td className="px-4 pt-14 text-gray-200">{product.name}</td>
      <td className="px-4 pt-14 text-gray-200">
        {FormateMoney(product.price)}
      </td>
      <td className="px-4 pt-14">
        <Quantity product={product} />
      </td>
      <td className="px-4 pt-14">{FormateMoney(subTotal)}</td>
      <td className="px-4 pt-14">
        <button
          onClick={() => dispatch(deleteProduct({ productId: product.id }))}
        >
          <img
            src={ICONS['delete-filled']}
            alt="delete-filled icon"
            className="w-7 h-7 "
          />
        </button>
      </td>
    </tr>
  )
}
