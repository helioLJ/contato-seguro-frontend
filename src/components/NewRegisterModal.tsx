import { X } from '@phosphor-icons/react'
import './NewRegisterModal.css'
import { FormEvent, useEffect, useState } from 'react'
import { api } from '../services/api'

interface NewRegisterModalProps {
  handleCloseModal: () => void
  handleUpdate: () => Promise<void>
}

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

export function NewRegisterModal(props: NewRegisterModalProps) {
  const [users, setUsers] = useState<UserObject[]>([])
  const [companies, setCompanies] = useState<CompanyObject[]>([])
  const [userId, setUserId] = useState("")
  const [companyId, setCompanyId] = useState("")

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    if(userId === "" || companyId === "") {
      alert("Selecione os dois campos!")
    }

    try {
      await api.post("/register", {
        user_id: userId,
        company_id: companyId
      })

      props.handleUpdate()
      props.handleCloseModal()
    } catch (error: any) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Ocorreu um erro desconhecido.")
      }
    }
  }

  async function fetchUsers() {
    const { data } = await api.get("/users")
    setUsers(data)
  }

  async function fetchCompanies() {
    const { data } = await api.get("/companies")
    setCompanies(data)
  }

  useEffect(() => {
    fetchUsers()
    fetchCompanies()
  }, [])

  useEffect(() => {
    function handleKeyDown(event: { keyCode: number }) {
      if (event.keyCode === 27) {
        props.handleCloseModal();
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [props.handleCloseModal]);

  return (
    <div className="bg-newregister-modal">
      <div className="newregister-modal">
        <div className="header">
          <h2>Inserir registro</h2>
          <button
            onClick={props.handleCloseModal}
          >
            <X size={12} color="#979292" weight="bold" />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="user">Usuário:</label>
            <select
              name="user"
              id="user"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            >
              <option value="">Selecione um usuário</option>
              {users.map((user: UserObject) => (
                <option value={user.id}>{user.name}</option>
              ))}
            </select>
            <small>Obrigatório</small>
          </div>

          <div className="input-wrapper">
            <label htmlFor="company">Empresa:</label>
            <select
              name="company"
              id="company"
              value={companyId}
              onChange={(e) => setCompanyId(e.target.value)}
            >
              <option value="">Selecione uma empresa</option>
              {companies.map((company: CompanyObject) => (
                <option value={company.id}>{company.name}</option>
              ))}
            </select>
            <small>Obrigatório</small>
          </div>

          <div className="buttons">
            <button type="submit">Registrar</button>
          </div>
        </form>
      </div>
    </div>
  )
}