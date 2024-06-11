import { createBrowserRouter } from 'react-router-dom'
import { DefaultLayout } from './layouts/default-layout'

import { HomePage } from './pages/home'
import { ShopPage } from './pages/shop'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      { element: <HomePage />, path: '/' },
      { element: <ShopPage />, path: '/shop' },
    ],
  },
])
