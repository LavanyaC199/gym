import axios from "axios";

const api = axios.create({
  baseURL: "https://gym-l782.onrender.com",
});

api.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export default api;
