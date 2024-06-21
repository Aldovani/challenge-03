import { Navigate } from 'react-router-dom'
import { useAuth } from '../../hooks/use-auth'

type PrivateRouterProps = {
  children: React.ReactNode
  to?: string
}
export function PrivateRouter({ children, to }: PrivateRouterProps) {
  const { user } = useAuth()
  console.log({ user })
  if (!user) return <Navigate to={to || '/auth/sign-in'} />

  return <>{children}</>
}
