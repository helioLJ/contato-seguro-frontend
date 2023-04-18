import { X } from '@phosphor-icons/react'
import './NewRegisterModal.css'

export function NewRegisterModal() {
  return (
    <div className="bg-newregister-modal">
      <div className="newregister-modal">
        <div className="header">
          <h2>Inserir registro</h2>
          <button>
            <X size={12} color="#979292" weight="bold" />
          </button>
        </div>
        
        <form>
          <div className="input-wrapper">
            <label htmlFor="user">Usuário:</label>
            <select name="user" id="user">
              <option value="Jorge">Jorge</option>
              <option value="Hélio">Hélio</option>
              <option value="Cleiton">Cleiton</option>
            </select>
            <small>Obrigatório</small>
          </div>

          <div className="input-wrapper">
            <label htmlFor="company">Empresa:</label>
            <select name="user" id="user">
              <option value="Contato Seguro">Contato Seguro</option>
              <option value="Spotify">Spotify</option>
              <option value="Google">Google</option>
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