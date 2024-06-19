import { ICONS } from '../../assets/icons'
import { ReactPortal } from '../react-portal'
import { FilterForm } from './form'
import { useFilterDrawer } from './use-filter-drawer'

type FilterDrawerProps = { isOpen: boolean; onClose: () => void }

export function FilterDrawer({ isOpen, onClose }: FilterDrawerProps) {
  const { containerRef, handleClose, isClosing } = useFilterDrawer({ onClose })

  return (
    <ReactPortal containerId="filter-container">
      {isOpen && (
        <div
          data-open={isOpen}
          className="data-[open='true']:scale-x-100  data-[open='true']:translate-x-0   duration-200 fixed  grid grid-cols-[417px_1fr] w-full h-full bg-black bg-opacity-20 z-[100] inset-0"
        >
          <div
            data-open={isOpen}
            data-close={isClosing}
            ref={containerRef}
            className=" data-[close='true']:animate-close-filter bg-white h-full max-h-screen grid grid-rows-[64px_1fr_auto] translate-x-full animate-open-filter"
          >
            <div>
              <header className="flex items-center justify-between pr-10 pt-7 pl-8">
                <h2 className="font-semibold text-2xl">Filter</h2>
                <button onClick={handleClose}>
                  <img src={ICONS['close-cart']} alt="close cart icon" />
                </button>
              </header>
              <div className="px-16 pl-8 pr-[100px] mt-6">
                <div className=" h-[1px] bg-[#d4d4d4]  " />
              </div>
            </div>

            <FilterForm handleClose={handleClose} />
          </div>
          <div id="overlay" onClick={handleClose}></div>
        </div>
      )}
    </ReactPortal>
  )
}
