import axios from "axios";
import { useAuthStore } from "@/stores/auth";

export const baseURL = "https://raqamli-manaviyat.uz/ayzek-back/api/";

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
