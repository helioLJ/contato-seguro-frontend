import axios from 'axios'

export const api = axios.create({
  baseURL: "https://contato-seguro-api.onrender.com"
})