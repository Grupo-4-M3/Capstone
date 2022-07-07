import React from "react";
import { Header } from "../Header";
import { Rodape, StyledHome } from "./style";
import Imagem from "../../imagem.png";
export default function Page({ children, type }) {
  switch (type) {
    case "home":
      return (
        <StyledHome>
          <div className="Imagem">
            <header>
              <Header type={"home"} />
            </header>
            <div className="title">
              <h2>Una-se a nós</h2>
            </div>
            <img src={Imagem} />
          </div>
          <Rodape>
            <span>
              <strong>P.O:</strong>
              Alex Flavio
            </span>
            <span>
              <strong>Scrown-Master:</strong>
              Susimara Roberti
            </span>
            <span>
              <strong>Tech Lider:</strong>
              Renan
            </span>

            <span>
              <strong>Devs:</strong>
              Abner Leal, Rodolfo Jaques
            </span>
          </Rodape>
        </StyledHome>
      );
    // case "login":
    //   return (
    //     <StyledHeader>
    //       <h1 onClick={levarAoHome}>
    //         Call<span>Mind</span>
    //       </h1>
    //       <div>
    //         <Button onclick={levarAoRegistro} nameButton={"Registro"}></Button>
    //       </div>
    //     </StyledHeader>
    //   );
    // // case "registro":
    // //   return (
    // //     <StyledHeader>
    // //       <h1 onClick={levarAoHome}>
    // //         Call<span>Mind</span>
    // //       </h1>
    // //       <div>
    // //         <Button onclick={levarAoLogin} nameButton={"Login"}></Button>
    // //       </div>
    // //     </StyledHeader>
    // //   );
    // // case "cadastro":
    // //   return (
    // //     <StyledHeader>
    // //       <h1>
    // //         Call<span>Mind</span>
    // //       </h1>
    // //       <div>
    // //         <Button onclick={levarAoHome} nameButton={"Logout"}></Button>
    // //       </div>
    // //     </StyledHeader>
    // //   );
    // // case "dashBoard":
    // //   return (
    // //     <StyledHeader dash>
    // //       <h1 onClick={levarAoDashboard}>
    // //         Call<span>Mind</span>
    // //       </h1>
    // //       <div>
    // //         <figure>
    // //           <img src={!!user ? user.img : ""} alt="" />
    // //         </figure>
    // //         <div>
    // //           <h2>{!!user ? user.name : "Teste"}</h2>
    // //           <Button nameButton={"Logout"}></Button>
    // //         </div>
    // //       </div>
    // //     </StyledHeader>
    // //   );
    // // default:
    //   return (
    //     <StyledHeader>
    //       <h1 onClick={levarAoDashboard}>
    //         Call<span>Mind</span>
    //       </h1>
    //       <div>{children}</div>
    //     </StyledHeader>
    //   );
    default:
      return "ops";
  }
}
