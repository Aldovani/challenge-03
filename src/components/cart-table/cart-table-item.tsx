import { ICONS } from '../../assets/icons'
import { Quantity } from './quantity'

export function CartTableItem() {
  return (
    <tr>
      <td className="pt-14">
        <img
          src="/image 1.png"
          alt=""
          className="w-28 h-28 rounded-[0.625rem] max-w-none"
        />
      </td>
      <td className="px-4 pt-14 text-gray-200">Asgaard sofa</td>
      <td className="px-4 pt-14 text-gray-200">Rs. 250,000.00</td>
      <td className="px-4 pt-14">
        <Quantity />
      </td>
      <td className="px-4 pt-14">Rs. 250,000.00</td>
      <td className="px-4 pt-14">
        <img
          src={ICONS['delete-filled']}
          alt="delete-filled icon"
          className="w-7 h-7 "
        />
      </td>
    </tr>
  )
}
