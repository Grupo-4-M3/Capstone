import { Button } from "../../components/Button";
import FormComponent from "../../components/Form";
import API from "../../services/api";
import { Box, Container, Errors } from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { Header } from "../../components/Header";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../providers/user";
import { useEffect } from "react";

function CadastroPsicologo() {
  const { usuario } = useContext(UserContext);

  useEffect(() => {
    usuario?.accessToken &&
    usuario?.type === "psicologo" &&
    !usuario?.firstLogin ? (
      history.push("/dashboard-psicologo")
    ) : usuario?.accessToken &&
      usuario?.type === "paciente" &&
      !usuario?.firstLogin ? (
      history.push("/dashboard-paciente")
    ) : (
      <></>
    );
  });

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Nome e Sobrenome obrigatórios")
      .matches(
        /^[A-ZÀ-Ÿ][A-zÀ-ÿ']+\s([A-zÀ-ÿ']\s?)*[A-ZÀ-Ÿ][A-zÀ-ÿ']+$/,
        "Primeira letra de cada nome maiúscula, " +
          "sem espaços duplos " +
          "e sem números"
      ),
    img: yup.string().required("Insira a url da sua foto de perfil"),
    emphasis: yup.string().required("Por favor, insira sua especialização"),
    experience: yup
      .string()
      .required("Por favor, insira sua(s) abordagem(s) clínica(s)"),
    schedules: yup.string().required("Campo obrigatório"),
    working_days: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const history = useHistory();

  const submeter = ({
    name,
    img,
    emphasis,
    experience,
    schedules,
    working_days,
  }) => {
    const userId = usuario.id;
    const psicologo = {
      userId,
      name,
      img,
      emphasis,
      experience,
      schedules,
      working_days,
      patients: [],
      calendar: {},
      email: usuario.email,
    };

    API.post("/psychologists", psicologo)
      .then((_) => {
        API.patch(`/users/${userId}`, { firstLogin: false })
          .then((response) => response)
          .catch((err) => console.error(err));
      })
      .then((_) => {
        toast.success("Dados cadastrados com sucesso!");
        return history.push("/dashboard-psicologo");
      })
      .catch((_) =>
        toast.error("Erro ao cadastar, verifique os campos e tente novamente!")
      );
  };

  return (
    <Container>
      <Header type="cadastro" />
      <Box>
        <FormComponent
          title="Cadastro"
          onSubmitFunction={handleSubmit(submeter)}
          inputSize="7vh"
        >
          <div>
            <label>
              Nome Completo: *{" "}
              {errors.name?.message && (
                <Errors> - {errors.name?.message}</Errors>
              )}
            </label>
            <input
              type="text"
              placeholder="Digite seu nome completo aqui..."
              {...register("name")}
            />
          </div>
          <div>
            <label>
              Imagem de perfil: *{" "}
              {errors.img?.message && <Errors> - {errors.img?.message}</Errors>}
            </label>
            <input
              type="text"
              placeholder="Insira a url da imagem aqui..."
              {...register("img")}
            />
          </div>
          <div>
            <label>
              Abordagem em: *{" "}
              {errors.emphasis?.message && (
                <Errors> - {errors.emphasis?.message}</Errors>
              )}
            </label>
            <input
              type="text"
              placeholder="Digite sua áreas de atuação aqui..."
              {...register("emphasis")}
            />
          </div>
          <div>
            <label>
              Experiência Clínica: *{" "}
              {errors.experience?.message && (
                <Errors> - {errors.experience?.message}</Errors>
              )}
            </label>
            <input
              type="text"
              placeholder="Digite a quanto tempo está atuando..."
              {...register("experience")}
            />
          </div>
          <div>
            <label>
              Faixa de horário que atenderá: *{" "}
              {errors.schedules?.message && (
                <Errors> - {errors.schedules?.message}</Errors>
              )}
            </label>
            <select {...register("schedules")}>
              <option value=">08:00 - 12:00">08:00 - 12:00</option>
              <option value="14:00 - 18:00">14:00 - 18:00</option>
              <option value="18:00 - 22:00">18:00 - 22:00</option>
              <option value="08:00 - 12:00 / 14:00 - 18:00">
                08:00 - 12:00 / 14:00 - 18:00
              </option>
              <option value="14:00 - 18:00 / 18:00 - 22:00">
                14:00 - 18:00 / 18:00 - 22:00
              </option>
              <option value="08:00 - 12:00 / 18:00 - 22:00">
                08:00 - 12:00 / 18:00 - 22:00
              </option>
            </select>
          </div>
          <div>
            <label>
              Dias da semana que atenderá: *{" "}
              {errors.working_days?.message && (
                <Errors> - {errors.working_days?.message}</Errors>
              )}
            </label>
            <input
              type="text"
              placeholder="Digite no formato Seg/Ter/Qua ..."
              {...register("working_days")}
            />
          </div>
          <Button
            type="submit"
            size="100%"
            sizeY="50px"
            nameButton="Cadastrar-se"
          ></Button>
        </FormComponent>
      </Box>
    </Container>
  );
}

export default CadastroPsicologo;
