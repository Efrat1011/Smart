// src/axios.js

import axios from 'axios';

const api = axios.create({
  baseURL: 'https://smart-lk9j.onrender.com/api', // бекенд URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Егер токен керек болса (мысалы, login арқылы JWT алған соң):
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
