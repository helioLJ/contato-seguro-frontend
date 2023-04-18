import Logo from '../assets/logo.png'
import './Home.css'

export function Home() {
  return (
    <div className="homeContainer">
      <img src={Logo} alt="Logo da Contato Seguro" />

      <div className="search-bar">
        <input placeholder="Buscar..." type="text" />

        <select>
          <option value="name">Nome</option>
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Empresas</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Nascimento</th>
            <th>Cidade</th>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </table>

    </div>
  )
}