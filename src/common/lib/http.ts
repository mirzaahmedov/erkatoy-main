import axios from "axios";
import { useAuthStore } from "@/stores/auth";

export const baseURL = "http://192.168.102.68:4001";

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
