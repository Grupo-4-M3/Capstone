
import { useHistory } from "react-router-dom";
import { StyledHeader } from "./styles";
import { Button } from "./../Button";
<<<<<<< HEAD

export function Header({ children, user, type, heigth }) {
  const historico = useHistory();

  const levarAoDashboard = () => {
    historico.push("./dashboard");
  };

  const levarAoHome = () => {
    historico.push("./home");
  };
  const levarAoLogin = () => {
    historico.push("./login");
  };
  const levarAoRegistro = () => {
    historico.push("./registro");
  };

  switch (type) {
    case "home":
      return (
        <StyledHeader>
          <h1>
            Call<span>Mind</span>
          </h1>
          <div>
            <Button onclick={levarAoLogin} nameButton={"Login"}></Button>

=======

export function Header({ children, user, type, heigth }) {
  const historico = useHistory();

  const levarAoDashboard = () => {
    historico.push("./dashboard");
  };

  const levarAoHome = () => {
    historico.push("./home");
  };
  const levarAoLogin = () => {
    historico.push("./login");
  };
  const levarAoRegistro = () => {
    historico.push("./registro");
  };

  switch (type) {
    case "home":
      return (
        <StyledHeader>
          <h1>
            Call<span>Mind</span>
          </h1>
          <div>
            <Button onclick={levarAoLogin} nameButton={"Login"}></Button>

>>>>>>> origin/fix_Header
            <Button onclick={levarAoRegistro} nameButton={"Registro"}></Button>
          </div>
        </StyledHeader>
      );
    case "login":
      return (
        <StyledHeader>
          <h1 onClick={levarAoHome}>
            Call<span>Mind</span>
          </h1>
          <div>
            <Button onclick={levarAoRegistro} nameButton={"Registro"}></Button>
          </div>
        </StyledHeader>
      );
    case "registro":
      return (
        <StyledHeader heigth={heigth}>
          <h1 onClick={levarAoHome}>
            Call<span>Mind</span>
          </h1>
          <div>
            <Button onclick={levarAoLogin} nameButton={"Login"}></Button>
          </div>
        </StyledHeader>
      );
    case "cadastro":
      return (
        <StyledHeader>
          <h1>
            Call<span>Mind</span>
          </h1>
          <div>
            <Button onclick={levarAoHome} nameButton={"Logout"}></Button>
          </div>
        </StyledHeader>
      );
    case "dashBoard":
      return (
        <StyledHeader dash>
          <h1 onClick={levarAoDashboard}>
            Call<span>Mind</span>
          </h1>
          <div>
            <figure>
<<<<<<< HEAD
              <img src={!!user ? user.img : ""} alt="" />
            </figure>
            <div>
              <h2>{!!user ? user.name : "Teste"}</h2>
=======
              <img src={!!user ? user.img : "https://i.imgur.com/BKFDXpT.png"} alt="" />
            </figure>
            <div>
              <h2>{!!user ? `${user.name.split(" ")[0]}` : "User1"}</h2>
>>>>>>> origin/fix_Header
              <Button nameButton={"Logout"}></Button>
            </div>
          </div>
        </StyledHeader>
      );
    default:
      return (
        <StyledHeader>
          <h1 onClick={levarAoDashboard}>
            Call<span>Mind</span>
          </h1>
          <div>{children}</div>
        </StyledHeader>
      );
  }
}
