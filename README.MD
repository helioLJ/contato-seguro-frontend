## Contato Seguro Frontend
Parte frontend do teste técnico da Contato Seguro.

## Como Usar
### Requisitos
- Node.js
- Yarn ou npm

### Instruções
1. Clone o repositório e entre na pasta do projeto:

```bash
git clone https://github.com/heliolj/contato-seguro-frontend.git
cd nome-do-projeto
```
2. Instale as dependências:
```bash
yarn
```
ou
```bash
npm install
```
3. Crie um arquivo .env.local na raiz do projeto e preencha as variáveis de ambiente necessárias para se comunicar com sua API backend:
```bash
REACT_APP_API_URL=http://localhost:8000
```
4. Inicie a aplicação:
```bash
yarn run dev
```
ou
```bash
npm run dev
```
5. Abra o navegador em http://localhost:5173.

## Tecnologias Utilizadas

- Vite
- ReactJS
- TypeScript
- Axios
- React Router DOM
- Jest and Testing Library

### Outras Libs

- @phosphor-icons/react
- react-input-mask
- react-transition-group

## Resposta do participante
_Responda aqui quais foram suas dificuldades e explique a sua solução_

- Um pouco de dificuldade no backend, já que não sou muito familiarizado, mas com bastante pesquisa consegui criar a API funcional
- Escolhi o SQLite porque não precisa de um servidor separado, o que significa não precisar configurar, gerenciar ou manter um servidor de banco de dados separado. Isso se mostra muito útil em projetos menores.
- Nunca havia implementado testes na prática, apenas tinha aprendido o conceito, então criar testes, ainda mais no frontend, foi um desafio que consegui superar e aprender mais sobre testes unitários com React.js

## Licença
Este projeto está licenciado sob a [MIT License](./LICENSE).