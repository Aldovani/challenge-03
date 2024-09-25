type OtherSectionFormProps = {
  value: string
  handleChange: (value: string) => void
}

export function OtherSectionForm({
  handleChange,
  value,
}: OtherSectionFormProps) {
  return (
    <section className="mt-6">
      <h3 className="text-zinc-400 font-medium">Others</h3>
      <div className="flex flex-col gap-5 mt-3">
        <div className="relative flex gap-2 items-center">
          <input
            className="peer accent-zinc-900"
            type="radio"
            id="New"
            name="other"
            value="isNew"
            checked={value === 'isNew'}
            onChange={(e) => handleChange(e.target.value)}
          />
          <label htmlFor="New">New</label>
        </div>
        <div className="relative flex gap-2 items-center">
          <input
            className="peer accent-zinc-900"
            type="radio"
            name="other"
            id="discount"
            value="isOnSales"
            checked={value === 'isOnSales'}
            onChange={(e) => handleChange(e.target.value)}
          />
          <label htmlFor="discount">in Discount</label>
        </div>
      </div>
    </section>
  )
}
