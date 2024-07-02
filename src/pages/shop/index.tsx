import { Banner } from '../../components/banner'
import { Benefits } from '../../components/benefits'
import { FilterBar } from '../../components/filter-bar'
import { Pagination } from '../../components/pagination'
import { ProductList } from '../../components/product/product-list'
import { useFilter } from '../../hooks/use-filter'
import { useGetProductsQuery } from '../../stores/modules/products/products-api'

export function ShopPage() {
  const { type, sortBy, priceTo, priceFrom, perPage, isNew, isOnSales, page } =
    useFilter()
  const { isLoading, data } = useGetProductsQuery(
    {
      isNew,
      isOnSales,
      page,
      perPage,
      priceTo,
      priceFrom,
      sort: sortBy,
      type,
    },
    { refetchOnMountOrArgChange: true },
  )

  return (
    <main className=" w-full   pt-[6.25rem] ">
      <Banner page="Shop" />
      <FilterBar numberOfProducts={data?.items} />
      <div className="mt-16 container mx-auto">
        <ProductList items={data?.data} isLoading={isLoading} />
        <Pagination lastPages={data?.last} totalOfPages={data?.items} />
      </div>
      <Benefits />
    </main>
  )
}
