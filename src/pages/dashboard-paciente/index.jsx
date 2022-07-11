import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { ItemLista } from "../../components/ItemLista";
import { List } from "../../components/Lista";
import { API } from "../../services/api";
import { StyledDashboardPaciente } from "./style";

function DashboardPaciente() {
  const [psicologos, setPsicologos] = useState([]);
  useEffect(() => {
    API.get("/psychologists", {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imp1bGlhQGVtYWlsLmNvbSIsImlhdCI6MTY1NzQxNDI1NSwiZXhwIjoxNjU3NDE3ODU1LCJzdWIiOiI2In0.7T1KW2qdUqdr0Y7NtpU3kXbYhNNTDUKqRuTAIicIBq0`,
      },
    }).then((resp) => setPsicologos(resp.data));
    API.post("/login", {
      Body: {
        email: "julia@email.com",
        password: "123456",
      },
    }).then((resp) => console.log(resp.data));
  }, []);

  return (
    <StyledDashboardPaciente>
      <Header type={"dashboard"} user={""} />
      <div className={"container"}>
        <div className="psicologos">
          <List tituloList={"PSICÓLOGOS"} size={"100%"} sizeY={"200px"}>
            {psicologos.map((psico) => (
              <ItemLista
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
