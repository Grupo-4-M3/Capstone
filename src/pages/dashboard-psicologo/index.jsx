import { Header } from "../../components/Header";
import { ItemLista } from "../../components/ItemLista";
import { List } from "../../components/Lista";
import Calendar from "react-calendar";
import API from "../../services/api";
import { Agenda, Box, BoxLista, Container } from "./styles";
import { useContext, useEffect } from "react";
import { UserContext } from "../../providers/user";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function DashboardPsicologo() {
  const { usuario } = useContext(UserContext);
  const [psicologo, setPsicologo] = useState({});
  const [patients, setPatients] = useState([]);
  const history = useHistory();
  console.log(usuario);

  useEffect(()=>{
    usuario?.accessToken
    ?
      usuario.type !== "psicologo"
      ?
      history.push("/dashboard-paciente")
      :
      <></>
    :
    history.push("/")
  },[])

  useEffect(() => {
    API.get(`/psychologists?userId=${usuario?.id}`)
      .then((resp) => {
        setPsicologo(resp.data[0]);
        setPatients(resp.data[0].patients);
      })
      .catch((err) => console.log(err));
  }, []);

  const direcionar = (id) => {
    console.log("clicou");
    return history.push(`/paciente/${id}`);
  };

  return (
    <Container>
      <Header type="dashBoard" user={psicologo} />
      <Box>
        <BoxLista>
          <List tituloList="Pacientes" size="360px">
            {patients.map((paciente) => (
              <ItemLista
                key={paciente.userId}
                typeCard="pessoa"
                imgPessoa={paciente.img}
                nome={paciente.name}
                descricao={paciente.complaint}
                onclick={() => {
                  direcionar(paciente.userId);
                }}
              />
            ))}
          </List>
        </BoxLista>
        <Agenda>
          <header>
            <h3>Agenda</h3>
          </header>
          <div>
            <Calendar />
          </div>
        </Agenda>
      </Box>
    </Container>
  );
}

export default DashboardPsicologo;
