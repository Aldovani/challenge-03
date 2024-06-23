import { ICONS } from '../../assets/icons'

type MenuCartButtonProps = {
  onOpenCart: () => void
}

export function MenuCartButton({ onOpenCart }: MenuCartButtonProps) {
  // const productsLength = useSelector<IState, number>(
  //   (state) => state.cart.items.length,
  // )
  return (
    <div className="relative flex items-center">
      <button onClick={onOpenCart} className="hover:opacity-50 ">
        <img src={ICONS['shopping-cart']} alt="shopping cart icon" />
      </button>
      {/* {productsLength > 0 && (
        <span className="absolute translate-x-1/2 translate-y-1/4 bg-action-error size-5 flex items-center justify-center bottom-0 right-0 text-sm text-white rounded-full">
          {productsLength}
        </span>
      )} */}
    </div>
  )
}
