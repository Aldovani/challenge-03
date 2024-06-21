import { ICONS } from '../../assets/icons'
import { FilterDrawer } from '../filter-drawer'
import { useFilterBar } from './use-filter-bar'

export function FilterBar() {
  const {
    handleChangePerPage,
    handleChangeSortBy,
    handleCloseFilterDrawer,
    handleOpenFilterDrawer,
    isFilterOpen,
    numbeOfElements,
    page,
    perPage,
    sortBy,
  } = useFilterBar()

  return (
    <div className="bg-primary-200 px-8">
      <div className="container mx-auto flex items-center justify-between max-md:flex-col max-md:pt-8">
        <div className="flex gap-8 items-center flex-wrap">
          <div className="flex gap-6">
            <button
              onClick={handleOpenFilterDrawer}
              className="flex gap-2 items-center cursor-pointer hover:opacity-50"
            >
              <img src={ICONS.filtering} alt="filter icon" />
              <span>filter</span>
            </button>

            <FilterDrawer
              onClose={handleCloseFilterDrawer}
              isOpen={isFilterOpen}
            />
            <img
              src={ICONS['grid-big-round']}
              alt="grid icon"
              className="cursor-pointer hover:opacity-50"
            />
            <img
              src={ICONS['view-list']}
              alt="view-list icon"
              className="cursor-pointer hover:opacity-50"
            />
          </div>
          <span className="max-sm:hidden block h-[37px] w-[1px] bg-gray-300 "></span>
          <p>
            Showing {(page - 1) * perPage + 1}-
            {page * perPage > numbeOfElements
              ? numbeOfElements
              : page * perPage}{' '}
            of {numbeOfElements} results
          </p>
        </div>

        <form className="flex flex-wrap gap-8 py-6">
          <div className="flex gap-8 items-center">
            <label htmlFor="show" className="text-xl">
              show
            </label>
            <select
              id="show"
              defaultValue={perPage}
              className="size-14 text-center text-xl  text-gray-200"
              onChange={(e) => handleChangePerPage(Number(e.target.value))}
            >
              <option value="32">32</option>
              <option value="16">16</option>
              <option value="12">12</option>
              <option value="8">8</option>
              <option value="4">4</option>
            </select>
          </div>

          <div className="flex gap-8 items-center">
            <label id="shorty by" htmlFor="shorty by" className="text-xl">
              Short by
            </label>
            <select
              onChange={(e) => handleChangeSortBy(e.target.value)}
              className="h-14 px-4 w-[188px] text-xl text-gray-200"
              defaultValue={sortBy}
            >
              <option value="">Select </option>
              <option value="name">Name</option>
              <option value="price">price</option>
              <option value="priceDiscount">Price discount</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  )
}
