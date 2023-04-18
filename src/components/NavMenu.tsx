import { NavLink } from 'react-router-dom'
import './NavMenu.css'

export function NavMenu() {
  return (
    <header className='navmenu'>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Lista</NavLink>
          </li>
          <li>
            <NavLink to="/users" >Usuários</NavLink>
          </li>
          <li>
            <NavLink to="/companies" >Empresas</NavLink>
          </li>
          <li>
            <NavLink to="/register" >Registros</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}