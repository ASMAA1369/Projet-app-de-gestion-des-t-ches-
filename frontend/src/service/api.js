import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const register = (data) => axios.post(`${API_URL}/users/register`, data);
export const login = (data) => axios.post(`${API_URL}/users/login`, data);
export const getTasks = (token) => axios.get(`${API_URL}/tasks`, { headers: { Authorization: `Bearer ${token}` } });
export const createTask = (token, data) => axios.post(`${API_URL}/tasks`, data, { headers: { Authorization: `Bearer ${token}` } });
