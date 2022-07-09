import styled, { css } from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: ${(props) => props.heigth || "70px"};
  background: #e9dac1;
  border: 1px solid rgba(0, 0, 0, 0.49);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 8px 8px;
  box-sizing: border-box;
  padding: 0 0.5rem;

  & h1 {
    font-family: "Montserrat", inter;
    width: 3rem;
    color: #54bab9;
    cursor: pointer;
  }
  & h1 span {
    color: #448382;
    cursor: pointer;
  }
  & div {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 0.1rem;
  }
  & figure {
    background-color: red;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
  }
  ${(props) =>
    props.dash &&
    css`
      & div {
        flex-direction: row;
        gap: 0.5rem;
      }
      & div div {
        flex-direction: column;
        gap: 0.08rem;
      }
    `}

  @media (min-width: 350px) {
    & div {
      flex-direction: row;
      gap: 1rem;
    }
  }
  @media (min-width: 600px) {
    padding: 0 2rem;

    ${(props) =>
      props.dash &&
      css`
        & div {
          gap: 0.3rem;
        }
        & div div {
          flex-direction: row;
          gap: 2rem;
        }
      `}
  }
`;
