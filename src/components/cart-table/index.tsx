import { CartTableItem } from './cart-table-item'

export function CartTable() {
  return (
    <table className="w-full">
      <thead className="bg-primary-100 ">
        <tr>
          <th></th>
          <th className="py-4 text-start font-medium">Product</th>
          <th className="py-4 text-start font-medium">Price</th>
          <th className="py-4 text-start font-medium">Quantity</th>
          <th className="py-4 text-start font-medium">Subtotal</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <CartTableItem />
        <CartTableItem />
        <CartTableItem />
        <CartTableItem />
        <CartTableItem />
        <CartTableItem />
      </tbody>
    </table>
  )
}
