import { Banner } from '../../components/banner'
import { Benefits } from '../../components/benefits'
import { CheckoutForm } from '../../components/checkout-form'
import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../../stores'

export function CheckoutPage() {
  const products = useAppSelector((state) => state.cart.items)

  if (products.length === 0) return <Navigate to="/shop" />

  return (
    <main className=" w-full pt-[6.25rem]">
      <Banner page="Checkout" />

      <CheckoutForm />

      <Benefits />
    </main>
  )
}
