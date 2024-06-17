import { FormateMoney } from '../../utils/formate-money'
import { MaskCEP } from '../../utils/mask-CEP'
import { Button } from '../button'
import { Input } from '../input'
import { CheckoutList } from './list'
import { useCheckoutForm } from './useCheckoutForm'

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
      className="relative mt-[4.5rem] container mx-auto pt-24 pb-16 max-sm:px-6 grid justify-center gap-10 lg:gap-[144px]  lg:grid-cols-[453px_528px]  "
    >
      <div>
        <h2 className="text-4xl font-semibold">Billing details</h2>
        <div className=" flex flex-col mt-10 gap-9">
          <div className="flex gap-8 max-lg:flex-wrap">
            <Input.Label
              name="First Name"
              htmlFor="name"
              className="col-start-1 col-end-2  sm:col-start-1 sm:col-end-2"
            >
              <Input.Field
                className="mt-5"
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
                className="mt-5"
                placeholder="doe"
                id="last name"
                isError={!!errors.lastName}
                {...register('lastName')}
              />
              <Input.MessageError error={errors.lastName?.message} />
            </Input.Label>
          </div>
          <Input.Label htmlFor="company" name="Company Name (Optional)">
            <Input.Field
              className="mt-5"
              placeholder="Acme Corp"
              id="company"
              isError={!!errors.company}
              {...register('company')}
            />
            <Input.MessageError error={errors.company?.message} />
          </Input.Label>
          <Input.Label htmlFor="zipcode" name="ZIP code">
            <Input.Field
              className="mt-5"
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
          <Input.Label htmlFor="country" name="Country / Region">
            <Input.Field
              className="mt-5"
              placeholder="United States "
              id="country"
              disabled={!!address?.ddd}
              isError={!!errors.country}
              {...register('country')}
            />
            <Input.MessageError error={errors.country?.message} />
          </Input.Label>
          <Input.Label htmlFor="street" name="Street address">
            <Input.Field
              className="mt-5"
              placeholder="123 Main St"
              id="street"
              disabled={!!address?.complemento}
              isError={!!errors.street}
              {...register('street')}
            />
            <Input.MessageError error={errors.street?.message} />
          </Input.Label>
          <Input.Label htmlFor="town" name="Town / City">
            <Input.Field
              className="mt-5"
              placeholder="Springfield"
              id="town"
              disabled={!!address?.localidade}
              isError={!!errors.town}
              {...register('town')}
            />
            <Input.MessageError error={errors.town?.message} />
          </Input.Label>
          <Input.Label htmlFor="province" name="Province">
            <Input.Field
              className="mt-5"
              placeholder="California"
              id="province"
              disabled={!!address?.uf}
              isError={!!errors.province}
              {...register('province')}
            />
            <Input.MessageError error={errors.province?.message} />
          </Input.Label>
          <Input.Label htmlFor="address" name="Add-on address">
            <Input.Field
              className="mt-5"
              placeholder="Main St, Springfield, CA 12345"
              id="address"
              disabled={!!address?.logradouro}
              isError={!!errors.address}
              {...register('address')}
            />
            <Input.MessageError error={errors.address?.message} />
          </Input.Label>

          <Input.Label htmlFor="email" name="Email address">
            <Input.Field
              className="mt-5"
              placeholder="john.doe@example.com"
              id="email"
              isError={!!errors.email}
              {...register('email')}
            />
            <Input.MessageError error={errors.email?.message} />
          </Input.Label>

          <Input.Label htmlFor="complement" name="Address complement">
            <Input.Field
              className="mt-5"
              placeholder="Apartment 4B"
              id="complement"
              isError={!!errors.complement}
              {...register('complement')}
            />
            <Input.MessageError error={errors.complement?.message} />
          </Input.Label>
        </div>
      </div>

      <div className="sticky top-[112px] left-0 h-fit ">
        <div className="border-b border-gray-200 pb-8">
          <div className="flex justify-between items-center">
            <strong className="font-medium text-2xl">Product</strong>
            <strong className="font-medium text-2xl">Subtotal</strong>
          </div>
          <CheckoutList products={products} />
          <div className="flex justify-between items-center mt-5">
            <span className="font-medium">Subtotal</span>
            <span className="font-light">{FormateMoney(total)}</span>
          </div>
          <div className="flex justify-between items-center mt-4">
            <span className="font-medium">Total</span>
            <strong className="font-bold text-2xl text-primary-500">
              {FormateMoney(total)}
            </strong>
          </div>
        </div>
        <div>
          <div className="mt-5">
            <div className="flex items-center  gap-4">
              <input
                type="radio"
                {...register('paymentMethod')}
                id="bank transfer"
                value="bank"
                className="peer/bank opacity-0 invisible w-0 h-0 absolute"
              />
              <span className="size-[14px] rounded-full peer-checked/bank:bg-black  peer-checked/bank:border-black border border-gray-200 "></span>

              <label
                htmlFor="bank transfer"
                className="peer-checked/bank:text-black   peer-checked/bank:font-normal text-gray-200  font-medium"
              >
                Direct Bank Transfer
              </label>
            </div>
            <p className="text-gray-200 font-light mt-3 peer-checked/bank-transfer:hidden">
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </p>
          </div>
          <div className="mt-6 flex items-center gap-4">
            <input
              type="radio"
              {...register('paymentMethod')}
              value="bank"
              id="bank"
              className="peer opacity-0 invisible w-0 h-0 absolute"
            />
            <span className="size-[14px] rounded-full peer-checked:bg-black  peer-checked:border-black border border-gray-200 "></span>

            <label
              className="peer-checked:text-black   peer-checked:font-normal text-gray-200  font-medium"
              htmlFor="bank"
            >
              Direct Bank Transfer
            </label>
          </div>
          <div className="mt-2 items-center flex gap-4">
            <input
              type="radio"
              id="cash"
              value="cash"
              {...register('paymentMethod')}
              className="peer opacity-0 invisible w-0 h-0 absolute"
            />
            <span className="size-[14px] rounded-full peer-checked:bg-black  peer-checked:border-black border border-gray-200 "></span>

            <label
              htmlFor="cash"
              className="peer-checked:text-black  peer-checked:font-normal  text-gray-200 font-medium"
            >
              Cash On Delivery
            </label>
          </div>
          <Input.MessageError error={errors.paymentMethod?.message} />

          <p className="mt-6">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our <strong>privacy policy</strong>.
          </p>
        </div>
        <Button
          isLoading={isLoading}
          className="mt-10 max-w-[19.875rem] mx-auto flex items-center justify-center"
          variants="outline"
        >
          Place order
        </Button>
      </div>
    </form>
  )
}
