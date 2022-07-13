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
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-top: 6vh;
  gap: 1.8rem;

  @media (min-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 3rem;
  }

  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 3rem;
  }
  @media (min-width: 1100px) {

    gap: 8rem;
  }
`;

export const BoxLista = styled.section`

  display: flex;
  align-items: center;
  justify-content: center;


`;

export const BoxCont = styled.section`

  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 30px;

  max-width: 400px;

  &.listinha{
    
    border-radius: 13px 13px 0 0;
    box-shadow: 0 0 0.2rem 0;
 
    width: 90%;

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

    width: 60%;
  }
  @media (min-width: 1000px) {
    width: 50%;
  }
  @media (min-width: 1200px) {

    width: 40%;
  }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 3rem;
  }
  @media (min-width: 900px) {
    max-width: 236px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
  }
  
  @media (min-width: 1200px) {

  }

`

export const Agenda = styled.section`
  background-color: #fbf8f1;
  border-radius: 13px 13px 0 0;
  box-shadow: 0 0 0.2rem 0;
  /* margin: 6vh 0; */
  width: 90%;
  max-width: 340px;

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
/* 
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
    width: 60%;
  }
  @media (min-width: 1000px) {
    width: 50%;
  }
  @media (min-width: 1200px) {
    width: 40%;
  } */
`;
