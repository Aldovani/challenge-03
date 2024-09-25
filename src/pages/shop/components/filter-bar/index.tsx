import { SlidersHorizontal } from 'lucide-react'
import { useFilterBar } from './use-filter-bar'

type FilterBarProps = {
  numberOfProducts?: number
  onOpenFilter: () => void
}

export function FilterBar({
  numberOfProducts = 0,
  onOpenFilter,
}: FilterBarProps) {
  const { sortBy, handleChangeSortBy } = useFilterBar()

  return (
    <>
      <div className="bg-white border-b  border-zinc-200 px-8 py-4 sticky top-[77px] z-[60]">
        <div className="container mx-auto flex items-center justify-between ">
          <div className="flex gap-8 items-center ">
            <div className="flex gap-6">
              <button
                onClick={onOpenFilter}
                className="flex gap-2 items-center cursor-pointer text-zinc-400 hover:text-zinc-900 transition-colors"
              >
                <SlidersHorizontal />
                <span>Filter</span>
              </button>
            </div>
            <span className="max-sm:hidden block h-[37px] w-[1px] bg-zinc-200 "></span>
            <p className="text-zinc-400 max-sm:hidden">
              {numberOfProducts} products found
            </p>
          </div>

          <form className="flex flex-wrap gap-8 ">
            <div className="flex gap-2 items-center">
              <label htmlFor="sort-by" className="text-zinc-400">
                SORT BY:
              </label>
              <select
                onChange={(e) => handleChangeSortBy(e.target.value)}
                className="py-2  text-zinc-900"
                defaultValue={sortBy}
                id="sort-by"
              >
                <option value="name">NAME</option>
                <option value="price">PRICE</option>
                <option value="priceDiscount">DISCOUNT</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
