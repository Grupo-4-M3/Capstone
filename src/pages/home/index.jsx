import { Header } from "../../components/Header";
import Imagem from "../../assets/imagem.png";
import { StyledHome } from "./style";
import { Rodape } from "./style";

function Home() {
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
