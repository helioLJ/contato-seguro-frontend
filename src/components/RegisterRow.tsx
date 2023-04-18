import './RegisterRow.css'
import { Trash } from '@phosphor-icons/react'

export function RegisterRow() {
  return (
    <tr>
      <td>Hélio Lúcio</td>
      <td>Contato Seguro</td>
      <td>18/04/2023</td>

      <td className="buttons">
        <button >
          <Trash size={22} color="#f5f7f3" weight="bold" />
        </button>
      </td>
    </tr>
  )
}