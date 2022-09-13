import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import API from "../../services/api";
import { StyledValidate } from "./styles";

function ValidateEmail() {
  const params = useParams();
  const { token } = params;
  const [validated, setValidate] = useState("carregando");
  useEffect(() => {
    API.patch(`/validate/${token}`)
      .then(() => {
        setValidate("validado");
      })
      .catch((err) => {
        console.log(err);
        setValidate("erro");
      });
  });
  return (
    <StyledValidate>
      <Header type="home" />
      {validated === "carregando" ? (
        <p>Validando...</p>
      ) : validated === "validado" ? (
        <p>Validado com sucesso</p>
      ) : (
        <p>Erro ao validar</p>
      )}
    </StyledValidate>
  );
}

export default ValidateEmail;
