
import { ItemLista } from "../ItemLista"
import { List } from "../Lista"
import { StyledModal } from "./styles"




export const ModalHorario =({horarios,open,handleClose,callBack})=>{


    return(
      <StyledModal className="ModalHorario" open={open} onClose={handleClose}>
        <div>
        <List sizeY="auto" size="80vw" maxSizeWidth={"500px"} tituloList={"Horários"} >
          {horarios.length > 0 ? horarios?.map((horario,index)=>(
            <ItemLista key={index} typeCard="horario" horario={horario.horario} onclick={(event)=> callBack(event,horario)}/>
          )
          ) : (<h4> Não possui Horarios neste dia</h4>)
        }
          
        </List>
        </div>
   
      </StyledModal>
    )
}