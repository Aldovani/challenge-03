import { SelectItem } from './item'

export function SelectSize() {
  return (
    <div className="mt-4">
      <span className="text-sm text-gray-200">Size</span>
      <div className="flex gap-4 mt-3">
        <SelectItem sizes="L" defaultChecked />
        <SelectItem sizes="XL" />
        <SelectItem sizes="XS" />
      </div>
    </div>
  )
}
