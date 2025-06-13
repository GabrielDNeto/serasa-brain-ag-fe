import axios from "axios";
import { APP_ROUTES } from "../routes/constants";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

api.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("@session:token");

    if (token) {
      if (config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.status && error.status === 401) {
      localStorage.removeItem("@session:token");
      window.location.pathname = APP_ROUTES.public.signin;
    }

    return Promise.reject(error);
  },
);
