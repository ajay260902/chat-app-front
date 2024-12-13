import axios from "axios";
export const baseURL = "https://chat-app-production-b8d9.up.railway.app";
export const httpClient = axios.create({
  baseURL: baseURL,
});
