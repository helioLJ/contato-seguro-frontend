import React from 'react'
import ReactDOM from 'react-dom/client'

import './global.css'

import { UserForm } from './pages/UserForm'
import { CompanyForm } from './pages/CompanyForm'
import { RegisterForm } from './pages/RegisterForm'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <UserForm /> */}
    {/* <CompanyForm /> */}
    <RegisterForm />
  </React.StrictMode>,
)
