import { useState } from "react";
import { createContext } from "react";
import { API } from "../../services/api";
import { toast } from "react-toastify";

export const UserContext = createContext();

function UserProvider({ children }) {
  const usuarioLogado = localStorage.getItem("user");
  const [usuario, setUsuario] = useState(
    usuarioLogado ? JSON.parse(usuarioLogado) : null
  );

  const logar = (data, redirecionador) => {
    API.post("/login", data)
      .then((response) => {
        const logado = {
          accessToken: response.data.accessToken,
          ...response.data.user,
        };
        setUsuario(logado);
        localStorage.setItem("user", JSON.stringify(logado));
        toast.success("Logado com sucesso!");
        if (logado.firstLogin === true) {
          if (logado.type === "paciente") {
            return redirecionador("./cadastro-paciente");
          } else {
            return redirecionador("./cadastro-psicologo");
          }
        } else {
          if (logado.type === "paciente") {
            return redirecionador("./dashboard-paciente");
          } else {
            return redirecionador("./dashboard-psicologo");
          }
        }
      })
      .catch((_) =>
        toast.error("Erro ao logar, email e/ou senha incorreto(s)!")
      );
  };

  const deslogar = (redirecionador) => {
    console.log("chamou");
    localStorage.removeItem("user");
    setUsuario(null);
    return redirecionador("/home");
  };

  return (
    <UserContext.Provider value={{ usuario, logar, deslogar }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
