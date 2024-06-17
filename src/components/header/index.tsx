import { NavLink } from 'react-router-dom'
import { ActiveLink } from './active-link'
import { useAuth } from '../../hooks/useAuth'
import { UserMenu } from './user-menu/'
import { Cart } from '../cart'
import { useState } from 'react'
import { MobileMenu } from './mobile-menu'
import { ICONS } from '../../assets/icons'
import { MenuCartButton } from './button-menu-cart'

export function Header() {
  const { user } = useAuth()

  const [isCartOpen, setIsOpenCat] = useState(false)
  function handleOpenCart() {
    setIsOpenCat(true)
  }
  function handleCloseCart() {
    setIsOpenCat(false)
  }

  return (
    <header className="py-8 z-50 fixed bg-white w-full max-sm:px-8">
      <div className="container mx-auto  flex items-center justify-between">
        <NavLink to="/" className="max-sm:w-32">
          <img src={ICONS.logo} alt="Furniro logo" />
        </NavLink>
        <nav className="max-lg:hidden">
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
        <div className="flex lg:gap-8 gap-4   items-center">
          {!user && (
            <NavLink to="/auth/sign-in">
              <img
                src={ICONS.user}
                alt="user icon sign-in"
                className="size-7"
              />
            </NavLink>
          )}

          {user && <UserMenu />}
          <div>
            <MenuCartButton onOpenCart={handleOpenCart} />
            <Cart isOpen={isCartOpen} onClose={handleCloseCart} isOpening />
          </div>

          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
