type TypeSectionFormProps = {
  value: string
  handleChange: (value: string) => void
}

export function TypeSectionForm({ handleChange, value }: TypeSectionFormProps) {
  return (
    <div className="border-b border-zinc-200 pb-6 mt-6">
      <h3 className="text-zinc-400 font-medium">Type</h3>
      <div className="flex flex-col gap-4 mt-3">
        <div className="relative flex gap-2 items-center">
          <input
            className="peer accent-zinc-900"
            type="radio"
            name="type"
            id="sofas"
            value="sofas"
            checked={value === 'sofas'}
            onChange={(e) => handleChange(e.target.value)}
          />
          <label htmlFor="sofas">Sofas</label>
        </div>
        <div className="relative flex gap-2 items-center">
          <input
            className=" peer accent-zinc-900"
            type="radio"
            name="type"
            id="armchair"
            value="armchairs"
            checked={value === 'armchairs'}
            onChange={(e) => handleChange(e.target.value)}
          />
          <label htmlFor="armchair">Armchair</label>
        </div>
        <div className="relative flex gap-2 items-center">
          <input
            className=" peer accent-zinc-900"
            type="radio"
            name="type"
            id="chair"
            value="chairs"
            checked={value === 'chairs'}
            onChange={(e) => handleChange(e.target.value)}
          />
          <label htmlFor="chair">chair</label>
        </div>
      </div>
    </div>
  )
}
