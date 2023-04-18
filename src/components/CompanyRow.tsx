import { useState } from 'react'
import './CompanyRow.css'
import { NotePencil, Trash } from '@phosphor-icons/react'
import { api } from '../services/api'
import { EditCompanyModal } from './EditCompanyModal'
import { DeleteModal } from './DeleteModal'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

interface CompanyRowProps {
  id: number
  name: string
  cnpj: string
  address: string
  handleUpdate: () => Promise<void>
}

export function CompanyRow(props: CompanyRowProps) {
  const [editingId, setEditingId] = useState(0)
  const [deletingId, setDeletingId] = useState(0)

  function showEditModal() {
    setEditingId(props.id)
  }
  function closeEditModal() {
    setEditingId(0)
  }

  function showDeleteModal() {
    setDeletingId(props.id)
  }
  function closeDeleteModal() {
    setDeletingId(0)
  }
  async function deleteRow() {
    await api.delete(`/companies/${deletingId}`)
    await props.handleUpdate()
    setDeletingId(0)
  }

  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.cnpj}</td>
      <td>{props.address}</td>

      <td className="buttons">
        <button
          onClick={showEditModal}
        >
          <NotePencil size={22} color="#f5f7f3" weight="bold" />
        </button>

        <TransitionGroup>
          {editingId !== 0 ?
            <CSSTransition classNames="modal" timeout={300}>
              <EditCompanyModal
                id={props.id}
                name={props.name}
                cnpj={props.cnpj}
                address={props.address}
                handleCloseModal={closeEditModal}
                handleUpdate={props.handleUpdate}
              />
            </CSSTransition> : ""
          }
        </TransitionGroup>
        <button
          onClick={showDeleteModal}
        >
          <Trash size={22} color="#f5f7f3" weight="bold" />
        </button>

        <TransitionGroup>
          {deletingId !== 0 ?
            <CSSTransition classNames="modal" timeout={300}>
              <DeleteModal
                handleCloseModal={closeDeleteModal}
                handleDelete={deleteRow}
              />
            </CSSTransition> : ""
          }
        </TransitionGroup>

      </td>
    </tr>
  )
}