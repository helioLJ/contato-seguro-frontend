import Logo from '../assets/logo.png'
import { NewUserModal } from '../components/NewUserModal'
import { UserRow } from '../components/UserRow'
import './UserForm.css'
import { Plus } from '@phosphor-icons/react'
import { api } from '../services/api'
import { useEffect, useState } from 'react'

interface UserObject {
  birthday: string
  created_at: string
  email: string
  hometown: string
  id: number
  name: string
  phone: number
  updated_at: string
}

export function UserForm() {
  const [users, setUsers] = useState<UserObject[]>([])
  const [inserting, setInserting] = useState(false)

  function handleInsertModal() {
    setInserting(!inserting)
  }

  async function fetchUsers() {
    const { data } = await api.get("/users")
    setUsers(data)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <div className="userContainer">
      <img src={Logo} alt="Logo da Contato Seguro" />

      <div className="search-bar">
        <button
          onClick={handleInsertModal}
        >
          <Plus size={22} color="#f5f7f3" weight="bold" />
        </button>

        {inserting &&
          <NewUserModal
            handleCloseModal={handleInsertModal}
            handleUpdate={fetchUsers}
          />
        }

        <input placeholder="Buscar..." type="text" />

        <select>
          <option value="name">Nome</option>
        </select>
      </div>

      {/* <NewUserModal /> */}
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
          {
            users.map(user => (
              <UserRow
                key={user.id}
                id={user.id}
                name={user.name}
                email={user.email}
                phone={user.phone}
                birthday={user.birthday}
                hometown={user.hometown}
                handleUpdate={fetchUsers}
              />
            ))
          }
        </tbody>
      </table>

    </div>
  )
}