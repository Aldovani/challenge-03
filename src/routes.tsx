import { Route, Routes } from 'react-router-dom'

import { DefaultLayout } from './layouts/default-layout'
import { AuthLayout } from './layouts/auth-layout'

import { HomePage } from './pages/home'
import { NotFoundPage } from './pages/not-found'
import { ProductDetailsPage } from './pages/shop/id'
import { SignInPage } from './pages/auth/sign-in'
import { CheckoutSuccessPage } from './pages/checkout/success'
import { CheckoutPage } from './pages/checkout'
import { CartPage } from './pages/cart'
import { ContactPage } from './pages/contact'
import { ShopPage } from './pages/shop'
import { ProductNotFoundPage } from './pages/shop/not-found'
import { HistoryPage } from './pages/historical'

import { PrivateRouter } from './components/private-router'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route element={<DefaultLayout />}>
        <Route path="/shop/:id" element={<ProductDetailsPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route
          path="/check-out"
          element={
            <PrivateRouter to="/auth/sign-in?redirectUrl=/check-out">
              <CheckoutPage />
            </PrivateRouter>
          }
        />
      </Route>
      <Route path="/shop/not-found" element={<ProductNotFoundPage />} />

      <Route element={<AuthLayout />}>
        <Route path="/auth/sign-in" element={<SignInPage />} />
      </Route>

      <Route
        path="/check-out/success/:id"
        element={
          <PrivateRouter to="/auth/sign-in">
            <CheckoutSuccessPage />
          </PrivateRouter>
        }
      />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
