import Axios from 'axios';

const api = Axios.create({
  baseURL: process.env.REACT_APP_API_IMDB_URL,
});

export default api;
