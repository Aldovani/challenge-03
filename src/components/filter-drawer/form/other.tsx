type OtherSectionFormProps = {
  value: string
  handleChange: (value: string) => void
}

export function OtherSectionForm({
  handleChange,
  value,
}: OtherSectionFormProps) {
  return (
    <section>
      <h3 className="text-gray-300 font-semibold mt-4">OTHER</h3>
      <div className="flex flex-col gap-5 mt-3">
        <div className="relative">
          <input
            className="opacity-0 absolute invisible peer"
            type="radio"
            id="New"
            name="other"
            value="isNew"
            checked={value === 'isNew'}
            onChange={(e) => handleChange(e.target.value)}
          />
          <label
            className="cursor-pointer peer-checked:bg-primary-500/15 peer-checked:text-primary-500 peer-checked:border-primary-500/50  flex items-center justify-center py-2 border border-gray-200 rounded-lg text-lg text-center font-medium"
            htmlFor="New"
          >
            New
          </label>
        </div>
        <div className="relative">
          <input
            className="opacity-0 absolute invisible peer"
            type="radio"
            name="other"
            id="discount"
            value="isOnSales"
            checked={value === 'isOnSales'}
            onChange={(e) => handleChange(e.target.value)}
          />
          <label
            className="cursor-pointer peer-checked:bg-primary-500/15 peer-checked:text-primary-500 peer-checked:border-primary-500/50  flex items-center justify-center py-2 border border-gray-200 rounded-lg text-lg text-center font-medium"
            htmlFor="discount"
          >
            in Discount
          </label>
        </div>
      </div>
    </section>
  )
}
