import { Input } from '@/components/ui/input'
import { FormateMoney } from '@/utils/formate-money'
type PriceSectionFormProps = {
  price: number[]
  handleChange: (value: number[]) => void
}

export function PriceSectionForm({
  handleChange,
  price,
}: PriceSectionFormProps) {
  return (
    <section className="mt-8 border-b border-zinc-200 pb-6">
      <h3 className="text-zinc-400 font-medium">Price</h3>

      <div className="mt-4">
        <Input.Range values={price} onChange={handleChange} />
      </div>

      <div className="flex mt-2 gap-2 items-center text-zinc-400">
        <span> {FormateMoney(price[0])}</span>
        <span>-</span>
        <span> {FormateMoney(price[1])}</span>
      </div>
    </section>
  )
}
