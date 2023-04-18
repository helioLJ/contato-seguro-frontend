import Logo from '../assets/logo.png'
import { DeleteModal } from '../components/DeleteModal'
import { EditUserModal } from '../components/EditUserModal'
import { NewUserModal } from '../components/NewUserModal'
import { UserRow } from '../components/UserRow'
import './UserForm.css'
import { Plus } from '@phosphor-icons/react'

export function UserForm() {
  return (
    <div className="userContainer">
      <img src={Logo} alt="Logo da Contato Seguro" />

      <div className="search-bar">
        <button>
          <Plus size={22} color="#f5f7f3" weight="bold" />
        </button>

        <input placeholder="Buscar..." type="text" />

        <select>
          <option value="name">Nome</option>
        </select>
      </div>

      {/* <NewUserModal /> */}
      {/* <EditUserModal /> */}
      {/* <DeleteModal /> */}

      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Nascimento</th>
            <th>Cidade</th>
            <th> </th>
          </tr>
        </thead>

        <tbody>
          <UserRow />
        </tbody>
      </table>

    </div>
  )
}