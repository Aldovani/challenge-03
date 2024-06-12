import { ReactNode } from 'react'

type PaginationItemProps = {
  active: boolean
  children: ReactNode
  onClick: () => void
}
export function PaginationItem({
  active,
  children,
  onClick,
}: PaginationItemProps) {
  return (
    <button
      data-active={active}
      onClick={onClick}
      className="font-poppins text-xl data-[active='true']:bg-primary-500  data-[active='true']:text-white size-[3.75rem]  font-medium  rounded-[0.625rem] bg-primary-100  flex items-center justify-center hover:bg-primary-500 hover:text-white transition-colors"
    >
      {children}
    </button>
  )
}
