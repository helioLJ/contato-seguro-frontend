import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { UserForm } from './UserForm'

describe('UserForm Component', () => {
  it('should render UserForm H2', () => {
    const { getByText } = render(<UserForm />)

    expect(getByText("Insira, pesquise, edite e delete usuários")).toBeInTheDocument()
  })

  it("should be able to open insert modal", async () => {
    const { getByTestId, getByText, debug } = render(<UserForm />);
    
    const addButton = getByTestId('insert-button')
    
    debug()
    await userEvent.click(addButton);
    debug()

    expect(getByText("Inserir usuário!")).toBeInTheDocument();
  });
})