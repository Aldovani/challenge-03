import { Banner } from '../../components/banner'
import { Benefits } from '../../components/benefits'
import { FilterBar } from '../../components/filter-bar'
import { Pagination } from '../../components/pagination'
import { ProductList } from '../../components/product/product-list'
import { useGetProductsQuery } from '../../stores/modules/products/productsRTK'

export function ShopPage() {
  const { isLoading, data } = useGetProductsQuery({})
  return (
    <main className=" w-full   pt-[6.25rem] ">
      <Banner page="Shop" />
      <FilterBar />
      <div className="mt-16 container mx-auto">
        <ProductList items={data?.items} isLoading={isLoading} />
        <Pagination />
      </div>
      <Benefits />
    </main>
  )
}
