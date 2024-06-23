import { CartList } from './list'
import { CartFooter } from './footer'
import { ReactPortal } from '../react-portal'
import { useCart } from './use-cart'
import { ICONS } from '../../assets/icons'

type CartProps = {
  isOpen: boolean
  isOpening: boolean
  onClose: () => void
}

export function Cart({ isOpen, isOpening, onClose }: CartProps) {
  const { handleClose, isClosing, containerRef } = useCart({
    onClose,
  })

  return (
    <ReactPortal containerId="cart-container">
      {isOpen && (
        <div
          data-open={isOpening}
          className="data-[open='true']:scale-x-100 data-[open='true']:translate-x-0  duration-200 fixed  grid-cols-1 grid sm:grid-cols-[1fr_417px] w-full h-full bg-black bg-opacity-20 z-[100] inset-0"
        >
          <div
            id="overlay"
            className="max-sm:hidden"
            onClick={() => handleClose()}
          ></div>
          <div
            data-testid="card"
            data-open={isOpening}
            data-close={isClosing}
            ref={containerRef}
            className="data-[close='true']:animate-close-cart bg-white h-full max-h-screen grid grid-rows-[64px_1fr_168px] translate-x-full animate-open-cart"
          >
            <div>
              <header className="flex items-center justify-between pr-10 pt-7 pl-8">
                <h2 className="font-semibold text-2xl">Shopping Cart</h2>
                <button onClick={handleClose}>
                  <img src={ICONS['close-cart']} alt="close cart icon" />
                </button>
              </header>
              <div className="px-16 pl-8 pr-[100px] mt-6">
                <div className=" h-[1px] bg-[#d4d4d4]  " />
              </div>
            </div>

            <CartList />

            <CartFooter onCloseCart={handleClose} />
          </div>
        </div>
      )}
    </ReactPortal>
  )
}
