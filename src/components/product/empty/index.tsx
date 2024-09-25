export function ProductListEmpty() {
  return (
    <section className="flex justify-center items-center flex-col py-16">
      <h3 className="text-4xl font-manrope text-zinc-900">
        No products found!
      </h3>
      <p className="text-zinc-400 mt-2">
        We couldnt find any items matching your criteria.
      </p>
    </section>
  )
}
