import { useContext, useEffect, useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { useParams } from "react-router-dom";

import Card from "../../components/Card";
import { Header } from "../../components/Header";
import { SecMain } from "./styles";
import { API } from "../../services/api";

function ListarPsicologo() {

  const [pessoa,setPessoa] = useState({})
  const [usuario,setUsuario] = useState({})

  const params = useParams()

  const { id } = params 

  const usuarioProvider = ''
  const tokem = ''

  useEffect(()=>{
    
    API.get(`/psychologists?userId=${id}`,{
      headers: {
          'Authorization': `Bearer ${tokem}`
      }
    })
    .then((resp)=> setPessoa(resp.data[0]))
    .catch((err)=> console.log(err))
  },[])

  useEffect(()=>{
    
    API.get(`/patients?userId=${usuarioProvider.userId}`,{
      headers: {
          'Authorization': `Bearer ${tokem}`
      }
    })
    .then((resp)=> console.log(resp.data[0]))//setUsuario(resp.data[0]))
    .catch((err)=> console.log(err))
  },[])

  return <SecMain>
    <Header type={"dashBoard"} user={usuario}/>
    <div className="alinhamento">
      <section className="container">
        <Card 
          type={"psicologo"} 
          pessoa={pessoa}
          maxSizeY="70vh"
          />
      </section>
      <section className="agenda">
          <header>
            <h3>Agenda</h3>
          </header>
          <div className="calendario">
            <Calendar />
          </div>        
      </section>
    </div>
  </SecMain>;
}

export default ListarPsicologo;
