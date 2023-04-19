import { render } from '@testing-library/react'
import { CompanyForm } from './CompanyForm'

describe('CompanyForm Component', () => {
  it('should render CompanyForm H2', () => {
    const { getByText } = render(<CompanyForm />)

    expect(getByText("Insira, pesquise, edite e delete empresas")).toBeInTheDocument()
  })
})