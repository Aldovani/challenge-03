import { useUserMenu } from './useUserMenu'

export function UserMenu() {
  const { isMenuOpen, user, containerRef, handleToggle, singOut } =
    useUserMenu()

  if (!user) return null

  return (
    <div ref={containerRef} className="relative">
      <button onClick={handleToggle}>
        <img
          src={user.photoURL || ''}
          alt=""
          className="size-10 rounded-full"
        />
      </button>

      <div
        data-is-open={isMenuOpen}
        className="right-0 shadow-md bg-white rounded-lg  data-[is-open='false']:opacity-0 data-[is-open='false']:invisible  absolute opacity-100 visible"
      >
        <ul>
          <li className="py-4 pl-8 pr-12 hover:bg-gray-50 cursor-pointer rounded-t-lg">
            Favorites
          </li>
          <li className="py-4 pl-8 pr-12 hover:bg-gray-50 cursor-pointer">
            Compras
          </li>
          <li className="py-4 pl-8 pr-12 hover:bg-gray-50 cursor-pointer rounded-b-lg">
            <button onClick={singOut}>Sign-out</button>
          </li>
        </ul>
      </div>
    </div>
  )
}
