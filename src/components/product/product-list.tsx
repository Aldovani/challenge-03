import type { Products } from '@/types/products'
import { ProductListLoading } from './loading'
import { ProductItem } from './product-item'
import { ProductListEmpty } from './empty'

type ProductListProps = {
  items: Products[] | undefined
  isLoading?: boolean
  className?: string
}

export function ProductList({
  items,
  isLoading = false,
  className,
}: ProductListProps) {
  const isProductListEmpty = items?.length === 0
  return (
    <>
      {isLoading && <ProductListLoading />}

      {!isLoading && isProductListEmpty && <ProductListEmpty />}

      {!isLoading && !isProductListEmpty && (
        <section className={className}>
          {items?.map((item) => <ProductItem key={item.id} product={item} />)}
        </section>
      )}
    </>
  )
}
