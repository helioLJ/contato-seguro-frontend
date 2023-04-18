import Logo from '../assets/logo.png'
import { NewRegisterModal } from '../components/NewRegisterModal'
import { RegisterRow } from '../components/RegisterRow'
import './RegisterForm.css'
import { Plus } from '@phosphor-icons/react'

export function RegisterForm() {
  return (
    <div className="registerContainer">
      <img src={Logo} alt="Logo da Contato Seguro" />

      <div className="search-bar">
        <button>
          <Plus size={22} color="#f5f7f3" weight="bold" />
        </button>

        <input placeholder="Buscar..." type="text" />
      </div>

      {/* <NewRegisterModal /> */}
      {/* <DeleteModal /> */}

      <table>
        <thead>
          <tr>
            <th>Usuário</th>
            <th>Empresa</th>
            <th>Data de Registro</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          <RegisterRow />
        </tbody>
      </table>

    </div>
  )
}