import axios from "axios";

export const API = axios.create({
  baseURL: "<base_url>",
  timeout: 5000,
});
