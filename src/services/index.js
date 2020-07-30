import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-soundflix.herokuapp.com/',
});

export default api;
