import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/default-layout'

import { HomePage } from './pages/home'
import { ShopPage } from './pages/shop'
import { ProductDetailsPage } from './pages/shop/name'
import { ContactPage } from './pages/contact/'
import { CartPage } from './pages/cart'
import { AuthLayout } from './layouts/auth-layout'
import { SignInPage } from './pages/auth/sign-in'
import { CheckoutPage } from './pages/checkout/'
import { CheckoutSuccessPage } from './pages/checkout/success'

export function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop/:name" element={<ProductDetailsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/check-out" element={<CheckoutPage />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="/auth/sing-in" element={<SignInPage />} />
      </Route>

      <Route path="/check-out/success" element={<CheckoutSuccessPage />} />
    </Routes>
  )
}
