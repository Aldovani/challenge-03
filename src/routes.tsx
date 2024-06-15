import { createBrowserRouter } from 'react-router-dom'
import { DefaultLayout } from './layouts/default-layout'

import { HomePage } from './pages/home'
import { ShopPage } from './pages/shop'
import { ProductDetailsPage } from './pages/shop/name'
import { ContactPage } from './pages/contact/'
import { CartPage } from './pages/cart'
import { CheckoutPage } from './pages/checkout'
import { AuthLayout } from './layouts/auth-layout'
import { SignInPage } from './pages/auth/sign-in'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      { element: <HomePage />, path: '/' },
      { element: <ShopPage />, path: '/shop' },
      { element: <ProductDetailsPage />, path: '/shop/:name' },
      { element: <ContactPage />, path: '/contact' },
      { element: <CartPage />, path: '/cart' },
      { element: <CheckoutPage />, path: '/check-out' },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [{ element: <SignInPage />, path: '/auth/sign-in' }],
  },
])
