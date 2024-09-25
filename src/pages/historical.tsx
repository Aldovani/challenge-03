import { Banner } from '@/components/ui/banner'
import { useAuth } from '@/hooks/use-auth'
import { useGetOrdersByUserIdQuery } from '@/stores/modules/orders'
import HistoryBanner from '@/assets/historical-banner.png'
import { Link } from 'react-router-dom'

export function HistoryPage() {
  const { user } = useAuth()
  const { data } = useGetOrdersByUserIdQuery(user!.displayName!)

  console.log(data)
  return (
    <main className=" w-full   pt-[6.25rem] ">
      <Banner
        page="History"
        bannerUrl={HistoryBanner}
        className="bg-bottom bg-cover"
      />
      <section className="my-20 container mx-auto px-8">
        <ul className="flex flex-col gap-4">
          {data?.map((item) => {
            const total = item.items.reduce((accumulator, currentValue) => {
              const subTotal = currentValue.product.discount
                ? (currentValue.product.price -
                    currentValue.product.price *
                      (currentValue.product.discount / 100)) *
                  currentValue.quantity
                : currentValue.product.price * currentValue.quantity

              return accumulator + subTotal
            }, 0)

            return (
              <li
                key={item.id}
                className=" border border-zinc-200 py-5 px-4 sm:px-10 flex justify-between md:items-center max-md:flex-col max-sm:gap-5"
              >
                <div className="flex sm:gap-10 max-sm:flex-col gap-5 ">
                  <div className="flex flex-col">
                    <span className="text-zinc-600 font-medium">
                      Order placed
                    </span>
                    <span className="text-zinc-400">{item.orderData}</span>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-zinc-600 font-medium">Total</span>
                    <span className="text-zinc-400">{total}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-zinc-600 font-medium">
                      payment Method
                    </span>
                    <span className="text-zinc-400">{item.paymentMethod}</span>
                  </div>
                </div>

                <div className="flex flex-col justify-end sm:items-end">
                  <span className="text-zinc-600 font-medium max-sm:text-sm">
                    {item.id}
                  </span>
                  <Link
                    to={`/check-out/success/${item.id}`}
                    className="text-zinc-400 hover:text-zinc-400"
                  >
                    View more details
                  </Link>
                </div>
              </li>
            )
          })}
        </ul>
      </section>
    </main>
  )
}
