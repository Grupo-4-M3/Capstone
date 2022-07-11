import { Box, Modal } from "@mui/material";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { toast } from "react-toastify";
import API from "../../services/api";
import { Button } from "../Button";
import { style } from "./style";

function ModalConfirmation({
  dia,
  open,
  setOpen,
  evento,
  paciente,
  psicologo,
}) {
  const updateCalendars = (res) => {
    const newEvent = {
      ...evento,
      paciente: paciente,
      disponivel: false,
      link: res?.data?.hangoutLink,
      id_reunião: res?.data?.id,
    };
    const newPacient = {
      ...paciente,
    };
    const newPatients = () => {
      const jaExiste = psicologo.patients.find(
        (patient) => patient.id === paciente.id
      );
      if (jaExiste) {
        return psicologo.patients;
      }
      return [...psicologo.patients, paciente];
    };
    const newPsicologo = {
      ...psicologo,
      patients: newPatients(),
    };
    newPacient.calendar[dia]["hora" + evento?.horario?.split(":")[0]] =
      newEvent;
    newPsicologo.calendar[dia]["hora" + evento?.horario?.split(":")[0]] =
      newEvent;
    API.patch(`/patients/${paciente.id}`, newPacient);
    API.patch(`/psychologists/${psicologo.id}`, newPsicologo);
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
            startDateTime: evento.hora,
            endDateTime: evento.hora,
            attendees: [{ email: paciente.email }, { email: psicologo.email }],
          })
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
    <Modal open={open} onClose={() => setOpen(false)}>
      <Box sx={style}>
        <Button
          onclick={login}
          nameButton="Confirmar"
          backcolor="#54BAB9"
          size="100px"
          sizeY="50px"
        />
      </Box>
    </Modal>
  );
}

export default ModalConfirmation;
