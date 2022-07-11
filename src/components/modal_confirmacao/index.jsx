import { Box, Modal } from "@mui/material";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useContext } from "react";
import { toast } from "react-toastify";
import { UserContext } from "../../providers/user";
import API from "../../services/api";
import { Button } from "../Button";
import { style } from "./style";

function ModalConfirmation({
  hora,
  dia,
  paciente,
  psicologo,
  open,
  setOpen,
  evento,
}) {
  const { usuario } = useContext(UserContext);
  const updateCalendars = (res) => {
    const calendarPaciente = paciente.calendar;
    const calendarPsicologo = psicologo.calendar;
    API.patch;
  };
  const googleResponse = (res) => {
    const { code } = res;
    axios
      .post("http://localhost:4000/api/create-tokens", { code })
      .then((res) => {
        axios
          .post("http://localhost:4000/api/create-event", {
            summary: `Consulta de ${paciente?.name} com ${psicologo?.name}`,
            description: `Queixas do paciente: ${paciente?.complaint}`,
            location: "Online",
            startDateTime: hora,
            endDateTime: hora,
            attendees: [{ email: paciente.email }, { email: psicologo.email }],
          })
          .then((res) => {
            toast.success("Evento Agendado com sucesso!");
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
    <Modal open={open} onClose={() => setOpen(false)}>
      <Box sx={style}>
        <Button onclick={login} />
      </Box>
    </Modal>
  );
}

export default ModalConfirmation;
