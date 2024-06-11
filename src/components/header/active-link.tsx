import { NavLink, NavLinkProps } from 'react-router-dom'

type ActiveLinkProps = NavLinkProps

export function ActiveLink({ children, to, ...props }: ActiveLinkProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? 'text-primary-500 font-medium'
          : 'text-black font-medium hover:text-primary-500 transition-colors'
      }
      {...props}
    >
      {children}
    </NavLink>
  )
}
