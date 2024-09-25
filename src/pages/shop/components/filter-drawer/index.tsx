import { OtherSectionForm } from './form/other'
import { PriceSectionForm } from './form/price'
import { TypeSectionForm } from './form/type'
import { useFilterForm } from './form/use-filter-form'
import { useFilterDrawer } from './use-filter-drawer'

type FilterDrawerProps = { isOpen: boolean; onClose: () => void }

export function FilterDrawer({ isOpen, onClose }: FilterDrawerProps) {
  const { containerRef, isClosing } = useFilterDrawer({ onClose })

  const {
    handleChangeType,
    price,
    type,
    handleChangeIsNewOrIsOnSales,
    isNewOrOnSales,
    handleChangePrice,
    resetFilter,
  } = useFilterForm()

  return (
    <>
      <div
        data-open={isOpen}
        className="data-[open='true']:scale-x-100 sticky max-lg:data-[open='true']:max-h-[300px] h-fit md:w-fit   max-lg:overflow-y-scroll  max-lg:shadow-md  bg-white max-lg:pt-8 z-40 lg:top-[180px] top-[150px]  lg:pb-24 pb-12  data-[open='true']:translate-x-0   duration-200    "
      >
        <div
          data-open={isOpen}
          data-close={isClosing}
          ref={containerRef}
          className=" w-full  data-[close='true']:animate-close-filter bg-white    gap-8 translate-x-full animate-open-filter"
        >
          <header className=" px-8  ">
            <div className="border-b border-zinc-200 flex pb-4  items-center justify-between ">
              <h2 className="text-zinc-600 font-semibold text-xl">Filter</h2>
              <button
                onClick={resetFilter}
                className="text-sm text-zinc-400 font-medium"
              >
                clear filter
              </button>
            </div>
          </header>

          <form className="px-8">
            <TypeSectionForm handleChange={handleChangeType} value={type} />

            <PriceSectionForm handleChange={handleChangePrice} price={price} />

            <OtherSectionForm
              handleChange={handleChangeIsNewOrIsOnSales}
              value={isNewOrOnSales}
            />
          </form>
        </div>
      </div>
    </>
  )
}
