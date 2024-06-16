import { Link } from 'react-router-dom'

type CartFooterProps = {
  onCloseCart: () => void
}

export function CartFooter({ onCloseCart }: CartFooterProps) {
  return (
    <footer className="pb-8">
      <div className="flex pl-8 gap-20 mt-10 ">
        <span>Subtotal</span>
        <h4 className="font-semibold text-primary-500">Rs. 520,000.00</h4>
      </div>
      <div className="border-t border-[#d9d9d9] px-4 flex justify-between items-center mt-6 pt-6">
        <Link
          onClick={onCloseCart}
          to="/cart"
          className="text-xs border py-2 rounded-[50px] px-[30px] hover:bg-primary-500 hover:text-white hover:border-primary-500 "
        >
          Cart
        </Link>
        <Link
          onClick={onCloseCart}
          to="/check-out"
          className="text-xs border py-2 rounded-[50px] px-[30px] hover:bg-primary-500 hover:text-white hover:border-primary-500"
        >
          Checkout
        </Link>
        <Link
          onClick={onCloseCart}
          to="/comparison"
          className="text-xs border py-2 rounded-[50px] px-[30px] hover:bg-primary-500 hover:text-white hover:border-primary-500"
        >
          Comparison
        </Link>
      </div>
    </footer>
  )
}
