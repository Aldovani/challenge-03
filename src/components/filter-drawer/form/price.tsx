import { Input } from '../../input'

type PriceSectionFormProps = {
  priceTo: number | string
  priceFrom: number | string
  handleChangePriceTo: (value: number) => void
  handleChangePriceFrom: (value: number) => void
}

export function PriceSectionForm({
  handleChangePriceFrom,
  handleChangePriceTo,
  priceFrom,
  priceTo,
}: PriceSectionFormProps) {
  return (
    <section className="mt-8">
      <h3 className="text-gray-300 font-semibold">PRICE</h3>
      <div className="mt-2">
        <Input.Label name="from">
          <Input.Field
            type="text"
            value={priceFrom}
            onChange={(e) => handleChangePriceFrom(Number(e.target.value))}
          />
        </Input.Label>
        <Input.Label name="to">
          <Input.Field
            type="text"
            value={priceTo}
            onChange={(e) => handleChangePriceTo(Number(e.target.value))}
          />
        </Input.Label>
      </div>
    </section>
  )
}
