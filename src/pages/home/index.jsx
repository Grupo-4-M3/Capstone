import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Rodape, StyledHome } from "./style";

function Home({ rodape, teste }) {
  return (
    <StyledHome>
      <Header className="Header">
        <Button nameButton="Login" />
        <Button nameButton="Registre-se" />
      </Header>
      <h1>Una-se a nós</h1>
      {rodape && <Rodape className="Rodape" />}
    </StyledHome>
  );
}

export default Home;
