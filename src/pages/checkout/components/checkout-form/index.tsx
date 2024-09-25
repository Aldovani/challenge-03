import { CreditCard } from 'lucide-react'
import { FormateMoney } from '@/utils/formate-money'
import { MaskCEP } from '@/utils/mask-CEP'
import { Button } from '@components/ui/button'
import { Input } from '@components/ui/input'
import { CheckoutList } from './list'
import { useCheckoutForm } from './useCheckoutForm'
import Google from '@/assets/Google.svg'
import PayPal from '@/assets/PayPal.svg'

export function CheckoutForm() {
  const {
    products,
    total,
    errors,
    handleSubmit,
    register,
    handleChangeZipCodeInput,
    isZipcodeLoading,
    address,
    handleSubmitCheckoutForm,
    isLoading,
  } = useCheckoutForm()

  return (
    <form
      onSubmit={handleSubmit((data) => {
        handleSubmitCheckoutForm(data)
      })}
      className=" mt-[80px] container mx-auto  pb-16 px-8 grid justify-between gap-10 xl:gap-[144px]  xl:grid-cols-[.9fr_528px] lg:grid-cols-[.7fr_.5fr]  "
    >
      <div>
        <h2 className="text-4xl text-zinc-900">Billing details</h2>
        <div className=" flex flex-col mt-10 gap-9">
          <div className="grid sm:grid-cols-2  grid-cols-1 max-sm:gap-y-6 sm:gap-6  max-lg:flex-wrap">
            <Input.Label
              name="First Name"
              htmlFor="name"
              className="col-start-1 col-end-2  sm:col-start-1 sm:col-end-2"
            >
              <Input.Field
                className="mt-2"
                placeholder="john"
                id="name"
                isError={!!errors.name}
                {...register('name')}
              />
              <Input.MessageError error={errors.name?.message} />
            </Input.Label>
            <Input.Label
              name="Last Name"
              htmlFor="last name"
              className="col-start-1 col-end-2 sm:col-start-2 sm:col-end-3"
            >
              <Input.Field
                className="mt-2"
                placeholder="doe"
                id="last name"
                isError={!!errors.lastName}
                {...register('lastName')}
              />
              <Input.MessageError error={errors.lastName?.message} />
            </Input.Label>

            <Input.Label
              htmlFor="email"
              name="Email address"
              className="col-start-1 col-end-3"
            >
              <Input.Field
                className="mt-2"
                placeholder="john.doe@example.com"
                id="email"
                isError={!!errors.email}
                {...register('email')}
              />
              <Input.MessageError error={errors.email?.message} />
            </Input.Label>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <Input.Label
              htmlFor="zipcode"
              name="ZIP code"
              className="col-start-1 col-end-4"
            >
              <Input.Field
                className="mt-2"
                placeholder="00000"
                id="zipcode"
                maxLength={9}
                isLoading={isZipcodeLoading}
                disabled={isZipcodeLoading}
                isError={!!errors.zipCode}
                {...register('zipCode', {
                  onChange: (el) => {
                    el.target.value = MaskCEP(el.target.value)
                    handleChangeZipCodeInput(el.target.value)
                  },
                })}
              />
              <Input.MessageError error={errors.zipCode?.message} />
            </Input.Label>
            <Input.Label
              htmlFor="country"
              name="Country / Region"
              className="col-start-1 col-end-4"
            >
              <Input.Field
                className="mt-2"
                placeholder="United States "
                id="country"
                disabled={!!address?.ddd}
                isError={!!errors.country}
                {...register('country')}
              />
              <Input.MessageError error={errors.country?.message} />
            </Input.Label>
            <Input.Label
              htmlFor="street"
              name="Street address"
              className="col-start-1 col-end-4"
            >
              <Input.Field
                className="mt-2"
                placeholder="123 Main St"
                id="street"
                disabled={!!address?.complemento}
                isError={!!errors.street}
                {...register('street')}
              />
              <Input.MessageError error={errors.street?.message} />
            </Input.Label>
            <Input.Label
              htmlFor="town"
              name="Town / City"
              className="col-start-1 sm:col-end-3 col-end-4"
            >
              <Input.Field
                className="mt-2"
                placeholder="Springfield"
                id="town"
                disabled={!!address?.localidade}
                isError={!!errors.town}
                {...register('town')}
              />
              <Input.MessageError error={errors.town?.message} />
            </Input.Label>
            <Input.Label
              htmlFor="province"
              name="Province"
              className="sm:col-start-3 col-start-1 col-end-4 "
            >
              <Input.Field
                className="mt-2"
                placeholder="California"
                id="province"
                disabled={!!address?.uf}
                isError={!!errors.province}
                {...register('province')}
              />
              <Input.MessageError error={errors.province?.message} />
            </Input.Label>

            <Input.Label
              htmlFor="complement"
              name="Address complement"
              className="col-start-1 col-end-4"
            >
              <Input.Field
                className="mt-2"
                placeholder="Apartment 4B"
                id="complement"
                isError={!!errors.complement}
                {...register('complement')}
              />
              <Input.MessageError error={errors.complement?.message} />
            </Input.Label>

            <div className="col-start-1 col-end-4">
              <span className="font-medium text-zinc-600">Payment method</span>

              <div className="flex mt-2 gap-4 sm:flex-nowrap flex-wrap">
                <div className="w-full relative">
                  <input
                    className="opacity-0 absolute invisible peer "
                    type="radio"
                    value="credit-card"
                    id="credit-card"
                    {...register('paymentMethod')}
                  />
                  <label
                    htmlFor="credit-card"
                    className="cursor-pointer hover:bg-zinc-100 transition-colors border border-zinc-200 flex justify-center items-center gap-2 text-zinc-600 peer-checked:bg-zinc-900 peer-checked:text-zinc-50  py-4"
                  >
                    <CreditCard className="text-zinc-400 peer-checked:text-zinc-50" />
                    <span className="font-medium">Credit Card</span>
                  </label>
                </div>
                <div className="w-full relative">
                  <input
                    className="opacity-0 absolute invisible peer "
                    type="radio"
                    id="pay-pal"
                    value="pay-pal"
                    {...register('paymentMethod')}
                  />
                  <label
                    htmlFor="pay-pal"
                    className="cursor-pointer hover:bg-zinc-100 transition-colors border border-zinc-200 flex justify-center items-center gap-2 text-zinc-600 peer-checked:bg-zinc-900 peer-checked:text-zinc-50 py-4"
                  >
                    <img
                      src={PayPal}
                      alt="PayPal icon"
                      className="text-zinc-400"
                    />
                    <span className="font-medium">Paypal</span>
                  </label>
                </div>
                <div className="w-full relative">
                  <input
                    className="opacity-0 absolute invisible peer "
                    type="radio"
                    id="google"
                    value="google"
                    {...register('paymentMethod')}
                  />
                  <label
                    htmlFor="google"
                    className="border cursor-pointer hover:bg-zinc-100 transition-colors border-zinc-200 flex justify-center items-center gap-2 text-zinc-600 peer-checked:bg-zinc-900 peer-checked:text-zinc-50 py-4"
                  >
                    <img
                      src={Google}
                      alt="Google icon"
                      className="text-zinc-400"
                    />
                    <span className="font-medium">Google pay</span>
                  </label>
                </div>
              </div>
              <Input.MessageError error={errors.paymentMethod?.message} />
            </div>
          </div>
        </div>
      </div>

      <aside className="sticky top-[112px] left-0 h-fit ">
        <div>
          <h3 className="font-medium text-xl text-zinc-400">Order summary</h3>
          <CheckoutList products={products} />
          <footer className="border-t mt-5 border-zinc-200">
            <div className="flex justify-between items-center mt-5">
              <span className="font-medium text-zinc-400">Subtotal</span>
              <span className="font-bold text-zinc-900">
                {FormateMoney(total)}
              </span>
            </div>
            <div className="flex justify-between items-center mt-6">
              <span className="font-medium text-zinc-400">Total</span>
              <strong className="font-bold text-2xl text-zinc-900">
                {FormateMoney(total)}
              </strong>
            </div>
          </footer>
        </div>
        <Button
          isLoading={isLoading}
          className="mt-10  mx-auto flex items-center justify-center"
          variants="outline"
          type="submit"
        >
          Checkout{' '}
        </Button>
      </aside>
    </form>
  )
}
