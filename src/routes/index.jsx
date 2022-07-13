import { Route, Switch } from "react-router-dom";
import CadastroPaciente from "../pages/cadastro-paciente";
import CadastroPsicologo from "../pages/cadastro-psicologo";
import DashboardPaciente from "../pages/dashboard-paciente";
import DashboardPsicologo from "../pages/dashboard-psicologo";
import Home from "../pages/home";
import ListarPaciente from "../pages/listar-paciente";
import ListarPsicologo from "../pages/listar-psicologo";
import Login from "../pages/login";
import Registro from "../pages/registro";

function Routes() {
  return (
    <Switch>
      <Route path="/home" exact>
        <Home />
      </Route>
      <Route path="/registro" exact>
        <Registro />
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/cadastro-paciente" exact>
        <CadastroPaciente />
      </Route>
      <Route path="/cadastro-psicologo" exact>
        <CadastroPsicologo />
      </Route>
      <Route path="/dashboard-paciente" exact>
        <DashboardPaciente />
      </Route>
      <Route path="/dashboard-psicologo" exact>
        <DashboardPsicologo />
      </Route>
      <Route path="/paciente/:id" exact>
        <ListarPaciente />
      </Route>
      <Route path="/psicologo/:id" exact>
        <ListarPsicologo />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default Routes;
