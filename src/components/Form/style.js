import styled from "styled-components";

export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% - 20px);
  max-width: 420px;
  background-color: #e9dac1;
  box-shadow: 0px 0px 8px 0px #00000033;
  border-radius: 20px;
  min-height: 350px;
  padding: 15px;
  box-sizing: border-box;

  h2 {
    color: #448382;
    font-size: 4vh;
    margin-bottom: 25px;
  }

  form {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 3vh;

    div {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .ignore {
      display: none;
    }

    label {
      text-align: left;
      color: #828282;
      padding-left: 5px;
    }

    input,
    select {
      height: ${({ inputSize }) => inputSize || "6vh"};
      max-height: 50px;
      border-radius: 13px;
      border: none;
      background-color: #e0e0e0;
      padding: 1vh;
      box-sizing: border-box;
      border: 1px solid #afafaf;

      &::placeholder {
        color: #afafaf;
      }

      &:focus {
        outline: 1px solid #222222;
        color: #474747;
      }
    }

    select:focus {
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
    }

    .hour {
      display: flex;
      flex-direction: row;
      input {
        width: 50%;
      }
    }

    button {
      margin-bottom: 20px;
    }
  }
`;
