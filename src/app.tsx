import { Providers } from './providers'
import { ScrollToTop } from './components/scroll-to-top'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'sonner'
import { Router } from './routes'

export function App() {
  return (
    <BrowserRouter>
      <Providers>
        <Router />
        <ScrollToTop />
        <Toaster expand={true} />
      </Providers>
    </BrowserRouter>
  )
}
