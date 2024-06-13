import { Banner } from '../components/banner'
import { Benefits } from '../components/benefits'
import { CheckoutForm } from '../components/checkout-form'

export function CheckoutPage() {
  return (
    <main className=" w-full   pt-[6.25rem] ">
      <Banner page="Checkout" />

      <CheckoutForm />

      <Benefits />
    </main>
  )
}
