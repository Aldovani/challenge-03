import { useState } from 'react'
import { ActiveLink } from '../active-link'

export function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function handleToggleMenu() {
    setIsMenuOpen((prev) => !prev)
  }
  function handleCloseMenu() {
    setIsMenuOpen(false)
  }

  return (
    <div className="lg:hidden ">
      <button
        onClick={handleToggleMenu}
        className="w-[28px] sm:w-[40px] flex flex-col gap-1.5"
      >
        <span className="w-full block h-1 bg-gray-200"></span>
        <span className="w-full block h-1 bg-gray-200"></span>
        <span className="w-full block h-1 bg-gray-200"></span>
      </button>
      <nav
        data-open={isMenuOpen}
        className=" data-[open='true']:translate-x-0 translate-x-full fixed bg-white inset-0 h-full "
      >
        <ul className=" flex flex-col gap-8 items-center h-full justify-center">
          <li>
            <ActiveLink onClick={handleCloseMenu} to="/" className="text-5xl">
              Home
            </ActiveLink>
          </li>
          <li>
            <ActiveLink
              onClick={handleCloseMenu}
              to="/shop"
              className="text-5xl"
            >
              Shop
            </ActiveLink>
          </li>
          <li>
            <ActiveLink
              onClick={handleCloseMenu}
              to="/about"
              className="text-5xl"
            >
              About
            </ActiveLink>
          </li>
          <li>
            <ActiveLink
              onClick={handleCloseMenu}
              to="/contact"
              className="text-5xl"
            >
              Contact
            </ActiveLink>
          </li>
          <li>
            <ActiveLink
              onClick={handleCloseMenu}
              to="/auth/sign-in"
              className="text-5xl"
            >
              Login
            </ActiveLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}
