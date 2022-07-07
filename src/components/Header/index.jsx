import { useState } from "react";
import { useHistory } from "react-router-dom";
import { StyledHeader } from "./styles";

export function Header({ children }) {
  const historico = useHistory();
  const [tela, setTela] = useState(window.innerWidth);
  const levarAoDashboard = () => {
    historico.push("./dashboard");
  };
  window.addEventListener(
    "resize",
    (event) => {
      setTela(window.innerWidth);
    },
    true
  );

  return (
    <StyledHeader>
      <h1 onClick={levarAoDashboard}>
        Call<span>Mind</span>
      </h1>
      {450 < tela && <div>{children}</div>}
    </StyledHeader>
  );
}
