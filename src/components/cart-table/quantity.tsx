export function Quantity() {
  return (
    <div className="w-fit flex items-center  gap-6  border border-gray-200 rounded-[10px]">
      <button className="py-4 px-3 hover:bg-primary-100 rounded-l-[10px]">
        -
      </button>
      <span>1</span>
      <button className="p-4   hover:bg-primary-100 rounded-r-[10px]">+</button>
    </div>
  )
}
