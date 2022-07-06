import "./App.css";
import FormComponent from "./components/Form";

function App() {
  const testFunction = (e) => {
    e.preventDefault();
    console.log("foi");
  };

  return (
    <div className="App">
      <FormComponent onSubmitFunction={testFunction} title="Login">
        <label htmlFor="email">E-mail:</label>
        <input id="email" type="email" />

        <label htmlFor="senha">Senha:</label>
        <input id="senha" type="email" />

        <button>Enviar</button>
      </FormComponent>
    </div>
  );
}

export default App;
