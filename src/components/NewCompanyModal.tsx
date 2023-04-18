import { X } from '@phosphor-icons/react'
import './NewCompanyModal.css'

export function NewCompanyModal() {
  return (
    <div className="bg-newcompany-modal">
      <div className="newcompany-modal">
        <div className="header">
          <h2>Inserir</h2>
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
            <label htmlFor="cnpj">CNPJ:</label>
            <input type="number" id="cnpj" />
            <small>Obrigatório</small>
          </div>

          <div className="input-wrapper">
            <label htmlFor="address">Endereço:</label>
            <input type="text" id="address" />
            <small>Obrigatório</small>
          </div>

          <div className="buttons">
            <button type="button">Limpar</button>
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  )
}