import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add token to requests
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authAPI = {
  register: (data: any) => apiClient.post('/auth/register', data),
  login: (data: any) => apiClient.post('/auth/login', data)
};

export const videoAPI = {
  getAll: () => apiClient.get('/videos'),
  getById: (id: string) => apiClient.get(`/videos/${id}`),
  create: (data: any) => apiClient.post('/videos', data),
  update: (id: string, data: any) => apiClient.put(`/videos/${id}`, data)
};

export const userAPI = {
  getProfile: (userId: string) => apiClient.get(`/users/profile/${userId}`),
  updateProfile: (data: any) => apiClient.put('/users/profile', data)
};

export const commentAPI = {
  getByVideoId: (videoId: string) => apiClient.get(`/comments/video/${videoId}`),
  create: (data: any) => apiClient.post('/comments', data)
};

export default apiClient;
