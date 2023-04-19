import { useEffect, useState } from 'react'
import Logo from '../assets/logo.png'
import { CompanyRow } from '../components/CompanyRow'
import { NewCompanyModal } from '../components/NewCompanyModal'
import './CompanyForm.css'
import { Plus } from '@phosphor-icons/react'
import { api } from '../services/api'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

interface CompanyObject {
  address: string
  cnpj: string
  created_at: string
  id: number
  name: string
  updated_at: string
}

export function CompanyForm() {
  const [companies, setCompanies] = useState<CompanyObject[]>([])
  const [inserting, setInserting] = useState(false)
  const [queryName, setQueryName] = useState("name")
  const [queryValue, setQueryValue] = useState("")

  function handleInsertModal() {
    setInserting(!inserting)
  }

  async function fetchCompanies() {
    const { data } = await api.get("/companies")
    setCompanies(data)
  }

  useEffect(() => {
    fetchCompanies()
  }, [])

  useEffect(() => {
    async function fetchUsersQuery(paramName: string, paramValue: string) {
      const { data } = await api.get(`/companies?${paramName}=${paramValue}`)
      setCompanies(data)
    }

    fetchUsersQuery(queryName, queryValue)
  }, [queryName, queryValue])

  return (
    <div className="companyContainer">
      <img src={Logo} alt="Logo da Contato Seguro" />
      <h2>Insira, pesquise, edite e delete empresas</h2>

      <div className="search-bar">
        <button
          onClick={handleInsertModal}
        >
          <Plus size={22} color="#f5f7f3" weight="bold" />
        </button>

        <TransitionGroup>
          {inserting &&
            <CSSTransition classNames="modal" timeout={300}>
              <NewCompanyModal
                handleCloseModal={handleInsertModal}
                handleUpdate={fetchCompanies}
              />
            </CSSTransition>
          }
        </TransitionGroup>

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
          <option value="cnpj">CNPJ</option>
          <option value="address">Endereço</option>
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>CNPJ</th>
            <th>Endereço</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            companies.map(company => (
              <CompanyRow
                key={company.id}
                id={company.id}
                name={company.name}
                cnpj={company.cnpj}
                address={company.address}
                handleUpdate={fetchCompanies}
              />
            ))
          }
        </tbody>
      </table>

    </div>
  )
}