import { Button } from "../../components/Button";
import { ItemLista } from "../../components/ItemLista";
import { List } from "../../components/Lista";

function Login() {
  return <main>
    <List tituloList={"Paciente"} size="90%" sizeY="70vh">
      <ItemLista />
    </List>
    <Button size="100px" sizeY="40px" nameButton={"buttom"}/>
  </main>;
}

export default Login;
