import { Link } from 'react-router-dom'
import { Breadcrumb } from '../../../components/breadcrumb'
import { ProductDetails } from '../../../components/product-details'
import { ProductNotFound } from '../../../components/product-details/not-found'
import { useProductDetails } from './use-product-details'
import { ProductLoading } from '../../../components/product-details/loading'
import { ProductList } from '../../../components/product/product-list'

export function ProductDetailsPage() {
  const {
    product,
    productError,
    productsRelated,
    isProductLoading,
    isProductsRelatedLoading,
  } = useProductDetails()

  if (isProductLoading) return <ProductLoading />
  if ((productError && !isProductLoading) || !product)
    return <ProductNotFound />

  return (
    <main className=" w-full   pt-[6.25rem] ">
      <Breadcrumb name={product.name} />

      <ProductDetails product={product} />

      <section className="container mx-auto mt-14 mb-[5.75rem]">
        <h3 className="text-center text-4xl mb-6 font-medium">
          Related Products
        </h3>
        <ProductList
          items={productsRelated}
          isLoading={isProductsRelatedLoading}
        />
        <Link
          to="/shop"
          className="mt-11 flex w-fit  justify-center  mx-auto py-3 px-20 border border-primary-500 text-primary-500 font-semibold transition-colors hover:text-white hover:bg-primary-500"
        >
          Show More
        </Link>
      </section>
    </main>
  )
}
