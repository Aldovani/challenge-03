import { ProductListItemLoading } from './item'

type ProductListLoadingProps = {
  numberOfElements?: number
}

export function ProductListLoading({
  numberOfElements = 8,
}: ProductListLoadingProps) {
  const arrayOfNumberOfElements = new Array(numberOfElements).fill(() => '')

  return (
    <section className="grid px-8 sm:px-0 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10">
      {arrayOfNumberOfElements.map((item) => (
        <ProductListItemLoading key={item} />
      ))}
    </section>
  )
}
