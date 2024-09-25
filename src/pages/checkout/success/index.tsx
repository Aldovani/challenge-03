import { Link as LinkReactRouter } from 'react-router-dom'
import BGCheckoutSuccess from '@/assets/checkout-success.png'
import { Link } from '../../../components/ui/Link'
import { useCheckoutSuccess } from './use-checkout-success'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { FormateMoney } from '@/utils/formate-money'
import { Logo } from '@/components/ui/logo'

export function CheckoutSuccessPage() {
  const { data, total, isLoading } = useCheckoutSuccess()

  if (isLoading) return <h1>Loading</h1>

  return (
    <div className="grid lg:grid-cols-[.5fr_1fr] overflow-y-hidden min-h-screen ">
      <div
        style={{ backgroundImage: `url(${BGCheckoutSuccess})` }}
        className="hidden lg:block h-full bg-[100%] bg-cover"
      ></div>

      <div>
        <main className="flex flex-col py-8  sm:py-10 px-8 sm:px-20">
          <LinkReactRouter to="/">
            <Logo variants="black" />
          </LinkReactRouter>

          <section className="mt-10">
            <h1 className="sm:text-64 text-4xl font-manrope font-bold  text-zinc-900">
              Your order is on its way!
            </h1>
            <p className="mt-2 text-zinc-400 max-w-96  ">
              Thank you for your purchase from our store! We are very happy to
              have you as a customer.
            </p>
          </section>

          <section className="mt-8">
            <h3 className="text-zinc-400">Details</h3>

            <ul className="flex flex-col  sm:gap-2 mt-4 max-w-[320px]">
              <li>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Order Number</span>
                  <span className="font-medium">#{data?.orderID}</span>
                </div>
              </li>
              <li>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Order Date: </span>
                  <span className="font-medium text-zinc-800">
                    {data?.orderData}
                  </span>
                </div>
              </li>
              <li>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Total Amount: </span>
                  <span className="font-medium text-zinc-800">
                    {FormateMoney(total)}
                  </span>
                </div>
              </li>
              <li>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Payment Method: </span>
                  <span className="font-medium text-zinc-800">
                    {data?.paymentMethod}
                  </span>
                </div>
              </li>
            </ul>
          </section>

          <section className="mt-8 ">
            <h3 className=" text-zinc-400 ">Products</h3>

            <div className="mt-3 w-full">
              <Splide
                options={{
                  gap: 12,
                  perMove: 1,
                  perPage: 2,
                  pagination: false,
                  breakpoints: {
                    600: { perPage: 1 },
                  },
                }}
              >
                {data?.items.map((item) => (
                  <SplideSlide key={item.product.id}>
                    <LinkReactRouter
                      to={`/shop/${item.product.id}`}
                      className="hover:brightness-75 w-full cursor-pointer bg-gray-50 relative overflow-hidden group"
                    >
                      <img
                        src={item.product.imgUrl}
                        alt={item.product.name}
                        className="w-full max-h-[300px] h-full"
                      />

                      <main className="pl-4 pr-5 pt-4 pb-8">
                        <h3 className="text-2xl font-semibold text-gray-500">
                          {item.product.name}
                        </h3>

                        <div className="mt-2 flex gap-4">
                          <strong className="text-zinc-900 text-xl font-semibold">
                            {FormateMoney(item.product.price * item.quantity)}
                          </strong>
                          <span className="text-zinc-400 text-xl font-semibold">
                            x{item.quantity}
                          </span>
                        </div>
                        <div className="mt-2 flex gap-4 items-center">
                          <div className=" text-zinc-400">
                            <span> color:</span>
                            <span> {item.product.color}</span>
                          </div>
                          {item.product.size && (
                            <div className=" text-zinc-400">
                              <span> Size:</span>
                              <span> {item.product.size}</span>
                            </div>
                          )}
                        </div>
                      </main>
                    </LinkReactRouter>
                  </SplideSlide>
                ))}
              </Splide>
            </div>
          </section>
          <Link to="/shop" className="max-sm:px-8 sm:max-w-[400px] mt-8">
            Continue shopping
          </Link>
        </main>
      </div>
    </div>
  )
}
