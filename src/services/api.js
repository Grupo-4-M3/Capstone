import axios from "axios";

const API = axios.create({
  baseURL: "https://api-callmind.herokuapp.com"
});

API.interceptors.request.use((configuracoes) => {
  const usuario = JSON.parse(localStorage.getItem("user"));

  return {
    ...configuracoes,
    headers: {
      ...configuracoes.headers,
      Authorization: usuario?.accessToken
        ? `Bearer ${usuario?.accessToken}`
        : "",
    },
  };
});

export default API;
