import { RouterProvider } from 'react-router-dom'
import { AuthProvider } from './auth-provider'
import { router } from '../routes'

export function Providers() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}
