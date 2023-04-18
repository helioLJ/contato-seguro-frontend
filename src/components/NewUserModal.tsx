import { X } from '@phosphor-icons/react'
import './NewUserModal.css'
import { FormEvent, useEffect, useState } from 'react'
import { api } from '../services/api'
import InputMask from 'react-input-mask';

interface NewUserModalProps {
  handleCloseModal: () => void
  handleUpdate: () => Promise<void>
}

export function NewUserModal(props: NewUserModalProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [birthday, setBirthday] = useState("")
  const [hometown, setHometown] = useState("")

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    if (email.trim() === "" || name.trim() === "") {
      return alert("Preencha todos os campos obrigatórios.")
    }

    if (birthday.trim() === "") {
      setBirthday("00/00/0000")
    }

    try {
      await api.post("/users", {
        name,
        email,
        phone,
        birthday,
        hometown
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
    setEmail("")
    setPhone("")
    setBirthday("")
    setHometown("")
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
    <div className="bg-newuser-modal">
      <div className="newuser-modal">
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
            <label htmlFor="email">E-mail:</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" />
            <small>Obrigatório</small>
          </div>

          <div className="two-col">
            <div className="input-wrapper">
              <label htmlFor="phone">Telefone:</label>
              <InputMask
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                id="phone"
                mask="(99) 99999-9999"
                placeholder="(00) 00000-0000"
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="birthday">Data de nascimento:</label>
              <InputMask
                mask="99/99/9999"
                placeholder="dd/mm/aaaa"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
                id="birthday"
              />
            </div>
          </div>

          <div className="input-wrapper">
            <label htmlFor="hometown">Cidade onde nasceu:</label>
            <input value={hometown} onChange={(e) => setHometown(e.target.value)} type="text" id="hometown" />
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