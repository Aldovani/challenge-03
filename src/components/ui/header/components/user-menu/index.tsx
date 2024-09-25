import { Link } from 'react-router-dom'
import { useUserMenu } from './useUserMenu'

export function UserMenu() {
  const { isMenuOpen, user, containerRef, handleToggle, singOut } =
    useUserMenu()

  if (!user) return null

  return (
    <div ref={containerRef} className="relative">
      <button type="button" onClick={handleToggle}>
        <img
          src={user.photoURL || ''}
          alt={`${user.displayName} avatar`}
          className="size-10 rounded-full hover:brightness-75 transition-all "
        />
      </button>

      <div
        data-is-open={isMenuOpen}
        className="right-0 translate-y-[10px] shadow-md bg-white  data-[is-open='false']:opacity-0 data-[is-open='false']:invisible  absolute opacity-100 visible"
      >
        <ul>
          <li>
            <Link
              onClick={() => {
                handleToggle()
              }}
              to="/history"
              className="py-4 block pl-8 pr-12 hover:bg-gray-50 cursor-pointer"
            >
              History
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                handleToggle()
              }}
              to="/history"
              className="py-4 block pl-8 pr-12 hover:bg-gray-50 cursor-pointer"
            >
              Favoritos
            </Link>
          </li>
          <li className="py-4 pl-8 pr-12 hover:bg-gray-50 cursor-pointer rounded-b-lg">
            <button
              type="button"
              onClick={singOut}
              className="whitespace-nowrap"
            >
              Sign-out
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}
