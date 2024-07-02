import { Outlet } from 'react-router-dom'
import AuthLayoutBG from '../assets/auth-layout.png'

export function AuthLayout() {
  return (
    <>
      <div
        data-testid="auth-layout"
        className="grid lg:grid-cols-[50%_50%] overflow-y-hidden min-h-screen "
      >
        <Outlet />

        <div
          style={{ backgroundImage: `url(${AuthLayoutBG})` }}
          className="hidden lg:block h-full bg-[100%] bg-cover"
        ></div>
      </div>
    </>
  )
}
