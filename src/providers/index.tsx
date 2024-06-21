import { AuthProvider } from './auth-provider'
import { Provider as ReduxProvider } from 'react-redux'

import { persistor, store } from '../stores'
import { PersistGate } from 'redux-persist/lib/integration/react'

type ProvidersProps = {
  children?: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <AuthProvider>{children}</AuthProvider>
      </PersistGate>
    </ReduxProvider>
  )
}
