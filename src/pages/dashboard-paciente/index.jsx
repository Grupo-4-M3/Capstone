import { Header } from "../../components/Header";
import { ItemLista } from "../../components/ItemLista";
import { List } from "../../components/Lista";
import { API } from "../../services/api";
import { StyledDashboardPaciente } from "./style";

function DashboardPaciente() {
  API.get("/psychologists", {}, {});
  return (
    <StyledDashboardPaciente>
      <Header type={"dashboard"} user={""} />
      <div className={"container"}>
        <div className="psicologos">
          <List tituloList={"PSICÓLOGOS"} size={"100%"}>
            <ItemLista onClick={() => console.log("ok")} />
            <ItemLista onClick={() => console.log("ok")} />
            <ItemLista onClick={() => console.log("ok")} />
            <ItemLista onClick={() => console.log("ok")} />
            <ItemLista onClick={() => console.log("ok")} />
          </List>
        </div>
        <div className="horarios">
          <List tituloList={"Meus Horários"} size={"100%"}>
            <ItemLista
              dataAgendamento="15/08/22"
              typeCard="agendamento"
              horario="20:00"
            />
            <ItemLista
              dataAgendamento="15/08/22"
              typeCard="agendamento"
              horario="20:00"
            />
          </List>
        </div>
      </div>
    </StyledDashboardPaciente>
  );
}

export default DashboardPaciente;
