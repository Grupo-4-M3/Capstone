import { useContext, useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useHistory, useParams } from "react-router-dom";

import Card from "../../components/Card";
import { Header } from "../../components/Header";
import { SecMain } from "./styles";
import API from "../../services/api";
import { UserContext } from "../../providers/user";

function ListarPsicologo() {
  const { usuario } = useContext(UserContext);

  const history = useHistory()
  
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

  const [pessoa, setPessoa] = useState({});
  const [paciente, setPaciente] = useState({});

  const [value, setValue] = useState();

  const params = useParams();

  const { id } = params;

  useEffect(() => {

      API.get(`/psychologists?userId=${id}`)
      .then((resp) => setPessoa(resp.data[0]))
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    API.get(`/patients?userId=${usuario?.id}`)
      .then((resp) => setPaciente(resp.data[0]))
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SecMain>
      <Header type={"dashBoard"} user={paciente} />
      <section className="alinhamento">
        <article className="container">
          <Card type={"psicologo"} pessoa={pessoa} maxSizeY="70vh" />
        </article>
        <article className="agenda">
          <header>
            <h3>Agenda</h3>
          </header>
          <div className="calendario">
            <Calendar value={value} onChange={setValue} />
            {console.log(value?.getTime())}
          </div>
        </article>
      </section>
    </SecMain>
  );
}

export default ListarPsicologo;
