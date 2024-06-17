import React from 'react'
import ReactDOM from 'react-dom/client'

import './libs/firebase'
import './index.css'

import { Providers } from './providers'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Providers>
        <Router />
      </Providers>
    </BrowserRouter>
  </React.StrictMode>,
)
