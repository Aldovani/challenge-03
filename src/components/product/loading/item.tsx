export function ProductListItemLoading() {
  return (
    <div className=" bg-gray-50">
      <div className="animate-pulse bg-[#d9d9d9] w-full h-[300px]"></div>

      <main className="pl-4 pr-5 pt-4 pb-8">
        <div className="h-12 w-3/4 bg-[#d9d9d9] animate-pulse"></div>
        <span className="mt-2 block h-6 bg-[#d9d9d9]"></span>
        <div className="mt-2 bg-[#d9d9d9] h-4"></div>
      </main>
    </div>
  )
}
