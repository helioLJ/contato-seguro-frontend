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
          <tr>
            <td>Fulano</td>
            <td>Contato Seguro, Spotify</td>
            <td>fulano@example.com</td>
            <td>(51) 98888-8888</td>
            <td>13/08/2021</td>
            <td>Porto Alegre</td>
          </tr>
        </tbody>
      </table>

    </div>
  )
}