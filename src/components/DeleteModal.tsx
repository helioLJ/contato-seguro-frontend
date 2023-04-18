import { MouseEventHandler } from 'react'
import './DeleteModal.css'

interface DeleteModalProps {
  handleCloseModal: MouseEventHandler<HTMLButtonElement>
  handleDelete: MouseEventHandler<HTMLButtonElement>
}

export function DeleteModal(props: DeleteModalProps) {
  return (
    <div className="bg-delete-modal">
      <div className="delete-modal">
        <h2>Tem certeza que deseja deletar?</h2>

        <div className="buttons">
          <button onClick={props.handleCloseModal} >Não</button>
          <button onClick={props.handleDelete}>Sim</button>
        </div>
      </div>
    </div>
  )
}