import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // backend + /api
  headers: {
    "Content-Type": "application/json",
  },
});

// Ajouter le token à chaque requête si connecté
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
