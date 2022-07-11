import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { ItemLista } from "../../components/ItemLista";
import { List } from "../../components/Lista";
import { UserContext } from "../../providers/user";
import API from "../../services/api";
import { StyledDashboardPaciente } from "./style";

function DashboardPaciente() {
  const [psicologos, setPsicologos] = useState([]);
  const [paciente, setPaciente] = useState([]);
  const [horario, setHorario] = useState([]);

  const { usuario } = useContext(UserContext);
  console.log(usuario);
  console.log(paciente.calendar);
  useEffect(() => {
    API.get(`/psychologists`, {
      headers: {
        Authorization: `Bearer ${usuario.accessToken} `,
      },
    }).then((resp) => setPsicologos(resp.data));
    API.get(`/patients?userId=${usuario.id}`, {
      headers: {
        Authorization: `Bearer ${usuario.accessToken}`,
      },
    }).then((resp) => setPaciente(resp.data[0]));
    //tirar aviso
  }, []);

  for (var prop in paciente.calendar) {
    // ctrl+shift+k (para abrir o console no mozilla firefox)
    for (var hora in paciente.calendar[prop]) {
      paciente.calendar[prop][hora].disponivel &&
        setHorario(...horario, paciente.calendar[prop][hora]);
    }
  }

  return (
    <StyledDashboardPaciente>
      <Header type={"dashBoard"} user={paciente} />
      <div className={"container"}>
        <div className="psicologos">
          <List tituloList={"PSICÓLOGOS"} size={"100%"} sizeY={"200px"}>
            {psicologos.map((psico) => (
              <ItemLista
                sx={"cursor:pointer;"}
                descricao={`${psico.emphasis} `}
                nome={psico.name}
                imgPessoa={psico.img}
                key={psico.id}
                onClick={() => console.log("ok")}
              />
            ))}
          </List>
        </div>
        <div className="horarios">
          <List tituloList={"Meus Horários"} size={"100%"} sizeY={"100px"}>
            <ItemLista dataAgendamento="15/08/22" typeCard="agendamento" />
          </List>
        </div>
      </div>
    </StyledDashboardPaciente>
  );
}

export default DashboardPaciente;
