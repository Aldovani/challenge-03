import { Outlet } from 'react-router-dom'
import { IMAGES } from '../assets/images'

export function AuthLayout() {
  return (
    <>
      <div
        data-testid="auth-layout"
        className="grid lg:grid-cols-[60%_40%] overflow-y-hidden min-h-screen "
      >
        <div
          style={{ backgroundImage: `url(${IMAGES['auth-background']})` }}
          className="hidden lg:block h-full bg-[100%] bg-cover"
        ></div>
        <Outlet />
      </div>
    </>
  )
}
