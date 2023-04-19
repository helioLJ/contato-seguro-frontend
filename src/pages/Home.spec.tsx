import { render } from '@testing-library/react'
import { Home } from './Home'

describe('Home Component', () => {
  it('should render Home H2', () => {
    const { getByText } = render(<Home />)

    expect(getByText("Lista de Usuários e Empresas")).toBeInTheDocument()
  })
})