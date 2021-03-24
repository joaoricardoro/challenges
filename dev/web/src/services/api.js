import axios from 'axios';

import { url } from '../config/connections';

const api = axios.create({url});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('@token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';

  return config;
});

export default api;