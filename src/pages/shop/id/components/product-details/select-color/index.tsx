import { SelectItem } from './item'

type SelectColorProps = {
  colors: { name: string; hex: string }[]
  onSelectColor: (color: string) => void
}

export function SelectColor({ colors, onSelectColor }: SelectColorProps) {
  return (
    <div className="mt-4">
      <span className="text-sm text-zinc-400">Colors</span>
      <form className="flex sm:gap-4 gap-2 mt-3">
        {colors.map((color, index) => (
          <SelectItem
            onChange={(e) => onSelectColor(e.target.value)}
            defaultChecked={index === 0}
            key={color.name}
            color={color.hex}
            colorName={color.name}
          />
        ))}
      </form>
    </div>
  )
}
