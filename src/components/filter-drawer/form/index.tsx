import { Button } from '../../button'
import { OtherSectionForm } from './other'
import { PriceSectionForm } from './price'
import { TypeSectionForm } from './type'
import { useFilterForm } from './use-filter-form'

type FilterFormProps = {
  handleClose: () => void
}

export function FilterForm({ handleClose }: FilterFormProps) {
  const {
    handleChangePriceFom,
    handleChangePriceTo,
    handleChangeType,
    handleFilterProducts,
    priceFrom,
    priceTo,
    type,
    resetFilter,
    handleChangeIsNewOrIsOnSales,
    isNewOrOnSales,
  } = useFilterForm({ handleClose })

  return (
    <>
      <form className="mt-8 px-8">
        <TypeSectionForm handleChange={handleChangeType} value={type} />

        <PriceSectionForm
          handleChangePriceFrom={handleChangePriceFom}
          handleChangePriceTo={handleChangePriceTo}
          priceFrom={priceFrom}
          priceTo={priceTo}
        />

        <OtherSectionForm
          handleChange={handleChangeIsNewOrIsOnSales}
          value={isNewOrOnSales}
        />
      </form>
      <footer className="flex gap-8 px-8 pb-8">
        <Button variants="outline" onClick={resetFilter}>
          Clear filter
        </Button>
        <Button onClick={handleFilterProducts}>Filter</Button>
      </footer>
    </>
  )
}
