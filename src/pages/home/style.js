import styled from "styled-components";

export const StyledHome = styled.main`
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

  h2 {
    font-size: clamp(22px, 17px + 5vw, 40px);
    color: #54bab9;
  }
  p {
    margin-bottom: 3vh;
    color: #448382;
    span {
      color: #54bab9;
      cursor: pointer;
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 90%;
      max-width: 700px;
      height: calc(width * 0.6528);
    }
  }
`;

export const Rodape = styled.div`
  min-height: 45px;
  max-height: 80px;
  background: #54bab9;
  color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  font-size: clamp(8px, 6px + 2vw, 16px);
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 5px;
  align-items: center;
  span {
    display: inline-block;
    text-align: justify;
  }
`;

export const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  text-align: justify;

  & strong {
    font-size: 16px !important;
  }

  & p {
    font-size: 14px;
  }
`;
