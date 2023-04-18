import './CompanyRow.css'
import { NotePencil, Trash } from '@phosphor-icons/react'

export function CompanyRow() {
  return (
    <tr>
      <td>Contato Seguro</td>
      <td>6458358956</td>
      <td>Porto Alegre - RS</td>

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