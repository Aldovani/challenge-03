import React from 'react'
import ReactDOM from 'react-dom/client'

import './libs/firebase'
import './index.css'

import { Providers } from './providers'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers />
  </React.StrictMode>,
)
