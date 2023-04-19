import { render } from '@testing-library/react'
import { RegisterForm } from './RegisterForm'

describe('RegisterForm Component', () => {
  it('should render RegisterForm H2', () => {
    const { getByText } = render(<RegisterForm />)

    expect(getByText("Insira, pesquise, edite e delete registros")).toBeInTheDocument()
  })
})