import { Route, Switch } from "react-router-dom";
import Home from "../pages/home";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
    </Switch>
  );
}

export default Routes;
