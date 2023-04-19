import { useEffect, useState } from 'react'
import Logo from '../assets/logo.png'
import { ListRow } from '../components/ListRow'
import './Home.css'
import { api } from '../services/api'

interface ListObject {
  companies: string[]
  user: {
    birthday: string
    email: string
    hometown: string
    name: string
    phone: number
  }
}

export function Home() {
  const [list, setList] = useState<ListObject[]>([])
  const [queryName, setQueryName] = useState("name")
  const [queryValue, setQueryValue] = useState("")

  async function fetchList() {
    const { data } = await api.get("/register/list")
    setList(data)
  }

  useEffect(() => {
    fetchList()
  }, [])

  useEffect(() => {
    async function fetchListQuery(paramName: string, paramValue: string) {
      const { data } = await api.get(`/register/list?${paramName}=${paramValue}`)
      setList(data)
    }

    fetchListQuery(queryName, queryValue)
  }, [queryName, queryValue])

  return (
    <div className="homeContainer">
      <img src={Logo} alt="Logo da Contato Seguro" />
      <h2>Lista de Usuários e Empresas</h2>

      <div className="search-bar">
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
          <option value="company">Empresa</option>
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
            <th>Empresas</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Nascimento</th>
            <th>Cidade</th>
          </tr>
        </thead>
        <tbody>
          {
            list.length === 0 ?
              (
                <tr>
                  <td>Adicione Usuários, Empresas e Registros pra que apareça aqui!</td>
                </tr>
              ) :
              list.map(item => (
                <ListRow
                  key={item.user.email}
                  name={item.user.name}
                  companies={item.companies}
                  email={item.user.email}
                  phone={item.user.phone}
                  birthday={item.user.birthday}
                  hometown={item.user.hometown}
                  handleUpdate={fetchList}
                />
              ))
          }
        </tbody>
      </table>

    </div>
  )
}