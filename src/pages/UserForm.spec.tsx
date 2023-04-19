import { render } from '@testing-library/react'
import { UserForm } from './UserForm'

describe('UserForm Component', () => {
  it('should render UserForm H2', () => {
    const { getByText } = render(<UserForm />)

    expect(getByText("Insira, pesquise, edite e delete usuários")).toBeInTheDocument()
  })
})