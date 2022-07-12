import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fbf8f1;
  width: 100%;
  min-height: 100vh;
`;

export const Box = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 100%;
  margin-top: 6vh;

  @media (min-width: 800px) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  }
`;

export const BoxLista = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;

  @media (min-width: 800px) {
    align-items: baseline;
    width: 85%;
  }
`;

export const Agenda = styled.section`
  background-color: #fbf8f1;
  border-radius: 13px 13px 0 0;
  box-shadow: 0 0 0.2rem 0;
  margin: 6vh 0;
  width: 90%;

  header {
    background-color: #54bab9;
    color: white;
    border-radius: 13px 13px 0 0;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;

    h3 {
    }
  }
  div {
    width: 100%;
  }

  @media (min-width: 400px) {
    width: 80%;
  }
  @media (min-width: 500px) {
    width: 70%;
  }
  @media (min-width: 600px) {
    width: 60%;
  }
  @media (min-width: 700px) {
    width: 50%;
  }
  @media (min-width: 800px) {
    margin: 0 10vh 0 0;
    width: 60%;
  }
  @media (min-width: 1000px) {
    width: 50%;
  }
  @media (min-width: 1200px) {
    margin: 0 15vh 0 0;
    width: 40%;
  }
`;
