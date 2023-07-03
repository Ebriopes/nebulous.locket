import axios from 'axios';

/**
 * Crea una conexión con la API media-becas-api
 */
export const createAPIConnection = axios.create({
  baseURL: import.meta.env.VITE_API_MOVIES,
  headers: {
    'Content-type': 'application/json',
    Authorization: 'Bearer ' + import.meta.env.VITE_ACCESS_TOKEN,
  },
});
