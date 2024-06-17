import { RouterProvider } from 'react-router-dom'
import { AuthProvider } from './auth-provider'
import { Provider as ReduxProvider } from 'react-redux'

import { router } from '../routes'
import { store } from '../stores'

export function Providers() {
  return (
    <ReduxProvider store={store}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ReduxProvider>
  )
}
