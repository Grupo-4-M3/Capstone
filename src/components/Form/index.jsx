import { StyledForm } from "./style";

function FormComponent({ type, onSubmitFunction, children, title }) {
  return (
    <StyledForm>
      <h2>{title}</h2>

      <form action="" onSubmit={onSubmitFunction}>
        {children}
      </form>
    </StyledForm>
  );
}

export default FormComponent;
