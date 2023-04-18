import { X } from '@phosphor-icons/react'
import './NewCompanyModal.css'
import { FormEvent, useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import { api } from '../services/api';

interface NewUserModalProps {
  handleCloseModal: () => void
  handleUpdate: () => Promise<void>
}

export function NewCompanyModal(props: NewUserModalProps) {
  const [name, setName] = useState("")
  const [cnpj, setCnpj] = useState("")
  const [address, setAddress] = useState("")

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    if (name.trim() === "" || cnpj.trim() === "" || address.trim() === "") {
      return alert("Preencha todos os campos obrigatórios.")
    }

    try {
      await api.post("/companies", {
        name,
        cnpj,
        address
      })

      props.handleUpdate()
      props.handleCloseModal()
    } catch (error: any) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Ocorreu um erro desconhecido.")
      }
    }
  }

  function cleanFields() {
    setName("")
    setCnpj("")
    setAddress("")
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
    <div className="bg-newcompany-modal">
      <div className="newcompany-modal">
        <div className="header">
          <h2>Inserir</h2>
          <button
            onClick={props.handleCloseModal}
          >
            <X size={12} color="#979292" weight="bold" />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="name">Nome:</label>
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" id="name" />
            <small>Obrigatório</small>
          </div>

          <div className="input-wrapper">
            <label htmlFor="cnpj">CNPJ:</label>
            <InputMask
              mask="99.999.999/9999-99"
              placeholder="00.000.000/0000-00"
              value={cnpj}
              onChange={(e) => setCnpj(e.target.value)}
              id="cnpj"
            />
            <small>Obrigatório</small>
          </div>

          <div className="input-wrapper">
            <label htmlFor="address">Endereço:</label>
            <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" id="address" />
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