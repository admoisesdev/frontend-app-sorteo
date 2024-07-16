import { AxiosAdapter } from "./http/axios.adapter";

export const apiFetcher = new AxiosAdapter({
  baseURL: process.env.BASE_URL || "http://localhost:3000/api",
});