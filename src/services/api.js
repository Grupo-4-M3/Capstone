import axios from "axios";

export const API = axios.create({
  baseURL: "https://api-callmind.herokuapp.com",
  timeout: 5000,
});
