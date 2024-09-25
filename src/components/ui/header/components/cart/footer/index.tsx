import { FormateMoney } from '../../../../../../utils/formate-money'
import { CalcTotal } from '../../../../../../utils/calc-total'
import { useAppSelector } from '../../../../../../stores'
import { Link } from '@/components/ui/Link'

type CartFooterProps = {
  onCloseCart: () => void
}

export function CartFooter({ onCloseCart }: CartFooterProps) {
  const products = useAppSelector((state) => state.cart.items)

  const { total } = CalcTotal(products)

  return (
    <footer className="pr-8 pt-7 pl-8 flex-col border-t  border-zinc-200  flex ">
      <div className="flex gap-2">
        <span className="text-2xl font-semibold text-zinc-900">Total: </span>
        <h4 className="font-semibold text-zinc-900 text-2xl">
          {FormateMoney(Number(total))}
        </h4>
      </div>

      <div className="flex gap-4 mt-6 max-sm:flex-col">
        <Link onClick={onCloseCart} to="/cart" variants="outline">
          Cart
        </Link>
        <Link onClick={onCloseCart} to="/check-out" data-disable={total === 0}>
          Checkout
        </Link>
      </div>
    </footer>
  )
}
