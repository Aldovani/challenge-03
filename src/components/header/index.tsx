import { NavLink } from 'react-router-dom'
import { ActiveLink } from './active-link'

export function Header() {
  return (
    <header className="py-8 z-50 fixed bg-white w-full">
      <div className="container mx-auto  flex  justify-between">
        <NavLink to="/">
          <img src="/logo.svg" alt="" />
        </NavLink>
        <nav>
          <ul className="flex  gap-x-6 lg:gap-x-[4.5rem]">
            <li>
              <ActiveLink to="/">Home</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/shop">Shop</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/about">About</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/contact">Contact</ActiveLink>
            </li>
          </ul>
        </nav>
        <div className="flex gap-8">
          <NavLink to="/sing">
            <img src="/user.svg" alt="" className="size-7" />
          </NavLink>
          <img src="/shopping-cart.svg" alt="" className="size-7" />
        </div>
      </div>
    </header>
  )
}
