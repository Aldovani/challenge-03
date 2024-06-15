import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <>
      <div className="grid lg:grid-cols-[60%_40%] overflow-y-hidden min-h-screen ">
        <div className="hidden lg:block bg-[url(/auth-background.png)] h-full bg-[100%] bg-cover"></div>
        <Outlet />
      </div>
    </>
  )
}
