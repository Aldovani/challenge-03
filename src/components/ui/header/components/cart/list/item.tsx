import { Heart, Trash } from 'lucide-react'
import { IProduct } from '../../../../../../stores/modules/cart/types'
import { Quantity } from '@components/ui/quantity'
import { FormateMoney } from '@/utils/formate-money'
import { useAppDispatch } from '@/stores'
import { deleteProduct } from '@/stores/modules/cart'

type CartListItemProps = {
  product: IProduct
  quantity: number
}

export function CartListItem({ product, quantity }: CartListItemProps) {
  const subTotal =
    product.discount === 0
      ? Number((product.price * quantity).toFixed(2))
      : Number(
          (
            (product.price - product.price * (product.discount / 100)) *
            quantity
          ).toFixed(2),
        )
  const dispatch = useAppDispatch()

  return (
    <li className="flex gap-4 border-b border-zinc-200 pb-4 max-md:flex-col">
      <img
        className="sm:size-[80px] size-[80px] "
        src={product.imgUrl}
        alt={product.name}
      />
      <div className="w-full  ">
        <div className="flex justify-between flex-col">
          <span className="text-zinc-900 font-semibold text-xl">
            {product.name}
          </span>
          <div className="flex gap-4 mt-2">
            <div>
              <span className="text-zinc-400 font-medium">color: </span>
              <span className="text-zinc-600 font-medium">{product.color}</span>
            </div>
            {product.size && (
              <div>
                <span className="text-zinc-400 font-medium">Size: </span>
                <span className="text-zinc-600 font-medium">
                  {product.size}
                </span>
              </div>
            )}
          </div>

          <div className="flex  md:items-end mt-2  justify-between max-sm:flex-col-reverse  max-sm:gap-4">
            <Quantity product={product} sizes="small" />

            <div className="flex flex-col md:items-end">
              <span className="text-sm line-through  text-zinc-400 px-1.5 py-0.5">
                {FormateMoney(product.price)}
              </span>
              <span className="text-zinc-900 font-semibold text-xl">
                {FormateMoney(subTotal)}
              </span>
            </div>
          </div>
        </div>

        <footer className="flex justify-end gap-2 mt-4">
          <button
            onClick={() => dispatch(deleteProduct(product))}
            className="p-2 transition-colors bg-white hover:text-zinc-900  hover:bg-zinc-50 text-zinc-400"
          >
            <Trash size={18} />
          </button>
          <button className="text-zinc-400 transition-colors hover:text-zinc-900 p-2 bg-white hover:bg-zinc-50">
            <Heart size={18} />
          </button>
        </footer>
      </div>
    </li>
  )
}
