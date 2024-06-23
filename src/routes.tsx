import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/default-layout'

import { HomePage } from './pages/home'
import { NotFoundPage } from './pages/not-found'
import { ProductDetailsPage } from './pages/shop/id'
import { AuthLayout } from './layouts/auth-layout'
import { SignInPage } from './pages/auth/sign-in'
import { CheckoutSuccessPage } from './pages/checkout/success'
import { CheckoutPage } from './pages/checkout'
import { PrivateRouter } from './components/private-router'
import { CartPage } from './pages/cart'
import { ContactPage } from './pages/contact'
import { ShopPage } from './pages/shop'

export function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop/:id" element={<ProductDetailsPage />} />
        {/* <Route path="/shop" element={<ShopPage />} /> */}
        {/* <Route path="/contact" element={<ContactPage />} /> */}
        <Route path="/cart" element={<CartPage />} />
        <Route
          path="/check-out"
          element={
            <PrivateRouter to="/auth/sign-in?redirectUrl=/check-out">
              <CheckoutPage />
            </PrivateRouter>
          }
        />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="/auth/sign-in" element={<SignInPage />} />
      </Route>

      <Route path="/check-out/success" element={<CheckoutSuccessPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
