import { Header } from "../../components/Header";
import { ItemLista } from "../../components/ItemLista";
import { List } from "../../components/Lista";
import Calendar from "react-calendar";
import API from "../../services/api";
import { Agenda, Box, BoxCont, BoxLista, Container } from "./styles";
import { useContext, useEffect } from "react";
import { UserContext } from "../../providers/user";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { ModalHorariosMedico } from "../../components/ModalHorariosMedico";
import ModalConfirmation from "../../components/modal_confirmacao";

function DashboardPsicologo() {
  const { usuario } = useContext(UserContext);
  const [psicologo, setPsicologo] = useState(false);
  const [patients, setPatients] = useState([]);

  const [agendamentos, setAgendamentos] = useState([]);
  const [horarios, setHorarios] = useState({});

  const [data, setData] = useState(new Date().getTime());

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [event, setEvent] = useState({});
  const [modal, setModal] = useState(false);

  const history = useHistory();

  useEffect(() => {
    usuario?.accessToken ? (
      usuario.type !== "psicologo" ? (
        history.push("/dashboard-paciente")
      ) : (
        <></>
      )
    ) : (
      history.push("/")
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    API.get(`/psychologists?userId=${usuario?.id}`)
      .then((resp) => {
        setPsicologo(resp.data[0]);
        setPatients(resp.data[0].patients);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    const agendaApoio = {};
    agendaApoio[`dia${data}`] = {};

    if (psicologo) {
      if (`dia${data}` in psicologo?.calendar) {
        const agenda = psicologo.calendar[`dia${data}`];

        for (let i = 0; i < 24; i++) {
          const verificacao = agenda.hasOwnProperty(`hora${i}`);

          if (!verificacao) {
            agendaApoio[`dia${data}`][`hora${i}`] = {
              id_reuniao: "",
              link: "",
              psicologo: {
                name: psicologo.name,
                email: psicologo.email,
                id: psicologo.id,
              },
              paciente: {},
              compareceu: true,
              disponivel: true,
              horario: `${i < 10 ? "0" + i : i}:00 - ${
                i + 1 < 10 ? "0" + (i + 1) : i + 1
              }:00`.replace("24:00", "00:00"),
              dia: data,
              hora: `hora${i}`,
            };
          }
        }
      } else {
        for (let i = 0; i < 24; i++) {
          agendaApoio[`dia${data}`][`hora${i}`] = {
            id_reuniao: "",
            link: "",
            psicologo: {
              name: psicologo.name,
              email: psicologo.email,
              id: psicologo.id,
            },
            paciente: {},
            compareceu: true,
            disponivel: true,
            horario: `${i < 10 ? "0" + i : i}:00 - ${
              i + 1 < 10 ? "0" + (i + 1) : i + 1
            }:00`.replace("24:00", "00:00"),
            dia: data,
            hora: `hora${i}`,
          };
        }
      }
      setHorarios(agendaApoio);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    const arrayApoio = [];
    const { calendar } = psicologo;

    for (let dia in calendar) {
      for (let hora in calendar[dia]) {
        if (!calendar[dia][hora].disponivel) {
          arrayApoio.push(calendar[dia][hora]);
        }
      }
    }

    setAgendamentos(arrayApoio);
    // eslint-disable-next-line no-sparse-arrays
  }, [, psicologo]);

  const direcionar = (id) => {
    return history.push(`/paciente/${id}`);
  };

  const onclickAgenda = (event) => {
    setData(event.getTime());
    handleOpen();
  };

  return (
    <Container>
      <Header type="dashBoard" user={psicologo} />
      <Box>
        <BoxLista>
          <List tituloList="Pacientes" size="90vw" maxSizeWidth="500px">
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

        <BoxCont>
          <Agenda>
            <header>
              <h3>Agenda</h3>
            </header>
            <div>
              <Calendar onChange={onclickAgenda} />
            </div>
          </Agenda>

          <List
            className="listinha"
            tituloList="Agendamentos"
            maxSizeY="300px"
            sizeY="25vh"
            size="90%"
            maxSizeWidth="90%"
          >
            {agendamentos?.map((agendamento, index) => (
              <ItemLista
                key={index}
                typeCard="agendamento"
                dataAgendamento={agendamento.dia}
                nome={
                  agendamento.paciente.name.split(" ")[0] +
                  " " +
                  agendamento.paciente.name.split(" ")[1]
                }
                horario={agendamento.horario}
                onclick={() => {
                  setEvent(agendamento);
                  setModal(true);
                }}
              />
            ))}
          </List>
        </BoxCont>
        <ModalHorariosMedico
          open={open}
          handleClose={handleClose}
          dia={horarios}
          psicologo={psicologo}
        />
      </Box>

      <ModalConfirmation
        evento={event}
        open={modal}
        setOpen={setModal}
        type="dashboard"
      />
    </Container>
  );
}

export default DashboardPsicologo;
