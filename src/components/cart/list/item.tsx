import { ICONS } from '../../../assets/icons'
import { FormateMoney } from '../../../utils/formate-money'
import { IProduct } from '../../../stores/modules/cart/types'
import { useAppDispatch } from '../../../stores'
import { deleteProduct } from '../../../stores/modules/cart'

type CartListItemProps = {
  product: IProduct
  quantity: number
}

export function CartListItem({ product, quantity }: CartListItemProps) {
  const subTotal = (product.price * quantity).toFixed(2)
  const dispatch = useAppDispatch()

  return (
    <li className="flex items-center ">
      <div>
        <img
          className="sm:size-[105px] size-[64px] rounded-[0.625rem]"
          src={product.imgUrl}
          alt={product.name}
        />
      </div>
      <div className="sm:ml-8 ml-4  ">
        <span>{product.name}</span>
        <div className="flex gap-4 items-center mt-3">
          <span>{quantity}</span>
          <span>x</span>
          <span className="text-primary-500 text-xs font-medium">
            {FormateMoney(Number(subTotal))}
          </span>
        </div>
      </div>
      <button
        className="ml-auto hover:opacity-50"
        onClick={() => dispatch(deleteProduct({ productId: product.id }))}
      >
        <img src={ICONS['remove-item']} alt="remove-item icon" />
      </button>
    </li>
  )
}
