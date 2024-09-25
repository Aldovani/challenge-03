import { ActiveLink } from './active-link'

type NavigationProps = {
  isTransparent?: boolean
}

export function Navigation({ isTransparent }: NavigationProps) {
  return (
    <nav className="max-lg:hidden">
      <ul className="flex  gap-x-6 lg:gap-x-[4.5rem]">
        <li>
          <ActiveLink isTransparent={isTransparent} to="/">
            Home
          </ActiveLink>
        </li>
        <li>
          <ActiveLink isTransparent={isTransparent} to="/shop">
            Shop
          </ActiveLink>
        </li>
        <li>
          <ActiveLink isTransparent={isTransparent} to="/about">
            About
          </ActiveLink>
        </li>
        <li>
          <ActiveLink isTransparent={isTransparent} to="/contact">
            Contact
          </ActiveLink>
        </li>
      </ul>
    </nav>
  )
}
