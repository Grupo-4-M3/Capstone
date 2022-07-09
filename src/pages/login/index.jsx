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
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "A senha precisa ter no mínimo 8 caracteres, " +
          "uma letra maiúscula e uma letra minúscula, " +
          "um número e um caracter especial"
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
