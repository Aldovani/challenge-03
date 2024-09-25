import { AuthProvider } from './auth-provider'
import { Provider as ReduxProvider } from 'react-redux'

import { store } from '../stores'
type ProvidersProps = {
  children?: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ReduxProvider store={store}>
      <AuthProvider>{children}</AuthProvider>
    </ReduxProvider>
  )
}
