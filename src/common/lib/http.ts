import axios from "axios";
import { useAuthStore } from "@/stores/auth";

export const baseURL = "http://217.18.63.71:4009";

export const client = axios.create({
  baseURL,
});

client.interceptors.request.use((config) => {
  const token = useAuthStore.getState().accessToken;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
