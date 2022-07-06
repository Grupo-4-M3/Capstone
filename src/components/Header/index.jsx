import { useHistory } from "react-router-dom";
import { StyledHeader } from "./styles";

export function Header({children}){

    const historico = useHistory()

    const levarAoDashboard = ()=>{
        historico.push("./dashboard")
    }

    return(
        <StyledHeader> 
            <h1 onClick={levarAoDashboard}>Call<span>Mind</span></h1>
              <div>{children}</div>
              </StyledHeader>
    )
}