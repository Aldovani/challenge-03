import { useState } from 'react'

import ShopBanner from '@/assets/shop-banner.jpg'

import { FilterDrawer } from './components/filter-drawer'
import { Banner } from '@components/ui/banner'
import { FilterBar } from './components/filter-bar'
import { Pagination } from './components/pagination'
import { ProductList } from '@components/product/product-list'
import { useFilter } from '@/hooks/use-filter'

import { useGetProductsQuery } from '@/stores/modules/products/products-api'

export function ShopPage() {
  const { type, sortBy, perPage, isNew, isOnSales, page, price } = useFilter()
  const { isLoading, data } = useGetProductsQuery(
    {
      isNew,
      isOnSales,
      page,
      perPage,
      priceFrom: price[0],
      priceTo: price[1],
      sort: sortBy,
      type,
    },
    { refetchOnMountOrArgChange: true },
  )

  const [isFilterOpen, setIisFilterOpen] = useState(false)
  const isProductListEmpty = data?.data && data?.data.length === 0

  function handleOpenFilterDrawer() {
    setIisFilterOpen((prev) => !prev)
  }

  function handleCloseFilterDrawer() {
    setIisFilterOpen(false)
  }

  return (
    <main className=" w-full   pt-[6.25rem]  ">
      <Banner page="Shop" bannerUrl={ShopBanner} className="z-50" />
      <FilterBar
        onOpenFilter={handleOpenFilterDrawer}
        numberOfProducts={data?.items}
      />
      <div
        data-is-filter-open={isFilterOpen}
        className=" grid mt-12 relative  sm:data-[is-filter-open=true]:grid-cols-[0.2fr_1fr] data-[is-filter-open=true]:grid-cols-[1fr]  gap-10 transition-all  "
      >
        {isFilterOpen && (
          <FilterDrawer
            onClose={handleCloseFilterDrawer}
            isOpen={isFilterOpen}
          />
        )}

        <div>
          <ProductList
            className="px-4 sm:grid flex flex-col  sm:grid-cols-[repeat(auto-fill_,_minmax(290px_,_.1fr))] gap-8   justify-center"
            items={data?.data}
            isLoading={isLoading}
          />

          {!isProductListEmpty && (
            <Pagination lastPages={data?.last} totalOfPages={data?.items} />
          )}
        </div>
      </div>
    </main>
  )
}
