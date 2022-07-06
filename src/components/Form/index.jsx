import { StyledForm } from "./style";

function FormComponent({ onSubmitFunction, children, title }) {
  return (
    <StyledForm>
      <h2>{title}</h2>

      <form action="" onSubmit={onSubmitFunction}>
        {children.map((child, index, array) => {
          return index % 2 === 0 ? (
            <div key={index}>
              {child}
              {array[index + 1]}
            </div>
          ) : (
            <div className="ignore" key={index}></div>
          );
        })}
      </form>
    </StyledForm>
  );
}

export default FormComponent;

/* 
<FormComponent onSubmitFunction={testFunction} title="Login">
        <label htmlFor="email">E-mail:</label>
        <input id="email" type="email" placeholder="Digite seu email aqui..." />

        <label htmlFor="senha">Senha:</label>
        <input id="senha" type="email" placeholder="Digite sua senha aqui..." />

        <label htmlFor="senha">Senha:</label>
        <input id="senha" type="email" placeholder="Digite sua senha aqui..." />

        <label htmlFor="senha">Senha:</label>
        <input id="senha" type="email" placeholder="Digite sua senha aqui..." />

        <button>Enviar</button>
      </FormComponent>
*/
