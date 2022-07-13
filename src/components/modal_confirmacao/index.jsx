import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import API from "../../services/api";
import { Button } from "../Button";
import { StyledModalConfirm } from "./style";

function ModalConfirmation({
  dia,
  open,
  setOpen,
  evento,
  paciente,
  psicologo,
  type,
}) {
  const [newEventState, setNewEventState] = useState({});
  useEffect(() => {
    setNewEventState(evento);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const updateCalendars = (res) => {
    const newEvent = {
      ...evento,
      paciente: paciente,
      psicologo: psicologo,
      disponivel: false,
      link: res?.data?.data.hangoutLink,
      id_reuniao: res?.data?.data.id,
    };

    const newPaciente = {
      calendar: {
        ...paciente.calendar,
        [`${dia}`]: {
          ...paciente.calendar[`${dia}`],
          [`hora${evento.horario.split(":")[0]}`]: {
            ...newEvent,
            disponivel: true,
          },
        },
      },
    };

    const newPsicologo = {
      calendar: {
        ...psicologo.calendar,
        [`${dia}`]: {
          ...psicologo.calendar[`${dia}`],
          [`hora${evento.horario.split(":")[0]}`]: newEvent,
        },
      },
    };

    API.patch(`/patients/${paciente.id}`, newPaciente)
      .then((res) => setNewEventState(newEvent))
      .catch((erro) => console.log(erro));
    API.patch(`/psychologists/${psicologo.id}`, newPsicologo).catch((erro) =>
      console.log(erro)
    );
  };

  const formatDate = () => {
    const data = new Date(parseInt(dia.replace("dia", "")));
    const ano = data.getUTCFullYear();
    const mes = data.getMonth();
    const newDia = data.getUTCDate();

    return `${ano}-${mes < 10 ? "0" + (mes + 1) : mes + 1}-${
      newDia < 10 ? "0" + newDia : newDia
    }`;
  };

  const googleResponse = (res) => {
    const { code } = res;
    axios
      .post(
        "https://google-calendar-api-calmmind.herokuapp.com/api/create-tokens",
        { code }
      )
      .then((res) => {
        axios
          .post(
            "https://google-calendar-api-calmmind.herokuapp.com/api/create-event",
            {
              summary: `Consulta de ${paciente?.name} com ${psicologo?.name}`,
              description: `Queixas do paciente: ${paciente?.complaint}`,
              location: "Online",
              startDateTime: `${formatDate()}T${
                evento.horario.split(" - ")[0]
              }`,
              endDateTime: `${formatDate()}T${evento.horario.split(" - ")[1]}`,
              attendees: [
                { email: paciente.email },
                { email: psicologo.email },
              ],
            }
          )
          .then((res) => {
            toast.success("Evento Agendado com sucesso!");
            updateCalendars(res);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };

  const login = useGoogleLogin({
    onSuccess: (code) => {
      googleResponse(code);
    },
    scope: "openid email profile https://www.googleapis.com/auth/calendar",
    flow: "auth-code",
    onError: (error) => console.log(error),
  });

  return (
    <StyledModalConfirm open={open} onClose={() => setOpen(false)}>
      <div className="buttonDiv">
        {(newEventState.disponivel || evento.disponivel) &&
        type !== "dashboard" ? (
          <Button
            onclick={login}
            nameButton="Confirmar"
            backcolor="#54BAB9"
            size="100px"
            sizeY="50px"
          />
        ) : (
          <a
            href={`${evento.link || newEventState.link}`}
            target="_blank"
            rel="noreferrer"
          >
            <Button
              nameButton="Ir para chamada"
              backcolor="#54BAB9"
              size="100px"
              sizeY="50px"
            />
          </a>
        )}
      </div>
    </StyledModalConfirm>
  );
}

export default ModalConfirmation;
