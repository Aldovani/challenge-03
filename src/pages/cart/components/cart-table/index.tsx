import { CartTableItem } from './cart-table-item'
import { useAppSelector } from '@/stores'
import { Link } from '@components/ui/Link'
import { CalcTotal } from '@/utils/calc-total'
import { FormateMoney } from '@/utils/formate-money'

export function CartTable() {
  const products = useAppSelector((state) => state.cart.items)

  const totalPrice = CalcTotal(products)

  const isProductListEmpty = products.length === 0

  if (isProductListEmpty) {
    return (
      <section className="flex justify-center items-center flex-col py-16">
        <h3 className="text-4xl font-manrope text-zinc-900">
          Your cart is empty!
        </h3>
        <p className="text-zinc-400 mt-2">
          Looks like you haven’t added anything to your cart yet.
        </p>
        <Link to="/shop" className="mt-4">
          Shop
        </Link>
      </section>
    )
  }

  return (
    <>
      <table className="w-full ">
        <thead className="border-b max-lg:hidden border-zinc-200 ">
          <tr>
            <th className="p-4 text-start font-medium text-2xl text-zinc-400 uppercase">
              Product
            </th>
            <th className="p-4 text-start font-medium text-2xl text-zinc-400 uppercase">
              Price
            </th>
            <th className="p-4 text-start font-medium text-2xl text-zinc-400 uppercase">
              Quantity
            </th>
            <th className="p-4 text-start font-medium text-2xl text-zinc-400 uppercase">
              Subtotal
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products?.map((item) => (
            <CartTableItem
              product={item.product}
              quantity={item.quantity}
              key={item.product.id}
            />
          ))}
        </tbody>
      </table>

      <div className=" bg-white  py-16 mt-8      border-t border-zinc-200 bottom-0   ">
        <div className=" flex max-md:flex-col max-md:gap-4 justify-between   items-center w-full max-w-[1440px] mx-auto">
          <h3 className="text-4xl md:text-6xl lg:text-7xl uppercase font-manrope  font-medium">
            Total: {FormateMoney(totalPrice.total)}
          </h3>

          <div className="flex md:gap-8 gap-4 max-lg:flex-col">
            <Link to="/shop" variants="outline">
              Back to shopping
            </Link>
            <Link to="/check-out">Checkout</Link>
          </div>
        </div>
      </div>
    </>
  )
}
