import { NavLink, NavLinkProps } from 'react-router-dom'

type ActiveLinkProps = NavLinkProps

export function ActiveLink({
  children,
  to,
  className,
  ...props
}: ActiveLinkProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? `text-primary-500 font-medium ${className}`
          : `text-black font-medium hover:text-primary-500 transition-colors ${className}`
      }
      {...props}
    >
      {children}
    </NavLink>
  )
}
