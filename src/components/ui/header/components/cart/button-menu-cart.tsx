import { ShoppingCart } from 'lucide-react'
import { useAppSelector } from '@/stores'

type MenuCartButtonProps = {
  onOpenCart: () => void
}

export function MenuCartButton({ onOpenCart }: MenuCartButtonProps) {
  const productsLength = useAppSelector((state) => state.cart.items.length)
  return (
    <button
      onClick={onOpenCart}
      className="relative flex items-center text-zinc-400 hover:text-zinc-900 "
    >
      <ShoppingCart />

      {productsLength > 0 && (
        <span className="pointer-events-none absolute translate-x-1/2  translate-y-1/4 bg-red-500 size-4  flex items-center justify-center bottom-0 right-0 text-[12px] text-white rounded-full leading-none">
          {productsLength}
        </span>
      )}
    </button>
  )
}
