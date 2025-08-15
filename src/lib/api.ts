import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

// If you are using a different environment variable for production, you can adjust it accordingly.
const api = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  withCredentials: true,
});

export default api;
