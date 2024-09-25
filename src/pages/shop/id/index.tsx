import { Navigate } from 'react-router-dom'
import { Breadcrumb } from '@/pages/shop/id/components/breadcrumb'
import { ProductDetails } from './components/product-details'
import { useProductDetails } from './use-product-details'
import { ProductLoading } from './components/product-details/loading'
import { ProductList } from '@components/product/product-list'
import { Link } from '@/components/ui/Link'

export function ProductDetailsPage() {
  const {
    product,
    productError,
    isProductLoading,
    isProductsRelatedLoading,
    productsRelated,
  } = useProductDetails()

  if (isProductLoading) return <ProductLoading />
  if ((productError && !isProductLoading) || !product)
    return <Navigate to="/shop/not-found" />

  return (
    <main className=" w-full container mx-auto   pt-[6.25rem] ">
      <Breadcrumb name={product.name} />

      <ProductDetails product={product} />

      <section className="container mx-auto mt-14 mb-[5.75rem]">
        <h3 className="text-center md:text-4xl text-2xl mb-6 text-zinc-900 font-medium">
          Related Products
        </h3>
        <ProductList
          className="px-8 grid xl:grid-cols-3 md:grid-cols-2 justify-center grid-cols-1 gap-8"
          items={productsRelated?.data}
          isLoading={isProductsRelatedLoading}
        />
        <Link
          className="w-fit px-20 mx-auto mt-8"
          variants="outline"
          to={`/shop?category=${product.category}`}
        >
          Show More
        </Link>
      </section>
    </main>
  )
}
