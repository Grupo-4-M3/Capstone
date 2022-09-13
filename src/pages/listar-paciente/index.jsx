import { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import Card from "../../components/Card";
import { Header } from "../../components/Header";
import { SecMain } from "./styles";
import API from "../../services/api";
import { UserContext } from "../../providers/user";
import { Button } from "../../components/Button";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function ListarPaciente() {
  const schema = yup.object().shape({
    description: yup.string().required(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

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
  }, []);

  const { usuario } = useContext(UserContext);

  const [pessoa, setPessoa] = useState({});
  const [psicologo, setPsicologo] = useState({});
  const params = useParams();

  const { id } = params;

  useEffect(() => {
    API.get(`/patients?userId=${id}`)
      .then((resp) => setPessoa(resp.data[0]))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    API.get(`/psychologists?userId=${usuario?.id}`)
      .then((resp) => setPsicologo(resp.data[0]))
      .catch((err) => console.log(err));
  }, []);

  const data = new Date();
  const dia = String(data.getDate()).padStart(2, "0");
  const mes = String(data.getMonth() + 1).padStart(2, "0");
  const ano = data.getFullYear();
  const dataAtual = dia + "/" + mes + "/" + ano;

  const formSchema = (data) => {
    data.date = dataAtual;
    data.psychologist = psicologo.name;

    const novoArray = [...pessoa.medical_records, data];

    atualizaProntuario({ medical_records: novoArray });
  };

  function atualizaProntuario(data) {
    API.patch(`/patients/${pessoa.id}`, data)
      .then((resp) => {
        setPessoa(resp.data);
      })
      .catch((err) => err);
  }

  return (
    <SecMain>
      <Header type={"dashBoard"} user={psicologo} />
      <section className="alinhamento">
        <article className="container">
          <Card
            type={"paciente"}
            pessoa={pessoa}
            maxSizeY="78vh"
            maxSizeX={"570px"}
          />
        </article>
        <article className="agenda">
          <header>
            <h3>Prontuario</h3>
          </header>
          <form onSubmit={handleSubmit(formSchema)} className="formText">
            <textarea
              name="prontuario"
              cols="30"
              rows="10"
              placeholder="Descrição do atendimento..."
              {...register("description")}
            ></textarea>
            <Button
              type={"submit"}
              nameButton={"Atualizar"}
              size="60%"
              sizeY="2.2rem"
            />
          </form>
        </article>
      </section>
    </SecMain>
  );
}

export default ListarPaciente;
