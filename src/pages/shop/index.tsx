import { useSelector } from 'react-redux'
import { Banner } from '../../components/banner'
import { Benefits } from '../../components/benefits'
import { FilterBar } from '../../components/filter-bar'
import { Pagination } from '../../components/pagination'
import { ProductList } from '../../components/product/product-list'
import { IState } from '../../stores'
import { IProduct } from '../../stores/modules/products/types'

export function ShopPage() {
  const products = useSelector<IState, IProduct[]>(
    (state) => state.products.items,
  )

  const loading = useSelector<IState, boolean>(
    (state) => state.products.loading,
  )

  return (
    <main className=" w-full   pt-[6.25rem] ">
      <Banner page="Shop" />
      <FilterBar />
      <div className="mt-16 container mx-auto">
        <ProductList items={products} isLoading={loading} />
        <Pagination />
      </div>
      <Benefits />
    </main>
  )
}
