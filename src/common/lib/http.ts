import axios from "axios";

const client = axios.create({
  baseURL: "http://147.45.107.174:4001",
});

export { client };
