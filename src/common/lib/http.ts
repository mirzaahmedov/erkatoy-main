import axios from "axios";

export const baseURL = "http://192.168.102.68:4001";

export const client = axios.create({
  baseURL,
});
