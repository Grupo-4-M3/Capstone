import styled from "styled-components";

export const StyledDashboardPaciente = styled.div`
  display: flex;
  background-color: #fbf8f1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;

  .container {
    height: 80vh;

    width: 90%;
    .psicologos {
      li {
        cursor: pointer;
      }
    }
    .psicologos .horarios {
      width: 100%;
    }
  }

  @media (max-width: 670px) {
    .container {
      margin: auto;
      display: flex;
      flex-direction: column;
      gap: 15px;
      section {
        margin: auto;
        width: 60%;
      }
    }
  }

  @media (min-width: 671px) {
    .container {
      margin: auto;
      max-width: 90%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      gap: 15px;
      .psicologos {
        width: 60%;
      }
      .horarios {
        width: 35%;
      }
    }
  }
`;
