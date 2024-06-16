import { ICONS } from '../../assets/icons'

export function FilterBar() {
  return (
    <div className="bg-primary-200 px-8">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex gap-8 items-center">
          <div className="flex gap-6">
            <div className="flex gap-2 items-center cursor-pointer hover:opacity-50">
              <img src={ICONS.filtering} alt="filter icon" />
              <span>filter</span>
            </div>
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
          <span className="block h-[37px] w-[1px] bg-gray-300 "></span>
          <p>Showing 1–16 of 32 results</p>
        </div>

        <form action="" className="flex gap-8 py-6">
          <div className="flex gap-8 items-center">
            <label htmlFor="show" className="text-xl">
              show
            </label>
            <input type="text" id="show" className="size-14 " />
          </div>

          <div className="flex gap-8 items-center">
            <label htmlFor="shorty by" className="text-xl">
              Short by
            </label>
            <input type="text" id="shorty by" className="h-14  max-w-[188px]" />
          </div>
        </form>
      </div>
    </div>
  )
}
