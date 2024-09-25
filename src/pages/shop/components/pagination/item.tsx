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
      className="text-zinc-900 text-base sm:text-xl data-[active='true']:bg-zinc-900  data-[active='true']:text-white sm:size-[3.75rem] size-[2.5rem]  font-medium   bg-zinc-200  flex items-center justify-center hover:bg-zinc-900 hover:text-white transition-colors"
    >
      {number}
    </button>
  )
}
