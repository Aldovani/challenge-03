import { IProduct } from '@/stores/modules/cart/types'
import { tv, VariantProps } from 'tailwind-variants'
import { useAppDispatch, useAppSelector } from '@/stores'
import { addProduct, removeProduct } from '@/stores/modules/cart'

const quantity = tv({
  base: 'w-fit flex items-center  gap-6  border border-zinc-200 ',
  variants: {
    sizes: {
      small:
        'gap-2 [&>button]:py-1 [&>button]:px-0 [&>button]:w-6 [&>span]:w-5',
      normal: '[&>button]:py-4 [&>button]:px-4 [&>button]:w-12',
    },
  },
  defaultVariants: {
    sizes: 'normal',
  },
})

type QuantityProps = {
  product: IProduct
  className?: string
} & VariantProps<typeof quantity>

export function Quantity({ product, className, sizes }: QuantityProps) {
  const dispatch = useAppDispatch()
  const productsQuantity = useAppSelector(
    (state) =>
      state.cart.items.find(
        (e) =>
          e.product.id === product.id &&
          e.product.color === product.color &&
          e.product.size === product.size,
      )?.quantity || 0,
  )

  return (
    <div className={quantity({ className, sizes })}>
      <button
        onClick={() => dispatch(removeProduct({ ...product }))}
        className=" hover:bg-zinc-100  font-semibold"
      >
        -
      </button>
      <span className="block  text-center w-10">{productsQuantity}</span>
      <button
        onClick={() => dispatch(addProduct({ ...product }))}
        className=" hover:bg-zinc-100  font-semibold"
      >
        +
      </button>
    </div>
  )
}
