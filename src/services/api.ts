import axios from 'axios';

const api = axios.create({
  baseURL: 'https://bathplaces.herokuapp.com/',
});

export default api;
