import { Banner } from '@components/ui/banner'
import { CartTable } from './components/cart-table'
import CartBanner from '@/assets/cart-banner.png'

export function CartPage() {
  return (
    <main className=" w-full   pt-[110px] ">
      <Banner page="Cart" bannerUrl={CartBanner} />
      <div className="px-8 mt-12 max-w-[1440px] mx-auto  max-sm:px-6  gap-16  pb-6  w-full overflow-x-auto">
        <CartTable />
      </div>
    </main>
  )
}
