import Logo from '../assets/logo.png'
import { DeleteModal } from '../components/DeleteModal'
import { EditCompanyModal } from '../components/EditCompanyModal'
import { NewCompanyModal } from '../components/NewCompanyModal'
import './CompanyForm.css'
import { NotePencil, Plus, Trash } from '@phosphor-icons/react'

export function CompanyForm() {
  return (
    <div className="companyContainer">
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

      {/* <NewCompanyModal /> */}
      {/* <EditCompanyModal /> */}
      {/* <DeleteModal /> */}

      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>CNPJ</th>
            <th>Endereço</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Contato Seguro</td>
            <td>6458358956</td>
            <td>Porto Alegre - RS</td>

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