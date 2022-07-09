import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

import Card from "../../components/Card";
import { Header } from "../../components/Header";
import { SecMain } from "./styles";

function ListarPsicologo() {
  return <SecMain>
    <Header type={"dashBoard"}/>
    <div className="alinhamento">
      <section className="container">
        <Card type={"psicologo"} pessoa={{
          "userId": 3,
          "name": "Rogerio Alves Cardoso",
          "img":"https://www.attendit.net/images/easyblog_shared/July_2018/7-4-18/totw_network_profile_400.jpg",
          "emphasis": "Psicologia Clínica com ênfase em psicanalise",
          "experience": "5 anos",
          "schedules": "8:00 - 12:00",
          "working_days": "Seg/Qua/Sex",
          "patients": [],
          "calendar": [],
          "id": 1
          }}
          maxSizeY="70vh"
          />
      </section>
      <section className="agenda">
          <header>
            <h3>Agenda</h3>
          </header>
          <div className="calendario">
            <Calendar />
          </div>        
      </section>
    </div>
  </SecMain>;
}

export default ListarPsicologo;
