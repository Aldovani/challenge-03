import React from 'react'
import ReactDOM from 'react-dom/client'

import './libs/firebase'
import './index.css'

import { App } from './app'
import { enableMSW } from './services/api/mocks'

enableMSW().then(() =>
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  ),
)
