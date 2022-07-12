import { Header } from "../../components/Header";
import Imagem from "../../assets/imagem.png";
import { StyledHome } from "./style";
import { Rodape } from "./style";
import { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../../providers/user";
import { useHistory } from "react-router-dom";

function Home() {

  const {usuario} = useContext(UserContext)
  const history = useHistory()

  useEffect(()=>{
    usuario?.accessToken && usuario?.type === "psicologo"
    ?
    history.push("/dashboard-psicologo")
    :
    usuario?.accessToken && usuario?.type === "paciente"
    ?
    history.push("/dashboard-paciente")
    :
    <></>
  })
  
  return (
    <StyledHome>
      <div className="Imagem">
        <header>
          <Header type="home" />
        </header>
        <div className="title">
          <h2>Una-se a nós</h2>
        </div>
        <img src={Imagem} alt="" />
      </div>
      <Rodape>
        <span>
          <strong>P.O.: </strong>
          Alex Flavio
        </span>
        <span>
          <strong>Scrum Master: </strong>
          Susimara Roberti
        </span>
        <span>
          <strong>Tech Leader: </strong>
          Renan Martini
        </span>
        <span>
          <strong>Q.A. :</strong>
          Abner Leal
        </span>
        <span>
          <strong>Q.A. :</strong>
          Rodolfo Jaques
        </span>
      </Rodape>
    </StyledHome>
  );
}

export default Home;
