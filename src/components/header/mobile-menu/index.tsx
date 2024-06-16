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
      <button onClick={handleToggleMenu} className="flex flex-col gap-1 ">
        <span className="block w-8   h-0.5 bg-gray-300"></span>
        <span className="block w-8 h-0.5 bg-gray-300"></span>
        <span className="block w-8 h-0.5 bg-gray-300"></span>
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
        </ul>
      </nav>
    </div>
  )
}
