import { CartList } from './list'
import { CartFooter } from './footer'
import { useCart } from './use-cart'
import { MenuCartButton } from './button-menu-cart'
import { X } from 'lucide-react'
import { useAppSelector } from '@/stores'
import { Link } from '../../../Link'

export function Cart() {
  const {
    handleClose,
    isClosing,
    containerRef,
    handleOpenCart,
    isOpen,
    isOpening,
  } = useCart()

  const totalOfProducts = useAppSelector((state) => state.cart.items.length)

  return (
    <>
      <MenuCartButton onOpenCart={handleOpenCart} />

      <div
        data-open={isOpen}
        data-opening={isOpening}
        ref={containerRef}
        id="container-cart"
        className="data-[open=true]:pointer-events-auto pointer-events-none     duration-200 fixed  grid-cols-1 grid  md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_fit-content(40%)] w-full h-screen data-[open=true]:bg-black data-[open=true]:bg-opacity-20 z-[100] inset-0"
      >
        <div
          id="overlay"
          data-open={isOpen}
          className="max-sm:hidden"
          onClick={() => handleClose()}
        ></div>
        <div
          data-testid="card"
          data-open={isOpen}
          data-close={isClosing}
          data-opening={isOpening}
          className="data-[opening=true]:animate-open-cart max-h-screen data-[open=true]:opacity-100 data-[open=true]:translate-x-0 data-[close=true]:animate-close-cart bg-white h-full  grid grid-rows-[64px_1fr_168px] translate-x-full max-md:pb-12 "
        >
          <div>
            <header className=" px-8 pt-7 ">
              <div className="border-b border-zinc-200 flex pb-4  items-center justify-between ">
                <div className="flex gap-1 items-center">
                  <button
                    onClick={handleClose}
                    className="p-1 transition-colors text-zinc-400 hover:text-zinc-900 bg-white hover:bg-zinc-50"
                  >
                    <X />
                  </button>
                  <h2 className="text-zinc-600 font-semibold text-lg sm:text-2xl">
                    Shopping Cart
                  </h2>
                </div>
                <span className="sm:text-sm text-xs text-zinc-400 font-semibold">
                  ( {totalOfProducts.toString().padStart(2, '0')} items )
                </span>
              </div>
            </header>
          </div>

          {totalOfProducts > 0 && <CartList />}
          {totalOfProducts === 0 && (
            <section className="flex justify-center items-center flex-col py-16 px-8">
              <h3 className="lg:text-4xl text-2xl font-manrope text-zinc-900">
                Your cart is empty!
              </h3>
              <p className="text-zinc-400 mt-2 text-sm  text-center">
                Looks like you haven’t added anything to your cart yet.
              </p>
              <Link
                onClick={() => {
                  handleClose()
                }}
                to="/shop"
                className="mt-4"
              >
                Shop
              </Link>
            </section>
          )}

          <CartFooter onCloseCart={handleClose} />
        </div>
      </div>
    </>
  )
}
