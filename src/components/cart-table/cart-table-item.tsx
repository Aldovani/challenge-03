import { Quantity } from './quantity'

export function CartTableItem() {
  return (
    <tr>
      <td className="pt-14">
        <img
          src="/image 1.png"
          alt=""
          className="w-28 h-28 rounded-[0.625rem]"
        />
      </td>
      <td className=" pt-14 text-gray-200">Asgaard sofa</td>
      <td className="pt-14 text-gray-200">Rs. 250,000.00</td>
      <td className="pt-14">
        <Quantity />
      </td>
      <td className="pt-14">Rs. 250,000.00</td>
      <td className="pt-14">
        <img src="/delete-filled.svg" alt="" className="w-7 h-7 " />
      </td>
    </tr>
  )
}
