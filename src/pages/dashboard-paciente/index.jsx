import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { ItemLista } from "../../components/ItemLista";
import { List } from "../../components/Lista";
import { UserContext } from "../../providers/user";
import API from "../../services/api";
import { StyledDashboardPaciente } from "./style";
import { useHistory } from "react-router-dom";

function DashboardPaciente() {
  const [psicologos, setPsicologos] = useState([]);
  const [paciente, setPaciente] = useState([]);

  useEffect(() => {
    usuario?.accessToken ? (
      usuario.type !== "paciente" ? (
        history.push("/dashboard-psicologo")
      ) : (
        <></>
      )
    ) : (
      history.push("/")
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const history = useHistory();

  useEffect(() => {
    usuario?.accessToken ? (
      usuario.type !== "paciente" ? (
        history.push("/dashboard-psicologo")
      ) : (
        <></>
      )
    ) : (
      history.push("/")
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    API.get(`/psychologists`).then((resp) => setPsicologos(resp.data));

    API.get(`/patients?userId=${usuario?.id}`).then(
      (resp) => setPaciente(resp.data[0]) && buscaHorario()
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let diaAtual = new Date();
  diaAtual.setHours("00", "00", "00", "00");

  const [horario, setHorario] = useState([]);
  let horas = [];
  const { usuario } = useContext(UserContext);
  function buscaHorario() {
    for (var prop in paciente.calendar) {
      if (parseInt(prop.replace("dia", "")) >= diaAtual.getTime()) {
        for (var hora in paciente.calendar[prop]) {
          paciente.calendar[prop][hora].disponivel &&
            horas.push(paciente.calendar[prop][hora]);
        }
      }
    }
    setHorario(horas);
  }

  console.log(diaAtual.getTime());
  return (
    <StyledDashboardPaciente>
      <Header type={"dashBoard"} user={paciente} />
      <div className={"container"}>
        <div className="psicologos">
          <List tituloList={"PSICÓLOGOS"} size={"100%"} sizeY={"200px"}>
            {psicologos.map((psico) => (
              <ItemLista
                typeCard="pessoa"
                descricao={`${psico.emphasis} `}
                nome={psico.name}
                imgPessoa={psico.img}
                key={psico.id}
                onclick={() => history.push(`/psicologo/${psico.userId}`)}
              />
            ))}
          </List>
        </div>
        <div className="horarios">
          <List tituloList={"Meus Horários"} size={"100%"} sizeY={"100px"}>
            {/* {horario.map((hora) => (
              <ItemLista
                dataAgendamento={new Intl.DateTimeFormat("pt-BR").format(
                  new Date(hora.dia)
                )}
                nome={hora.psicologo.name}
                horario={hora.horario}
                typeCard="agendamentoPaciente"
              />
            ))} */}
            <ItemLista
              dataAgendamento="15/08/22"
              typeCard="agendamentoPaciente"
            />
          </List>
        </div>
      </div>
    </StyledDashboardPaciente>
  );
}

export default DashboardPaciente;
