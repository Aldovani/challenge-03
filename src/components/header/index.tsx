import { NavLink } from 'react-router-dom'
import { ActiveLink } from './active-link'
import { useAuth } from '../../hooks/useAuth'
import { UserMenu } from './user-menu/'
import { Cart } from '../cart'
import { ComponentProps, useState } from 'react'
import { MobileMenu } from './mobile-menu'
import { ICONS } from '../../assets/icons'
import { MenuCartButton } from './button-menu-cart'
import { tv, VariantProps } from 'tailwind-variants'

const header = tv({ base: 'py-8 z-50 fixed bg-white w-full max-sm:px-8' })

type Header = ComponentProps<'header'> &
  VariantProps<typeof header> & {
    logoUrl?: string
  }

export function Header({ className, logoUrl }: Header) {
  const { user } = useAuth()

  const [isCartOpen, setIsOpenCat] = useState(false)
  function handleOpenCart() {
    setIsOpenCat(true)
  }
  function handleCloseCart() {
    setIsOpenCat(false)
  }

  return (
    <header className={header({ className })}>
      <div className="container mx-auto  flex items-center justify-between">
        <NavLink to="/" className="max-sm:w-32">
          <img src={logoUrl || ICONS.logo} alt="Furniro logo" />
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
        <div className="flex lg:gap-8 gap-4  justify-center items-center">
          {!user && (
            <NavLink to="/auth/sign-in" className="hover:opacity-50 ">
              <img
                src={ICONS.user}
                alt="user icon sign-in"
                className="size-7"
              />
            </NavLink>
          )}

          {user && <UserMenu />}

          <MenuCartButton onOpenCart={handleOpenCart} />
          <Cart isOpen={isCartOpen} onClose={handleCloseCart} isOpening />

          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
