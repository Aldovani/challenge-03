import { Link } from 'react-router-dom'
import { FormateMoney } from '../../../utils/formate-money'
import { CalcTotal } from '../../../utils/calc-total'
import { useAppSelector } from '../../../stores'

type CartFooterProps = {
  onCloseCart: () => void
}

export function CartFooter({ onCloseCart }: CartFooterProps) {
  const products = useAppSelector((state) => state.cart.items)

  const { total } = CalcTotal(products)

  return (
    <footer className="pb-8">
      <div className="flex pl-8 gap-20 mt-10 ">
        <span>Subtotal</span>
        <h4 className="font-semibold text-primary-500">
          {FormateMoney(Number(total))}
        </h4>
      </div>
      <div className="border-t border-[#d9d9d9] px-4 flex justify-between items-center mt-6 pt-6">
        <Link
          onClick={onCloseCart}
          to="/cart"
          className="px-4 text-xs border py-2 rounded-[50px] sm:px-[30px] hover:bg-primary-500 hover:text-white hover:border-primary-500 "
        >
          Cart
        </Link>
        <Link
          onClick={onCloseCart}
          to="/check-out"
          data-disable={total === 0}
          className="px-4 data-[disable='true']:opacity-50 data-[disable='true']:pointer-events-none   text-xs border py-2 rounded-[50px] sm:px-[30px] hover:bg-primary-500 hover:text-white hover:border-primary-500"
        >
          Checkout
        </Link>
        <Link
          onClick={onCloseCart}
          to="/comparison"
          className="px-4 text-xs border py-2 rounded-[50px] sm:px-[30px] hover:bg-primary-500 hover:text-white hover:border-primary-500"
        >
          Comparison
        </Link>
      </div>
    </footer>
  )
}
