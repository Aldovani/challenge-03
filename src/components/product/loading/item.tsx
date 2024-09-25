export function ProductListItemLoading() {
  return (
    <div data-testid="ProductListItemLoading" className="bg-zinc-50">
      <div className="animate-pulse bg-zinc-100 w-full h-[300px]" />

      <main className="pl-4 pr-5 pt-4 pb-4">
        <div className="h-8 w-3/4 bg-zinc-200 animate-pulse" />
        <div className="flex mt-2  items-center justify-between h-6 w-full">
          <div className=" bg-zinc-200 h-4 w-1/2" />
          <div className=" bg-zinc-100  h-4 w-1/3" />
        </div>
      </main>
    </div>
  )
}
