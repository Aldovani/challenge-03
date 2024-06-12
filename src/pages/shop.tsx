import { Banner } from '../components/banner'
import { Benefits } from '../components/benefits'
import { FilterBar } from '../components/filter-bar'
import { Pagination } from '../components/pagination'
import { ProductList } from '../components/product/product-list'

export function ShopPage() {
  return (
    <main className=" w-full   pt-[6.25rem] ">
      <Banner page="Shop" />
      <FilterBar />
      <div className="mt-16 container mx-auto">
        <ProductList />
        <Pagination
          currentPage={2}
          onChangePage={() => {}}
          pageSize={16}
          totalElements={40}
          totalPages={5}
        />
      </div>
      <Benefits />
    </main>
  )
}
