import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/default-layout'

import { HomePage } from './pages/home'
import { ShopPage } from './pages/shop'
import { ProductDetailsPage } from './pages/shop/id'
import { ContactPage } from './pages/contact/'
import { CartPage } from './pages/cart'
import { AuthLayout } from './layouts/auth-layout'
import { SignInPage } from './pages/auth/sign-in'
import { CheckoutPage } from './pages/checkout/'
import { CheckoutSuccessPage } from './pages/checkout/success'
import { NotFoundPage } from './pages/not-found'
import { PrivateRouter } from './components/private-router'

export function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop/:id" element={<ProductDetailsPage />} />
        <Route path="/contact" element={<ContactPage />} />
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
