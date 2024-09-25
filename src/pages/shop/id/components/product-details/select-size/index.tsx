import { SelectItem } from './item'

type SelectSizeProps = {
  sizes: { name: string; acronym: string }[]
  onSelectSize: (color: string) => void
}

export function SelectSize({ sizes, onSelectSize }: SelectSizeProps) {
  return (
    <div className="mt-4">
      <span className="text-sm text-zinc-400">Sizes</span>
      <div className="flex sm:gap-4 gap-2 mt-3">
        {sizes.map((size, index) => (
          <SelectItem
            sizes={size.acronym}
            value={size.name}
            key={size.name}
            onChange={(e) => onSelectSize(e.target.value)}
            defaultChecked={index === 0}
          />
        ))}
      </div>
    </div>
  )
}
