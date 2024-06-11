import { Banner } from '../components/banner'
import { Benefits } from '../components/benefits'
import { ProductList } from '../components/product/product-list'

export function ShopPage() {
  return (
    <main className=" w-full   pt-[6.25rem] ">
      <Banner page="Shop" />
      <div className="container mx-auto">
        <ProductList />
      </div>
      <Benefits />
    </main>
  )
}
