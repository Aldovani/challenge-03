import { useSelector } from 'react-redux'
import { Banner } from '../../components/banner'
import { Benefits } from '../../components/benefits'
import { CheckoutForm } from '../../components/checkout-form'
import { IState } from '../../stores'
import { ICartItem } from '../../stores/modules/cart/types'
import { Navigate } from 'react-router-dom'

export function CheckoutPage() {
  const products = useSelector<IState, ICartItem[]>((state) => state.cart.items)

  if (products.length === 0) return <Navigate to="/shop" />

  return (
    <main className=" w-full pt-[6.25rem]">
      <Banner page="Checkout" />

      <CheckoutForm />

      <Benefits />
    </main>
  )
}
