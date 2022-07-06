import { ButtonCM } from "./styles";

export function Button({onclick, type, nameButton, backcolor="#54BAB9",size = "5rem", sizeY="1.8rem"}){

    return(
        <ButtonCM onClick={onclick} type={type} backcolor={backcolor} size={size} sizeY={sizeY}>
            {nameButton}
        </ButtonCM>
    )
}