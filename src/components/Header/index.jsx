import { useHistory } from "react-router-dom";
import { StyledHeader } from "./styles";
import { Button } from "./../Button";

export function Header({ children, user, type, heigth }) {
  const historico = useHistory();
  console.log(user)

  const imagem = ()=>(user?.img === "https://www.attendit.net/images/easyblog_shared/July_2018/7-4-18/totw_network_profile_400.jpg" ? "https://i.imgur.com/BKFDXpT.png" : user?.img)
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
              <img
                src={imagem()}
                alt=""
              />
            </figure>
            <div>
              <h2>{!!user ? `${user?.name?.split(" ")[0]}` : "User1"}</h2>

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
