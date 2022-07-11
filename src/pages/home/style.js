import styled from "styled-components";

export const StyledHome = styled.div`
  width: 100%;
  height: 100vh;
  text-align: center;
  max-height: 100vh;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }
  .Imagem {
    height: calc(100vh-50px);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  .title {
    margin: 80px 0 5px 0;
    h2 {
      font-size: clamp(22px, 17px + 5vw, 40px);
      color: #54bab9;
    }
  }
  img {
    width: 90%;
    height: calc(width * 0.6528);
    max-width: 700px;
  }
`;
export const Rodape = styled.div`
  height: 45px;
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
  align-items: center;
  span {
    display: inline-block;
    text-align: justify;
  }
`;
