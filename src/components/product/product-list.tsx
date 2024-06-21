import { Products } from '../../services/api/products'
import { ProductListLoading } from './loading'
import { ProductItem } from './product-item'

type ProductListProps = {
  items: Products[]
  isLoading?: boolean
}

export function ProductList({ items, isLoading = false }: ProductListProps) {
  return (
    <>
      {isLoading && <ProductListLoading />}
      {!isLoading && (
        <section className="grid px-8 sm:px-0 grid-cols-1 sm:grid-cols-2  lg:grid-cols-3  xl:grid-cols-4 gap-x-8 gap-y-10">
          {items?.map((item) => <ProductItem key={item.id} product={item} />)}
        </section>
      )}
    </>
  )
}
