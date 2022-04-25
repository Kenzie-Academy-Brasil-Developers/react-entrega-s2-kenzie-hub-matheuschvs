import axios from 'axios';

const API = axios.create({
  baseURL: 'https://kenziehub.herokuapp.com/'
})

export { API }
