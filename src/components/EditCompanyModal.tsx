import { X } from '@phosphor-icons/react'
import './EditCompanyModal.css'
import { FormEvent, useEffect, useState } from 'react'
import InputMask from 'react-input-mask';
import { api } from '../services/api'
import { AxiosError } from 'axios';

interface EditCompanyModal {
  handleCloseModal: () => void
  handleUpdate: () => Promise<void>
  address: string
  cnpj: string
  id: number
  name: string
}

export function EditCompanyModal(props: EditCompanyModal) {
  const [newName, setNewName] = useState(props.name)
  const [newCnpj, setNewCnpj] = useState(props.cnpj)
  const [newAddress, setNewAddress] = useState(props.address)

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    if (newCnpj.trim() === "" || newName.trim() === "" || newAddress.trim() === "") {
      return alert("Preencha todos os campos obrigatórios.")
    }

    try {
      await api.put(`companies/${props.id}`, {
        name: newName,
        cnpj: newCnpj,
        address: newAddress,
      })

      props.handleUpdate()
      props.handleCloseModal()
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Ocorreu um erro desconhecido.")
      }
    }
  }

  function cleanFields() {
    setNewName("")
    setNewCnpj("")
    setNewAddress("")
  }

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
    <div className="bg-editcompany-modal">
      <div className="editcompany-modal">
        <div className="header">
          <h2>Editar</h2>
          <button
            onClick={props.handleCloseModal}
          >
            <X size={12} color="#979292" weight="bold" />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="name">Nome:</label>
            <input value={newName} onChange={(e) => setNewName(e.target.value)} type="text" id="name" />
            <small>Obrigatório</small>
          </div>

          <div className="input-wrapper">
            <label htmlFor="cnpj">CNPJ:</label>
            <InputMask
              mask="99.999.999/9999-99"
              placeholder="00.000.000/0000-00"
              value={newCnpj}
              onChange={(e) => setNewCnpj(e.target.value)}
              id="cnpj"
            />
            <small>Obrigatório</small>
          </div>

          <div className="input-wrapper">
            <label htmlFor="address">Endereço:</label>
            <input value={newAddress} onChange={(e) => setNewAddress(e.target.value)} type="text" id="address" />
            <small>Obrigatório</small>
          </div>

          <div className="buttons">
            <button onClick={cleanFields} type="button">Limpar</button>
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  )
}