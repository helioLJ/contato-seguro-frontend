import { X } from '@phosphor-icons/react'
import './NewUserModal.css'
import { FormEvent, useState } from 'react'
import { api } from '../services/api'
import InputMask from 'react-input-mask';
import { formatDate } from '../utils/formatDate';

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

    await api.post("/users", {
      name,
      email,
      phone,
      birthday: formatDate(birthday),
      hometown
    })

    props.handleUpdate()
    props.handleCloseModal()
  }

  function cleanFields() {
    setName("")
    setEmail("")
    setPhone("")
    setBirthday("")
    setHometown("")
  }

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
                type="text" id="phone"
                mask="(99) 99999-9999"
                placeholder="(00) 00000-0000"
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="birthday">Data de nascimento:</label>
              <input value={birthday} onChange={(e) => setBirthday(e.target.value)} type="date" id="birthday" />
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