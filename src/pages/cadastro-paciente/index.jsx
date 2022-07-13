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

function CadastroPaciente() {
  const { usuario } = useContext(UserContext);

  useEffect(()=>{
    usuario?.accessToken && usuario?.type === "psicologo" && !usuario?.firstLogin
    ?
    history.push("/dashboard-psicologo")
    :
    usuario?.accessToken && usuario?.type === "paciente" && !usuario?.firstLogin
    ?
    history.push("/dashboard-paciente")
    :
    <></>
  })
 
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
    age: yup
      .number()
      .typeError("Apenas números")
      .required()
      .positive("Apenas números positivos")
      .integer("Apenas números inteiros"),
    img: yup.string().required("Insira a url da sua foto de perfil"),
    status: yup.string().required(),
    schooling: yup.string().required(),
    profession: yup
      .string()
      .min(5, "Mínimo 5 caracteres")
      .required("Campo obrigatório!"),
    complaint: yup
      .string()
      .required("Campo obrigatório!")
      .min(10, "Mínimo 10 caracteres"),
    medication: yup.string(),
    disease: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const history = useHistory();

  const submeter = ({
    name,
    age,
    img,
    status,
    schooling,
    profession,
    complaint,
    medication = "",
    disease = "",
  }) => {
    const userId = usuario.id;
    const paciente = {
      userId,
      name,
      age,
      img,
      status,
      schooling,
      profession,
      complaint,
      medication,
      disease,
      medical_records: [
        {
          date: "",
          description: "",
          psychologist: "",
        },
      ],
      calendar: {},
      email: usuario.email,
    };

    API.post("/patients", paciente)
      .then((_) => {
        API.patch(`/users/${userId}`, { firstLogin: false })
          .then((response) => response)
          .catch((err) => console.error(err));
      })
      .then((_) => {
        toast.success("Dados cadastrados com sucesso!");
        return history.push("/dashboard-paciente");
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
          <label>
            Nome Completo: *{" "}
            {errors.name?.message && <Errors> - {errors.name?.message}</Errors>}
          </label>
          <input
            type="text"
            placeholder="Digite seu nome completo aqui..."
            {...register("name")}
          />
          <label>
            Idade: *{" "}
            {errors.age?.message && <Errors> - {errors.age?.message}</Errors>}
          </label>
          <input
            type="text"
            placeholder="Digite sua idade aqui..."
            {...register("age")}
          />
          <label>
            Imagem de perfil: *{" "}
            {errors.img?.message && <Errors> - {errors.img?.message}</Errors>}
          </label>
          <input
            type="text"
            placeholder="Insira a url da imagem aqui..."
            {...register("img")}
          />
          <label>
            Estado Civil:{" "}
            {errors.status?.message && (
              <Errors> - {errors.status?.message}</Errors>
            )}
          </label>
          <select {...register("status")}>
            <option value="solteiro(a)">Solteiro(a)</option>
            <option value="casado(a)">Casado(a)</option>
            <option value="divorciado(a)">Divorciado(a)</option>
            <option value="viuvo(a)">Viúvo(a)</option>
          </select>
          <label>
            Escolaridade:{" "}
            {errors.schooling?.message && (
              <Errors> - {errors.schooling?.message}</Errors>
            )}
          </label>
          <select {...register("schooling")}>
            <option value="ensino-fundamental-inconpleto">
              Ensino Fundamental Incompleto
            </option>
            <option value="ensino-fundamental-completo">
              Ensino Fundamental Completo
            </option>
            <option value="ensino-medio-incompleto">
              Ensino Médio Incompleto
            </option>
            <option value="ensino-medio-completo">Ensino Médio Completo</option>
            <option value="curso-tecnico">Curso Técnico</option>
            <option value="ensino-superior-incompleto">
              Ensino Superior Incompleto
            </option>
            <option value="ensino-superior-completo">
              Ensino Superior Completo
            </option>
            <option value="pos-graduacao">Pós Graduação</option>
            <option value="mba">MBA</option>
            <option value="mestrado">Mestrado</option>
            <option value="doutorado">Doutorado</option>
          </select>
          <label>
            Profissão: *{" "}
            {errors.profession?.message && (
              <Errors> - {errors.profession?.message}</Errors>
            )}
          </label>
          <input
            type="text"
            placeholder="Digite sua profissão aqui..."
            {...register("profession")}
          />
          <label>
            Queixas Principais: *{" "}
            {errors.complaint?.message && (
              <Errors> - {errors.complaint?.message}</Errors>
            )}
          </label>
          <input
            type="text"
            placeholder="Digite o que você sente aqui..."
            {...register("complaint")}
          />
          <label>
            Faz uso de Medicação? Se sim, registre aqui:{" "}
            {errors.medication?.message && (
              <Errors> - {errors.medication?.message}</Errors>
            )}
          </label>
          <input
            type="text"
            placeholder="Digite o nome da medicação aqui..."
            {...register("medication")}
          />
          <label>
            Possui alguma doença? Se sim, registre aqui:{" "}
            {errors.disease?.message && (
              <Errors> - {errors.disease?.message}</Errors>
            )}
          </label>
          <input
            type="text"
            placeholder="Digite o nome da doença aqui..."
            {...register("disease")}
          />
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

export default CadastroPaciente;
