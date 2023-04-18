import { useEffect, useState } from 'react'
import Logo from '../assets/logo.png'
import { NewRegisterModal } from '../components/NewRegisterModal'
import { RegisterRow } from '../components/RegisterRow'
import './RegisterForm.css'
import { Plus } from '@phosphor-icons/react'
import { api } from '../services/api'

interface RegisterObject {
  id: number
  created_at: string
  user: {
    id: number,
    name: string
  }
  company: {
    id: number,
    name: string
  }
}

export function RegisterForm() {
  const [registers, setRegisters] = useState<RegisterObject[]>([])
  const [inserting, setInserting] = useState(false)
  const [queryName, setQueryName] = useState("userName")
  const [queryValue, setQueryValue] = useState("")

  function handleInsertModal() {
    setInserting(!inserting)
  }

  async function fetchRegisters() {
    const { data } = await api.get("/register")
    setRegisters(data)
  }

  useEffect(() => {
    fetchRegisters()
  }, [])

  useEffect(() => {
    async function fetchRegistersQuery(paramName: string, paramValue: string) {
      const { data } = await api.get(`/register?${paramName}=${paramValue}`)
      setRegisters(data)
    }

    fetchRegistersQuery(queryName, queryValue)
  }, [queryName, queryValue])

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

interface CompanyObject {
  address: string
  cnpj: string
  created_at: string
  id: number
  name: string
  updated_at: string
}
const [users, setUsers] = useState<UserObject[]>([])
  const [companies, setCompanies] = useState<CompanyObject[]>([])

  async function fetchUsers() {
    const { data } = await api.get("/users")
    setUsers(data)
    console.log(data);
  }

  async function fetchCompanies() {
    const { data } = await api.get("/companies")
    setCompanies(data)
    console.log(data);
  }

  useEffect(() => {
    fetchUsers()
    fetchCompanies()
  }, [])

  return (
    <div className="registerContainer">
      <img src={Logo} alt="Logo da Contato Seguro" />

      <div className="search-bar">
        <button
          onClick={handleInsertModal}
        >
          <Plus size={22} color="#f5f7f3" weight="bold" />
        </button>

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
          <option value="userName">Nome</option>
          <option value="companyName">Empresa</option>
        </select>
      </div>

      {inserting &&
        <NewRegisterModal
          handleCloseModal={handleInsertModal}
          handleUpdate={fetchRegisters}
        />
      }

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
          {
            registers.map(register => (
              <RegisterRow
                key={register.id}
                id={register.id}
                user={register.user.name}
                company={register.company.name}
                created_at={register.created_at}
                handleUpdate={fetchRegisters}
              />
            ))
          }
        </tbody>
      </table>

    </div>
  )
}