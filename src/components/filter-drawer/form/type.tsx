type TypeSectionFormProps = {
  value: string
  handleChange: (value: string) => void
}

export function TypeSectionForm({ handleChange, value }: TypeSectionFormProps) {
  return (
    <div>
      <h3 className="text-gray-300 font-semibold">TYPE</h3>
      <div className="flex flex-col gap-4 mt-3">
        <div className="relative">
          <input
            className="opacity-0 absolute invisible peer"
            type="radio"
            name="type"
            id="sofas"
            value="sofas"
            checked={value === 'sofas'}
            onChange={(e) => handleChange(e.target.value)}
          />
          <label
            className="cursor-pointer peer-checked:bg-primary-500/15 peer-checked:text-primary-500 peer-checked:border-primary-500/50  flex items-center justify-center py-2 border border-gray-200 rounded-lg text-lg text-center font-medium"
            htmlFor="sofas"
          >
            Sofas
          </label>
        </div>
        <div className="relative">
          <input
            className="opacity-0 absolute invisible peer"
            type="radio"
            name="type"
            id="armchair"
            value="armchair"
            checked={value === 'armchair'}
            onChange={(e) => handleChange(e.target.value)}
          />
          <label
            className="cursor-pointer peer-checked:bg-primary-500/15 peer-checked:text-primary-500 peer-checked:border-primary-500/50  flex items-center justify-center py-2 border border-gray-200 rounded-lg text-lg text-center font-medium"
            htmlFor="armchair"
          >
            Armchair
          </label>
        </div>
        <div className="relative">
          <input
            className="opacity-0 absolute invisible peer"
            type="radio"
            name="type"
            id="chair"
            value="chair"
            checked={value === 'chair'}
            onChange={(e) => handleChange(e.target.value)}
          />
          <label
            htmlFor="chair"
            className="cursor-pointer peer-checked:bg-primary-500/15 peer-checked:text-primary-500 peer-checked:border-primary-500/50  flex items-center justify-center py-2 border border-gray-200 rounded-lg text-lg text-center font-medium"
          >
            chair
          </label>
        </div>
      </div>
    </div>
  )
}
