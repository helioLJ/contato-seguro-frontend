import './UserRow.css'
import { NotePencil, Trash } from '@phosphor-icons/react'

export function UserRow() {
  return (
    <tr>
      <td>Fulano</td>
      <td>fulano@example.com</td>
      <td>(51) 98888-8888</td>
      <td>13/08/2021</td>
      <td>Porto Alegre</td>

      <td className="buttons">
        <button >
          <NotePencil size={22} color="#f5f7f3" weight="bold" />
        </button>
        <button >
          <Trash size={22} color="#f5f7f3" weight="bold" />
        </button>
      </td>
    </tr>
  )
}