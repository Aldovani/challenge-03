import { Link as LinkReactRouter, Navigate } from 'react-router-dom'
import { ICONS } from '../../../assets/icons'
import { IMAGES } from '../../../assets/images'
import { Link } from '../../../components/Link'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { FormateMoney } from '../../../utils/formate-money'
import { useCheckoutSuccess } from './use-checkout-success'

export function CheckoutSuccessPage() {
  const { finishedCart, total } = useCheckoutSuccess()

  if (total === 0) return <Navigate to="/shop" />

  return (
    <div className="grid lg:grid-cols-[50%_50%] overflow-y-hidden min-h-screen ">
      <div
        style={{ backgroundImage: `url(${IMAGES['auth-background']})` }}
        className="hidden lg:block h-full bg-[100%] bg-cover"
      ></div>

      <div>
        <main className="flex flex-col py-8  sm:py-10 px-8 sm:px-20">
          <LinkReactRouter to="/">
            <img src={ICONS.logo} alt="Logo Furniro" className="w-32" />
          </LinkReactRouter>

          <section className="mt-10">
            <h1 className="sm:text-64 text-4xl font-eb-garamond font-bold  text-gray-500">
              Your order is on its way!
            </h1>
            <p className="mt-2 text-gray-200 max-w-96  ">
              Thank you for your purchase from our store! We are very happy to
              have you as a customer.
            </p>
          </section>

          <section className="mt-8">
            <h3 className="font-semibold text-gray-200 text-xl">
              Order Details:
            </h3>

            <ul className="flex flex-col  sm:gap-2 mt-5 max-w-[320px]">
              <li>
                <div className="flex justify-between">
                  <span className="text-gray-200">Order Number</span>
                  <span className="font-medium">#{finishedCart.orderID}</span>
                </div>
              </li>
              <li>
                <div className="flex justify-between">
                  <span className="text-gray-200">Order Date: </span>
                  <span className="font-medium">
                    {new Date(finishedCart.orderData).toLocaleDateString(
                      'pt-br',
                    )}
                  </span>
                </div>
              </li>
              <li>
                <div className="flex justify-between">
                  <span className="text-gray-200">Total Amount: </span>
                  <span className="font-medium">{FormateMoney(total)}</span>
                </div>
              </li>
              <li>
                <div className="flex justify-between">
                  <span className="text-gray-200">Payment Method: </span>
                  <span className="font-medium">
                    {finishedCart.paymentMethod}
                  </span>
                </div>
              </li>
            </ul>
          </section>

          <section className="mt-8 ">
            <h3 className="font-semibold text-gray-200 text-xl">Products</h3>

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
                {finishedCart?.items.map((item) => (
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

                        <div className="mt-2">
                          <strong className="text-gray-500 text-xl font-semibold">
                            {FormateMoney(item.product.price)}
                          </strong>
                        </div>
                        <div className="mt-2 flex justify-between items-center">
                          <strong className="text-gray-500 text-xl font-semibold">
                            {item.quantity}
                          </strong>
                          <strong className="text-gray-500 text-xl font-semibold">
                            {FormateMoney(item.product.price)}
                          </strong>
                        </div>
                      </main>
                    </LinkReactRouter>
                  </SplideSlide>
                ))}
              </Splide>
            </div>
          </section>
          <Link to="/shop" className="max-w-[400px] mt-8">
            Continue shopping
          </Link>
        </main>
      </div>
    </div>
  )
}
