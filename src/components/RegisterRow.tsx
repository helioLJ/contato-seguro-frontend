import { useState } from 'react'
import './RegisterRow.css'
import { Trash } from '@phosphor-icons/react'
import { api } from '../services/api'
import { DeleteModal } from './DeleteModal'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

interface RegisterRowProps {
  id: number
  user: string
  company: string
  created_at: string
  handleUpdate: () => Promise<void>
}

export function RegisterRow(props: RegisterRowProps) {
  const date = new Date(props.created_at);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;

  const [deletingId, setDeletingId] = useState(0)

  function showDeleteModal() {
    setDeletingId(props.id)
  }
  function closeDeleteModal() {
    setDeletingId(0)
  }
  async function deleteRow() {
    await api.delete(`/register/${deletingId}`)
    await props.handleUpdate()
    setDeletingId(0)
  }

  return (
    <tr>
      <td>{props.user}</td>
      <td>{props.company}</td>
      <td>{formattedDate}</td>

      <td className="buttons">
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