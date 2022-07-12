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
  
  useEffect(()=>{
    usuario?.accessToken
    ?
      usuario.type !== "paciente"
      ?
      history.push("/dashboard-psicologo")
      :
      <></>
    :
    history.push("/")
  },[])

  const history = useHistory();

  let diaAtual = new Date();
  diaAtual.setHours("00", "00", "00", "00");

  const [horario, setHorario] = useState([]);

  const { usuario } = useContext(UserContext);

  useEffect(() => {
    API.get(`/psychologists`, {
      headers: {
        Authorization: `Bearer ${usuario?.accessToken} `,
      },
    }).then((resp) => setPsicologos(resp.data));
    API.get(`/patients?userId=${usuario?.id}`, {
      headers: {
        Authorization: `Bearer ${usuario?.accessToken}`,
      },
    }).then((resp) => setPaciente(resp.data[0]));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(psicologos);
  console.log(paciente.calendar);
  for (var prop in paciente.calendar) {
    if (parseInt(prop.replace("dia", "")) >= diaAtual.getTime()) {
      for (var hora in paciente.calendar[prop]) {
        paciente.calendar[prop][hora].disponivel &&
          setHorario(...horario, paciente.calendar[prop][hora]);
      }
    }
  }
  console.log(horario);
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
                onClick={() => history.push(`/psicologo/${psico.userId}`)&& console.log(`ok ${psico.userId}`)}
              />
            ))}
          </List>
        </div>
        <div className="horarios">
          <List tituloList={"Meus Horários"} size={"100%"} sizeY={"100px"}>
            {horario.map((hora) => (
              <ItemLista
                dataAgendamento={new Intl.DateTimeFormat("pt-BR").format(
                  new Date(hora.dia)
                )}
                nome={hora.psicologo.name}
                horario={hora.horario}
                typeCard="agendamentoPaciente"
              />
            ))}
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
