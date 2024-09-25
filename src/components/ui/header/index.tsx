import type { ComponentProps } from 'react'
import { useAuth } from '@/hooks/use-auth'

import { NavLink } from 'react-router-dom'
import { tv, VariantProps } from 'tailwind-variants'
import { useHeader } from './useHeader'
import { Heart, Search } from 'lucide-react'

import { UserMenu } from './components/user-menu'
import { Cart } from './components/cart'
import { MobileMenu } from './components/navigation/mobile-menu'
import { Navigation } from './components/navigation'
import { Logo } from '@/components/ui/logo'

const header = tv({
  base: ' py-8 z-[90]  fixed shadow-sm bg-white w-full px-8 transition-all',
  variants: {
    transparent: {
      true: ' bg-transparent relative z-30 shadow-none   [&_.buttons_>_button]:text-zinc-300  [&_.buttons_>_button:hover]:text-zinc-50',
    },
  },
})

type Header = ComponentProps<'header'> &
  VariantProps<typeof header> & {
    logo?: string
  }

export function Header({ className, transparent, ...props }: Header) {
  const { isAuthenticated } = useAuth()
  const { headerRef } = useHeader()
  return (
    <header
      ref={headerRef}
      {...props}
      className={header({ className, transparent })}
    >
      <div className="container mx-auto  flex items-center justify-between ">
        <NavLink to="/">
          <Logo variants={transparent ? 'white' : 'black'} />
        </NavLink>

        <Navigation isTransparent={transparent} />

        <div className="flex lg:gap-6 gap-4  justify-center items-center">
          <div className="flex gap-5 buttons ">
            <button
              type="button"
              className="text-zinc-400 sm:block hidden  hover:text-zinc-900"
            >
              <Search />
            </button>
            <button
              type="button"
              className="text-zinc-400  sm:block hidden hover:text-zinc-900"
            >
              <Heart />
            </button>
            <Cart />
          </div>
          <span className="hidden sm:block h-8 w-[1px] bg-zinc-200" />
          <div>
            {isAuthenticated && <UserMenu />}
            {!isAuthenticated && (
              <NavLink
                to="/auth/sign-in"
                className={
                  transparent
                    ? 'font-semibold text-zinc-300 hover:text-zinc-50 sm:block hidden'
                    : 'font-semibold text-zinc-400 hover:text-zinc-900 sm:block hidden'
                }
              >
                Login
              </NavLink>
            )}
          </div>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
