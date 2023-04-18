import Logo from '../assets/logo.png'
import { DeleteModal } from '../components/DeleteModal'
import { EditUserModal } from '../components/EditUserModal'
import { NewUserModal } from '../components/NewUserModal'
import './UserForm.css'
import { NotePencil, Plus, Trash } from '@phosphor-icons/react'

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
          <tr>
            <td>Fulano</td>
            <td>fulano@example.com</td>
            <td>(51) 98888-8888</td>
            <td>13/08/2021</td>
            <td>Porto Alegre</td>

            <td className="buttons">
              <button >
                <NotePencil size={22} color="#f5f7f3" weight="bold" />
              </button>
              <button >
                <Trash size={22} color="#f5f7f3" weight="bold" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  )
}