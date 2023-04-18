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
  const [queryName, setQueryName] = useState("name")
  const [queryValue, setQueryValue] = useState("")

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

  useEffect(() => {
    async function fetchUsersQuery(paramName: string, paramValue: string) {
      const { data } = await api.get(`/users?${paramName}=${paramValue}`)
      setUsers(data)
    }

    fetchUsersQuery(queryName, queryValue)
  }, [queryName, queryValue])

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

        <input
          placeholder="Buscar..."
          type="text"
          value={queryValue}
          onChange={(e) => setQueryValue(e.target.value)}
        />

        <select
          value={queryName}
          onChange={(e) => setQueryName(e.target.value)}
        >
          <option value="name">Nome</option>
          <option value="email">E-mail</option>
          <option value="phone">Telefone</option>
          <option value="birthday">Data de nascimento</option>
          <option value="hometown">Cidade onde nasceu</option>
        </select>
      </div>

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