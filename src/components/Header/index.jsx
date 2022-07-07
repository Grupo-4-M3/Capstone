
import { useHistory } from "react-router-dom";
import { StyledHeader } from "./styles";
import {Button} from "./../Button"

export function Header({children,user,type}){
    const historico = useHistory()

    const levarAoDashboard = ()=>{
        historico.push("./dashboard")
    }

    const levarAoHome = ()=>{
        historico.push("./home")
    }
    const levarAoLogin = ()=>{
        historico.push()
    }
    const levarAoRegistro = ()=>{
        historico.push()
    }
    
    switch (type) {
        case "home":
            return (
                <StyledHeader>
                     <h1>Call<span>Mind</span></h1>
                     <div>
                        <Button onclick={levarAoLogin} nameButton={"Login"}></Button> 

                        <Button onclick={levarAoRegistro} nameButton={"Registro"}>Registro</Button>
                     </div>
                </StyledHeader>
            )
        case "login":
            return(
                <StyledHeader>
                    <h1 onClick={levarAoHome}>Call<span>Mind</span></h1>
                    <div><Button onclick={levarAoRegistro} nameButton={"Registro"}></Button></div>
                </StyledHeader>
            )
        case "registro":
                return(
                    <StyledHeader>
                        <h1 onClick={levarAoHome}>Call<span>Mind</span></h1>
                        <div><Button onclick={levarAoLogin} nameButton={"Login"}></Button></div>
                    </StyledHeader>
                )
        case "cadastro":
            return(
                <StyledHeader>
                    <h1>Call<span>Mind</span></h1>
                    <div><Button onclick={levarAoHome} nameButton={"Logout"}></Button></div>
                </StyledHeader>
            )
        case "dashBoard":
            
             return(
                <StyledHeader dash>
                    <h1 onClick={levarAoDashboard}>Call<span>Mind</span></h1>
                    <div>
                        <figure>
                            <img src={!!user ? user.img : ""} alt="" />
                        </figure>
                        <div>
                            <h2>{!!user? user.name: "Teste"}</h2>
                            <Button nameButton={"Logout"}></Button>
                        </div>
                    </div>   
                </StyledHeader>
             )
        default:
            <StyledHeader> 
                <h1 onClick={levarAoDashboard}>Call<span>Mind</span></h1>
                <div>{children}</div>
            </StyledHeader>
        break;
    }
}