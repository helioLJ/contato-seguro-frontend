import { X } from '@phosphor-icons/react'
import './EditUserModal.css'

export function EditUserModal() {
  return (
    <div className="bg-edituser-modal">
      <div className="edituser-modal">
        <div className="header">
          <h2>Editar</h2>
          <button>
            <X size={12} color="#979292" weight="bold" />
          </button>
        </div>
        
        <form>
          <div className="input-wrapper">
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" />
            <small>Obrigatório</small>
          </div>

          <div className="input-wrapper">
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" />
            <small>Obrigatório</small>
          </div>

          <div className="two-col">
            <div className="input-wrapper">
              <label htmlFor="phone">Telefone:</label>
              <input type="number" id="phone" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="birthday">Data de nascimento:</label>
              <input type="date" id="birthday" />
            </div>
          </div>

          <div className="input-wrapper">
            <label htmlFor="hometown">Cidade onde nasceu:</label>
            <input type="text" id="hometown" />
          </div>

          <div className="buttons">
            <button type="button">Limpar</button>
            <button type="submit">Salvar</button>
          </div>
        </form>
      </div>
    </div>
  )
}