import { Outlet } from 'react-router-dom'
import { Footer } from '@components/ui/footer'
import { Header } from '@components/ui/header'

export function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
