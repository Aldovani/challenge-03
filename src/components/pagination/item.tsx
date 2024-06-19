type PaginationItemProps = {
  active?: boolean
  number: number
  onPageChange: (page: number) => void
}
export function PaginationItem({
  active,
  number,
  onPageChange,
}: PaginationItemProps) {
  return (
    <button
      data-active={active}
      onClick={() => onPageChange(number)}
      className="font-poppins text-xl data-[active='true']:bg-primary-500  data-[active='true']:text-white size-[3.75rem]  font-medium  rounded-[0.625rem] bg-primary-100  flex items-center justify-center hover:bg-primary-500 hover:text-white transition-colors"
    >
      {number}
    </button>
  )
}
