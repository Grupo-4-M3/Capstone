import { Modal } from "@mui/material";
import styled from "styled-components";

export const StyledModalConfirm = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  .buttonDiv {
    border-radius: 13px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    max-width: 300px;
    background-color: #f7ecde;
  }
`;
