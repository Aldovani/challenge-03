import { Banner } from '../components/banner'
import { Benefits } from '../components/benefits'
import { CartTable } from '../components/cart-table'

import { Link } from 'react-router-dom'
import { useAppSelector } from '../stores'
import { FormateMoney } from '../utils/formate-money'
import { CalcTotal } from '../utils/calc-total'
export function CartPage() {
  const products = useAppSelector((state) => state.cart.items)

  const { total } = CalcTotal(products)

  return (
    <main className=" w-full   pt-[6.25rem] ">
      <Banner page="Cart" />
      <div className="relative mt-[4.5rem] container mx-auto pt-24 pb-16 max-sm:px-6 grid  lg:grid-cols-[1fr_24.5625rem] gap-16 ">
        <div className="pb-6  w-full overflow-x-auto">
          <CartTable />
        </div>
        <div className="sticky   top-[100px] left-0 h-fit flex  flex-col items-center  pt-4 pb-20 bg-primary-200">
          <h3 className="text-[2rem] font-semibold">Cart Totals</h3>

          <div className="w-full mt-16 px-16 flex justify-between">
            <span className="font-medium">Subtotal</span>
            <span className="text-gray-200  ">${FormateMoney(total)}</span>
          </div>
          <div className="px-16 mt-8 w-full flex justify-between">
            <span className="font-medium">Total</span>
            <span className="text-primary-500 text-xl">
              {FormateMoney(total)}
            </span>
          </div>

          <Link
            to="/check-out"
            className="hover:bg-primary-500 hover:border-primary-500 transition-all hover:text-white mt-11 py-3 px-14 border border-gray-200 rounded-[0.625rem]"
          >
            Check Out
          </Link>
        </div>
      </div>

      <Benefits />
    </main>
  )
}
