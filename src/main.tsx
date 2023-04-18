import React from 'react'
import ReactDOM from 'react-dom/client'

import './global.css'

import { UserForm } from './pages/UserForm'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UserForm />
  </React.StrictMode>,
)
