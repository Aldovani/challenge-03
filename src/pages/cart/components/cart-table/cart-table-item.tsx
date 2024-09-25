import { useAppDispatch } from '@/stores'
import { IProduct } from '@/stores/modules/cart/types'
import { FormateMoney } from '@/utils/formate-money'
import { Quantity } from '@/components/ui/quantity'
import { deleteProduct } from '@/stores/modules/cart'
import { Heart, Trash } from 'lucide-react'

type CartTableItemProps = {
  product: IProduct
  quantity: number
}

export function CartTableItem({ product, quantity }: CartTableItemProps) {
  const dispatch = useAppDispatch()
  const subTotal = product.discount
    ? (product.price - product.price * (product.discount / 100)) * quantity
    : product.price * quantity
  return (
    <tr className="max-lg:flex max-lg:flex-col max-lg:gap-6 max-lg:py-5 max-lg:border-b max-lg:border-zinc-200">
      <td className="lg:pt-14 ">
        <div className="flex gap-4 max-sm:flex max-sm:flex-col">
          <img
            src={product.imgUrl}
            alt={product.name}
            className="w-28 h-28  max-w-none"
          />
          <div>
            <h3 className="text-2xl lg:max-w-48">{product.name}</h3>
            <div className="flex gap-4">
              <div className="lg:mt-4 mt-2 text-zinc-400">
                <span> color:</span>
                <span> {product.color}</span>
              </div>
              {product.size && (
                <div className="lg:mt-4 mt-2 text-zinc-400">
                  <span> Size:</span>
                  <span> {product.size}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </td>
      <td className="lg:px-4 lg:pt-14 text-zinc-400">
        {FormateMoney(product.price)}
      </td>
      <td className="lg:px-4 lg:pt-14">
        <Quantity product={product} />
      </td>

      <td className="lg:px-4 lg:pt-14 text-zinc-900">
        {FormateMoney(subTotal)}
      </td>
      <td className="lg:pt-14">
        <button
          onClick={() => dispatch(deleteProduct(product))}
          className="bg-white p-4 transition-colors hover:bg-zinc-100 text-zinc-400 hover:text-zinc-900"
        >
          <Trash />
        </button>
        <button className="bg-white p-4 transition-colors hover:bg-zinc-100 text-zinc-400 hover:text-zinc-900">
          <Heart />
        </button>
      </td>
    </tr>
  )
}
