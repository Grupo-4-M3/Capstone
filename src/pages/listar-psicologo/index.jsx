import { useContext, useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useHistory, useParams } from "react-router-dom";

import Card from "../../components/Card";
import { Header } from "../../components/Header";
import { SecMain } from "./styles";
import API from "../../services/api";
import { UserContext } from "../../providers/user";
import { ModalHorario } from "../../components/ModalHorario";
import ModalConfirmation from "../../components/modal_confirmacao";

function ListarPsicologo() {
  const { usuario } = useContext(UserContext);

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

  const [pessoa, setPessoa] = useState({});
  const [paciente, setPaciente] = useState({});

  const [data, setData] = useState(new Date());
  const [horarios, setHorarios] = useState([]);
  const [confirmHorario, setConfirmHorario] = useState({});

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [confirm, setConfirm] = useState(false);

  const params = useParams();

  const { id } = params;

  const callBack = (event, horario) => {
    handleClose();
    setConfirm(true);
    setConfirmHorario(horario);
    return horario;
  };

  const callBackCalendar = (event) => {
    setData(event);
    handleOpen();
  };

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

  useEffect(() => {
    const { calendar } = pessoa;
    const arrayApoio = [];
    const chaveDia = `dia${data.getTime()}`;
    if(calendar){

      if(chaveDia in calendar){
        for(let chave in calendar[chaveDia]){
          if(calendar[chaveDia][chave].disponivel){
            arrayApoio.push(calendar[chaveDia][chave])
          }
        }
      }
      setHorarios(arrayApoio);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

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
            <Calendar onChange={callBackCalendar} value={data} />
          </div>
        </article>
      </section>
      <ModalHorario
        open={open}
        handleClose={handleClose}
        horarios={horarios}
        callBack={callBack}
      />
      <ModalConfirmation
        dia={"dia" + data.getTime()}
        open={confirm}
        setOpen={setConfirm}
        evento={confirmHorario}
        paciente={paciente}
        psicologo={pessoa}
      />
    </SecMain>
  );
}

export default ListarPsicologo;
