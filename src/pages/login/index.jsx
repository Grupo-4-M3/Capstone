import { Button } from "../../components/Button";
import FormComponent from "../../components/Form";
import { Box, Container, Errors } from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Header } from "../../components/Header";
import { useContext } from "react";
import { UserContext } from "../../providers/user";
import { useHistory } from "react-router-dom";

function Login() {
  const { logar } = useContext(UserContext);
  const history = useHistory();

  const schema = yup.object().shape({
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
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const login = ({ email, password }) => {
    const data = { email, password };
    logar(data, history.push);
  };

  return (
    <Container>
      <Header type="login" heigth="50px" />
      <Box>
        <FormComponent
          title="Login"
          onSubmitFunction={handleSubmit(login)}
          inputSize="7vh"
        >
          <div>
            <label>
              Email:{" "}
              {errors.email?.message && (
                <Errors> - {errors.email?.message}</Errors>
              )}
            </label>
            <input
              placeholder="Digite seu email aqui..."
              name="email"
              {...register("email")}
            />
          </div>
          <div>
            <label>
              Senha:{" "}
              {errors.password?.message && (
                <Errors> - {errors.password?.message}</Errors>
              )}
            </label>
            <input
              type="password"
              placeholder="Digite sua senha aqui..."
              name="password"
              {...register("password")}
            />
          </div>
          <Button
            type="submit"
            size="100%"
            sizeY="50px"
            nameButton="Logar"
          ></Button>
        </FormComponent>
      </Box>
    </Container>
  );
}

export default Login;
