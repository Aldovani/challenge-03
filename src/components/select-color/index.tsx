import { SelectItem } from './item'

export function SelectColor() {
  return (
    <div className="mt-4">
      <span className="text-sm text-gray-200">Color</span>
      <div className="flex gap-4 mt-3">
        <SelectItem color="#816DFA" colorName="blue" />
        <SelectItem color="#000" colorName="" />
        <SelectItem color="#B88E2F" colorName="" />
      </div>
    </div>
  )
}
