import { Link } from '@/components/ui/Link'
import { ProductList } from '@/components/product/product-list'
import { useGetProductsQuery } from '@/stores/modules/products/products-api'

export function Products() {
  const { data, isLoading } = useGetProductsQuery({ perPage: 6 })
  return (
    <section className="container mx-auto mt-20">
      <header className=" flex justify-between flex-col items-center ">
        <span className="text-zinc-400">products</span>
        <h2 className="font-medium lg:text-3.5xl text-2xl text-zinc-900">
          Our Products
        </h2>
        <p className="text-zinc-500 md:text-xl text-xs max-md:max-w-64 max-md:text-center mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </header>
      <div className="mt-10 px-8 xl:px-0">
        <ProductList
          className="grid xl:grid-cols-3 md:grid-cols-2 justify-center grid-cols-1 gap-8"
          items={data?.data}
          isLoading={isLoading}
        />
      </div>

      <Link to="/shop" variants="outline" className="w-fit mx-auto mt-12">
        Show more
      </Link>
    </section>
  )
}
