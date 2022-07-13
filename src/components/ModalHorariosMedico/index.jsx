import axios from "axios";
import { useState,useEffect } from "react";
import { toast } from "react-toastify";
import { Agenda } from "../../pages/dashboard-psicologo/styles";
import API from "../../services/api";
import { Button } from "../Button";
import { ItemLista } from "../ItemLista";
import { List } from "../Lista";
import { StyledModal } from "../ModalHorario/styles";


export const ModalHorariosMedico = ({open,handleClose,dia,psicologo})=>{
    




    const [disponibilizar,setDisponibilizar] = useState({})




    const callBack = (hora) =>{
        if(hora.hora in disponibilizar){
            delete disponibilizar[hora.hora]
            setDisponibilizar({...disponibilizar})
        }
        else{
            disponibilizar[hora.hora] = hora
            setDisponibilizar({...disponibilizar})
        }
    }
    console.log(disponibilizar)
    const [horarios,setHorarios] = useState([]);

    useEffect(() => {
        const novoDia = Object.keys(dia)[0]
   
        const arrayApoio = []

        for(let hora in dia[novoDia]){
            arrayApoio.push(dia[novoDia][hora])
        }
    

        setHorarios(arrayApoio)

    }, [,dia]);


    const enviar = () =>{
        const novoDia = Object.keys(dia)[0]
        if(novoDia in psicologo.calendar){

                psicologo.calendar[novoDia] = {...psicologo.calendar[novoDia],...disponibilizar}
                
            API.patch(`/psychologists/${psicologo.id}`,{calendar: psicologo.calendar}).then((res)=>{

                toast.success("Horários disponibilizados com sucesso!")
                handleClose()
            }).catch(err=>console.log(err)
                )
        }
        else{
            psicologo.calendar[novoDia] = {...disponibilizar}
            API.patch(`/psychologists/${psicologo.id}`,{calendar: psicologo.calendar}).then((res)=>{

                toast.success("Horários disponibilizados com sucesso!")
                handleClose()
            }).catch(err=>console.log(err)
                )
        }





        
    }

    


    return(

        <StyledModal open={open} onClose={handleClose}>
            <div>
            <List maxSizeY="400px" sizeY="auto"  size="80vw" maxSizeWidth={"500px"} tituloList="Horarios">
                {horarios?.map((hora,index)=>(
                    <ItemLista key={index} typeCard="horario" horario={hora?.horario} onclick={callBack} hora={hora} />
                ))}
            </List>
                    
                <Button onclick={enviar} nameButton="Confirmar" sizeY="2.8rem" size="100%" nameSize="1.5rem"/>
            </div>
        </StyledModal>
    )
}