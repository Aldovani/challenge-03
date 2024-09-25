import { NavLink } from 'react-router-dom'
import type { NavLinkProps } from 'react-router-dom'

type ActiveLinkProps = NavLinkProps & {
  isTransparent?: boolean
}

export function ActiveLink({
  children,
  to,
  className,
  isTransparent,
  ...props
}: ActiveLinkProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isTransparent
          ? isActive
            ? ` !text-zinc-50 !font-bold  ${className}`
            : `text-zinc-300 font-semibold  hover:text-zinc-50 transition-colors ${className}`
          : isActive
            ? ` !text-zinc-600 !font-bold  ${className}`
            : `text-zinc-400 font-semibold  hover:text-zinc-600 transition-colors ${className}`
      }
      {...props}
    >
      {children}
    </NavLink>
  )
}
