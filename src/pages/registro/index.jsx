import { Button } from "../../components/Button";
import FormComponent from "../../components/Form";
import { API } from "../../services/api";
import { Box, Container, Errors } from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { Header } from "../../components/Header";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function Registro() {
  const [type, setType] = useState("paciente");

  const schema = yup.object().shape({
    name: yup
      .string()
      .min(4, "Mínimo de 4 letras")
      .required("Nome obrigatório"),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Informe uma senha")
      .min(8, "Senha deve conter ao menos 8 caracteres")
      .matches(/.*\d/, "Senha Deve conter ao menos um dígito")
      .matches(/.*[a-z]/, "Senha Deve conter ao menos uma letra minúscula")
      .matches(/.*[A-Z]/, "Senha Deve conter ao menos uma letra maiúscula")
      .matches(
        /.*[$*&@#!]/,
        "Senha Deve conter ao menos um caractere especial"
      ),
    confirmPassword: yup
      .string()
      .required("Confirme a senha")
      .oneOf([yup.ref("password"), null], "As senhas precisam ser iguais"),
    type: yup.string().required("Selecione uma opção"),
    registration:
      type === "psicologo" &&
      yup
        .number()
        .typeError("Apenas números")
        .required("Por favor, digite seu nº de registro!")
        .min(4, "Mínimo 4 dígitos"),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const history = useHistory();

  const cadastrar = ({ name, email, password, type, registration = "" }) => {
    console.log("chamou a função");

    const user = {
      name,
      email,
      password,
      type,
      registration,
      firstLogin: true,
    };

    API.post("/register", user)
      .then((_) => {
        setTimeout(4000);
        toast.success("Cadastrado com sucesso!");
        return history.push("/login");
      })
      .catch((_) =>
        toast.error(
          "Erro ao cadastrar, verifique novamente os campos ou mude o email!"
        )
      );
  };
  const watchType = watch("type");
  useEffect(() => {
    if (watchType !== type) setType(watchType);
  }, [watchType, type]);

  return (
    <Container>
      <Header type="registro" heigth="50px" />
      <Box>
        <FormComponent
          title="Registro"
          onSubmitFunction={handleSubmit(cadastrar)}
          inputSize="7vh"
        >
          <label>
            Nome:{" "}
            {errors.name?.message && <Errors> - {errors.name?.message}</Errors>}
          </label>
          <input placeholder="Digite seu nome aqui..." {...register("name")} />

          <label>
            Email:{" "}
            {errors.email?.message && (
              <Errors> - {errors.email?.message}</Errors>
            )}
          </label>
          <input
            placeholder="Digite seu email aqui..."
            {...register("email")}
          />
          <label>
            Senha:{" "}
            {errors.password?.message && (
              <Errors> - {errors.password?.message}</Errors>
            )}
          </label>
          <input
            type="password"
            placeholder="Digite sua senha aqui..."
            {...register("password")}
          />
          <label>
            Confirmar Senha:{" "}
            {errors.confirmPassword?.message && (
              <Errors> - {errors.confirmPassword?.message}</Errors>
            )}
          </label>
          <input
            type="password"
            placeholder="Confirme sua senha..."
            {...register("confirmPassword")}
          />
          <label>Acessar como:</label>
          <select {...register("type")}>
            <option value="paciente">Paciente</option>
            <option value="psicologo">Psicólogo</option>
          </select>
          {watchType === "psicologo" && (
            <label>
              Registro Profissional:{" "}
              {errors.registration?.message && (
                <Errors> - {errors.registration?.message}</Errors>
              )}
            </label>
          )}
          {watchType === "psicologo" && (
            <input
              placeholder="Digite aqui seu número de registro profissional..."
              {...register("registration")}
            />
          )}
          <Button
            type="submit"
            size="100%"
            sizeY="50px"
            nameButton="Registrar-se"
          ></Button>
        </FormComponent>
      </Box>
    </Container>
  );
}

export default Registro;
