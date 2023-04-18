import { useState } from 'react'
import { EditUserModal } from './EditUserModal'
import './UserRow.css'
import { NotePencil, Trash } from '@phosphor-icons/react'
import { DeleteModal } from './DeleteModal'
import { api } from '../services/api'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

interface UserRowProps {
  id: number
  name: string
  email: string
  phone: number
  birthday: string
  hometown: string
  handleUpdate: () => Promise<void>
}

export function UserRow(props: UserRowProps) {
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
    await api.delete(`/users/${deletingId}`)
    await props.handleUpdate()
    setDeletingId(0)
  }

  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.email}</td>
      <td>{props.phone}</td>
      <td>{props.birthday}</td>
      <td>{props.hometown}</td>

      <td className="buttons">
        <button
          onClick={showEditModal}
        >
          <NotePencil size={22} color="#f5f7f3" weight="bold" />
        </button>

        <TransitionGroup>
          {editingId !== 0 ?
            <CSSTransition classNames="modal" timeout={300}>
              <EditUserModal
                id={props.id}
                name={props.name}
                email={props.email}
                phone={props.phone}
                birthday={props.birthday}
                hometown={props.hometown}
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