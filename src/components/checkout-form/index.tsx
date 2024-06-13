import { Button } from '../button'
import { Input } from '../input'

export function CheckoutForm() {
  return (
    <form className="relative mt-[4.5rem] container mx-auto pt-24 pb-16 max-sm:px-6 grid justify-center gap-10 lg:gap-[144px]  lg:grid-cols-[453px_528px]  ">
      <div>
        <h2 className="text-4xl font-semibold">Billing details</h2>
        <div className=" flex flex-col mt-10 gap-9">
          <div className="flex gap-8 flex-wrap">
            <Input.Label
              name="First Name"
              className="col-start-1 col-end-2  sm:col-start-1 sm:col-end-2"
            >
              <Input.Field className="mt-5" placeholder="Abc" />
            </Input.Label>
            <Input.Label
              name="Last Name"
              className="col-start-1 col-end-2 sm:col-start-2 sm:col-end-3"
            >
              <Input.Field className="mt-5" placeholder="Abc" />
            </Input.Label>
          </div>
          <Input.Label name="Company Name (Optional)">
            <Input.Field className="mt-5" placeholder="Abc@def.com" />
          </Input.Label>
          <Input.Label name="ZIP code">
            <Input.Field className="mt-5" placeholder="This is an optional" />
          </Input.Label>
          <Input.Label name="Country / Region">
            <Input.Field className="mt-5" placeholder="This is an optional" />
          </Input.Label>
          <Input.Label name="Street address">
            <Input.Field className="mt-5" placeholder="This is an optional" />
          </Input.Label>
          <Input.Label name="Town / City">
            <Input.Field className="mt-5" placeholder="This is an optional" />
          </Input.Label>
          <Input.Label name="Province">
            <Input.Field className="mt-5" placeholder="This is an optional" />
          </Input.Label>
          <Input.Label name="Add-on address">
            <Input.Field className="mt-5" placeholder="This is an optional" />
          </Input.Label>

          <Input.Label name="Email address">
            <Input.Field className="mt-5" placeholder="This is an optional" />
          </Input.Label>
        </div>
      </div>

      <div className="sticky top-[112px] left-0 h-fit ">
        <div className="border-b border-gray-200 pb-8">
          <div className="flex justify-between items-center">
            <strong className="font-medium text-2xl">Product</strong>
            <strong className="font-medium text-2xl">Subtotal</strong>
          </div>
          <ul className="flex flex-col mt-4">
            <li className="flex justify-between items-center">
              <div className="flex gap-3 items-center">
                <span className="text-gray-200">Product</span>
                <span className="text-xs">x 1</span>
              </div>
              <span className="font-light">Rs. 250,000.00</span>
            </li>
          </ul>
          <div className="flex justify-between items-center mt-5">
            <span className="font-medium">Subtotal</span>
            <span className="font-light">Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between items-center mt-4">
            <span className="font-medium">Total</span>
            <strong className="font-bold text-2xl text-primary-500">
              Rs. 250,000.00
            </strong>
          </div>
        </div>
        <div>
          <div className="mt-5">
            <div className="flex items-center  gap-4">
              <input
                name="payment form"
                type="radio"
                id="bank transfer"
                className="peer/bank-transfer opacity-0 invisible w-0 h-0 absolute"
              />
              <span className="size-[14px] rounded-full peer-checked/bank-transfer:bg-black  peer-checked:border-black border border-gray-200 "></span>

              <label
                htmlFor="bank transfer"
                className="peer-checked:text-black  peer-checked:font-normal  font-medium"
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
              name="payment form"
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
              name="payment form"
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
          <p className="mt-6">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our <strong>privacy policy</strong>.
          </p>
        </div>
        <Button
          className="mt-10 max-w-[19.875rem] mx-auto flex items-center justify-center"
          variants="outline"
        >
          Place order
        </Button>
      </div>
    </form>
  )
}
