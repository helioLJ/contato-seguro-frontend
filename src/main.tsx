import React from 'react'
import ReactDOM from 'react-dom/client'

import './global.css'

import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes/app.routes'
import { NavMenu } from './components/NavMenu'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavMenu />
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>,
)
