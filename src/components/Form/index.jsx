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
