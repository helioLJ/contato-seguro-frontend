import './DeleteModal.css'

export function DeleteModal() {
  return (
    <div className="bg-delete-modal">
      <div className="delete-modal">
        <h2>Tem certeza que deseja deletar?</h2>

        <div className="buttons">
          <button>Não</button>
          <button>Sim</button>
        </div>
      </div>
    </div>
  )
}