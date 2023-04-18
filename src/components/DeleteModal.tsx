import { MouseEventHandler, useEffect } from 'react'
import './DeleteModal.css'

interface DeleteModalProps {
  handleCloseModal: () => void
  handleDelete: MouseEventHandler<HTMLButtonElement>
}

export function DeleteModal(props: DeleteModalProps) {
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