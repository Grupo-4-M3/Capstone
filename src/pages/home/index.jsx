import { ButtonCM } from "../../components/Button/styles";
import FormComponent from "../../components/Form";

function Home() {
  return (
    <main>
      <FormComponent title="Registro">
        <label htmlFor="">Nome:</label>
        <input type="select" />

        <label htmlFor="">Nome:</label>
        <select name="" id="">
          <option value="">valor 1</option>
          <option value="">valor 1</option>
          <option value="">valor 1</option>
        </select>

        <label htmlFor="">horario:</label>
        <input type="time" placeholder="Hora de inicio" />
        <input type="time" placeholder="Hora de inicio" />

        <ButtonCM size="100%" sizeY="40px" backcolor="#54BAB9">
          Enviar
        </ButtonCM>
      </FormComponent>
    </main>
  );
}

export default Home;
