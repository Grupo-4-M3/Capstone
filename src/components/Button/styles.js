import styled from "styled-components";

export const ButtonCM = styled.button`
  text-align: center;

  cursor: pointer;

  font-weight: 600;
  font-size: ${({nameSize})=> nameSize};

  border-radius: 13px;
  border-style: none;
  color: #ffffff;
  background-color: ${({ backcolor }) => backcolor};

  height: ${({ sizeY }) => sizeY};
  width: ${({ size }) => size};

  &:hover {
    background-color: #448382;
  }

  &:active {
    opacity: 0.8;
  }
`;
