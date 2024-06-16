import { Banner } from '../components/banner'
import { Benefits } from '../components/benefits'
import { CheckoutForm } from '../components/checkout-form'
import { PrivateRouter } from '../components/private-router'

export function CheckoutPage() {
  return (
    <PrivateRouter to="/auth/sign-in?redirectUrl=/check-out">
      <main className=" w-full   pt-[6.25rem] ">
        <Banner page="Checkout" />

        <CheckoutForm />

        <Benefits />
      </main>
    </PrivateRouter>
  )
}
