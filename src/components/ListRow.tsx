import './ListRow.css'

interface ListRowProps {
  name: string
  companies: string[]
  email: string
  phone: number
  birthday: string
  hometown: string
  handleUpdate: () => Promise<void>
}

export function ListRow(props: ListRowProps) {
  const formattedCompanies = props.companies.join(', ');

  return (
    <tr>
      <td>{props.name}</td>
      <td>{formattedCompanies}</td>
      <td>{props.email}</td>
      <td>{props.phone}</td>
      <td>{props.birthday}</td>
      <td>{props.hometown}</td>
    </tr>
  )
}