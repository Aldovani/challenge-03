export function CartList() {
  return (
    <ul className="pr-10 pl-8 mt-10 ">
      <li className="flex items-center ">
        <div>
          <img
            className="size-[105px] rounded-[0.625rem]"
            src="/sofa-1.png"
            alt=""
          />
        </div>
        <div className="ml-8 ">
          <span>Asgaard sofa</span>
          <div className="flex gap-4 items-center mt-3">
            <span>1</span>
            <span>x</span>
            <span className="text-primary-500 text-xs font-medium">
              Rs. 250,000.00
            </span>
          </div>
        </div>
        <button className="ml-auto hover:opacity-50">
          <img src="/remove-item.svg" alt="" />
        </button>
      </li>
    </ul>
  )
}
