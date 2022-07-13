import { Header } from "../../components/Header";
import Imagem from "../../assets/imagem.png";
import { Box, StyledHome, StyledModal } from "./style";
import { Rodape } from "./style";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { UserContext } from "../../providers/user";
import { useHistory } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

function Home() {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { usuario } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    usuario?.accessToken && usuario?.type === "psicologo" ? (
      history.push("/dashboard-psicologo")
    ) : usuario?.accessToken && usuario?.type === "paciente" ? (
      history.push("/dashboard-paciente")
    ) : (
      <></>
    );
  });

  return (
    <StyledHome>
      <Header type="home" />
      <Box>
        <h2>Una-se a nós</h2>
        <p>
          Conheça mais <span onClick={handleClickOpen}>sobre nós</span>
        </p>

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Sobre nós:"}</DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <StyledModal>
                <p>
                  <strong>Quem Somos:</strong>
                </p>
                <p>
                  Somos uma empresa especializada em viabilizar a aproximação
                  entre profissionais da psicologia clínica e pacientes que por
                  diversos motivos buscam atendimento psicológico na modalidade
                  remota (online);
                </p>
                <p>
                  <strong>O que Fazemos: </strong>
                </p>
                <p>
                  Disponibilizamos uma plataforma onde profissionais da
                  psicologia devidamente inscritos e regulares nos Conselhos
                  Regionais de Psicologia (CRP) registram-se disponibilizando
                  horários para agendamento de consultas via remota.
                </p>
                <p>
                  <strong>Quem pode utilizar a plataforma:</strong>
                </p>
                <p>
                  Pessoas que tenham impedimentos em estar se deslocando a um
                  consultório para realizar um acompanhamento psicológico podem
                  cadastrar-se na plataforma e ter acesso aos profissionais
                  registrados consultando suas especialidades e agendas
                  disponíveis.
                </p>
                <p>
                  <strong>Qual investimento por parte do paciente:</strong>
                </p>
                <p>
                  As consultas não possuem custo para o paciente, uma vez que
                  trabalhamos através de Pro Bono.
                </p>
                <p>
                  <strong>O que é Pro Bono?</strong>
                </p>
                <p>
                  Do latim, Pro Bono significa “para o bem”. Através dessa
                  modalidade, muito conhecida no meio jurídico e também no
                  médico, conseguimos manter uma rede de profissionais
                  especializados e com experiência de consultório que se
                  disponibilizam em exercer parte do seu tempo laboral de
                  maneira voluntária, ou seja, sem custos para paciente.
                </p>
              </StyledModal>
            </DialogContentText>
          </DialogContent>
        </Dialog>
        <div>
          <img src={Imagem} alt="" />
        </div>
      </Box>
      <Rodape>
        <span>
          <strong>P.O.: </strong>
          Alex Flavio
        </span>
        <span>
          <strong>Scrum Master: </strong>
          Susimara Roberti
        </span>
        <span>
          <strong>Tech Leader: </strong>
          Renan Martini
        </span>
        <span>
          <strong>Q.A. :</strong>
          Abner Leal
        </span>
        <span>
          <strong>Q.A. :</strong>
          Rodolfo Jaques
        </span>
      </Rodape>
    </StyledHome>
  );
}

export default Home;
