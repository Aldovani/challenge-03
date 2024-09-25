import { Banner } from '@/components/ui/banner'
import { CheckoutForm } from './components/checkout-form'
import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../../stores'

import CheckoutBanner from '@/assets/checkout-banner.png'

export function CheckoutPage() {
  const products = useAppSelector((state) => state.cart.items)

  if (products.length === 0) return <Navigate to="/shop" />

  return (
    <main className=" w-full pt-[6.25rem]">
      <Banner page="Checkout" bannerUrl={CheckoutBanner} />
      <CheckoutForm />
    </main>
  )
}
