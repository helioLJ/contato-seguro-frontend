import { FormEvent, useEffect, useState } from 'react'
import { X } from '@phosphor-icons/react'
import './EditUserModal.css'
import InputMask from 'react-input-mask';
import { api } from '../services/api';

interface EditUserModalProps {
  handleCloseModal: () => void
  handleUpdate: () => Promise<void>
  birthday: string
  email: string
  hometown: string
  id: number
  name: string
  phone: number
}

export function EditUserModal(props: EditUserModalProps) {
  const [newName, setNewName] = useState(props.name)
  const [newEmail, setNewEmail] = useState(props.email)
  const cleanPhoneNumber = String(props.phone).replace(/[()-]/g, "");
  const [newPhone, setNewPhone] = useState(cleanPhoneNumber)
  const [newBirthday, setNewBirthday] = useState(props.birthday)
  const [newHometown, setNewHometown] = useState(props.hometown)

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    if (newEmail.trim() === "" || newName.trim() === "") {
      return alert("Preencha todos os campos obrigatórios.")
    }
    
    if(newBirthday.trim() === "") {
      setNewBirthday("00/00/0000")
    }

    try {
      await api.put(`users/${props.id}`, {
        name: newName,
        email: newEmail,
        phone: newPhone,
        birthday: newBirthday,
        hometown: newHometown
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
    setNewName("")
    setNewEmail("")
    setNewPhone("")
    setNewBirthday("")
    setNewHometown("")
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
    <div className="bg-edituser-modal">
      <div className="edituser-modal">
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
            <label htmlFor="email">E-mail:</label>
            <input value={newEmail} onChange={(e) => setNewEmail(e.target.value)} type="email" id="email" />
            <small>Obrigatório</small>
          </div>

          <div className="two-col">
            <div className="input-wrapper">
              <label htmlFor="phone">Telefone:</label>
              <InputMask
                value={newPhone}
                onChange={(e) => setNewPhone(e.target.value)}
                type="text" id="phone"
                mask="(99) 99999-9999"
                placeholder="(00) 00000-0000"
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="birthday">Data de nascimento:</label>
              <InputMask
                mask="99/99/9999"
                placeholder="dd/mm/aaaa"
                value={newBirthday}
                onChange={(e) => setNewBirthday(e.target.value)}
                id="birthday"
              />
            </div>
          </div>

          <div className="input-wrapper">
            <label htmlFor="hometown">Cidade onde nasceu:</label>
            <input value={newHometown} onChange={(e) => setNewHometown(e.target.value)} type="text" id="hometown" />
          </div>

          <div className="buttons">
            <button onClick={cleanFields} type="button">Limpar</button>
            <button type="submit">Salvar</button>
          </div>
        </form>
      </div>
    </div>
  )
}