import { AuthContextProvider } from '../contexts/auth'

type AuthProviderProps = {
  children?: React.ReactNode
}
export function AuthProvider({ children }: AuthProviderProps) {
  return <AuthContextProvider>{children}</AuthContextProvider>
}
