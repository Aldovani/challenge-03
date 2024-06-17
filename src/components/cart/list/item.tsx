import { useDispatch } from 'react-redux'
import { ICONS } from '../../../assets/icons'
import { deleteProductToCart } from '../../../stores/modules/cart/actions'
import { FormateMoney } from '../../../utils/formate-money'
import { IProduct } from '../../../stores/modules/cart/types'

type CartListItemProps = {
  product: IProduct
  quantity: number
}

export function CartListItem({ product, quantity }: CartListItemProps) {
  const subTotal = (product.price * quantity).toFixed(2)
  const handleDeleteProductToCart = useDispatch()

  return (
    <li className="flex items-center ">
      <div>
        <img
          className="size-[105px] rounded-[0.625rem]"
          src={product.imgUrl}
          alt={product.name}
        />
      </div>
      <div className="ml-8 ">
        <span>Asgaard sofa</span>
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
        onClick={() =>
          handleDeleteProductToCart(deleteProductToCart(product.id))
        }
      >
        <img src={ICONS['remove-item']} alt="remove-item icon" />
      </button>
    </li>
  )
}
