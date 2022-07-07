import { StyledForm } from "./style";

function FormComponent({ onSubmitFunction, children, title }) {
  return (
    <StyledForm>
      <h2>{title}</h2>

      <form action="" onSubmit={onSubmitFunction}>
        {children.map((child, index, array) => {
          return child.type === "label" ? (
            <div key={index}>
              {child}
              {array[index + 2]?.type === "label" ||
              array[index + 2]?.type?.target === "button" ||
              !array[index + 2] ? (
                array[index + 1]
              ) : (
                <div className="hour">
                  {[array[index + 1], array[index + 2]]}
                </div>
              )}
            </div>
          ) : child.type.target === "button" ? (
            child
          ) : (
            <div className="ignore" key={index}></div>
          );
        })}
      </form>
    </StyledForm>
  );
}

export default FormComponent;
