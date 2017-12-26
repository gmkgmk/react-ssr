import React from "react";
import { Route, Switch } from "react-router-dom";
import routes from "./routes";
import Header from "../component/Header";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        {routes.map((route, idx) => <Route {...route} key={idx} />)}
      </Switch>
    </div>
  );
};

export default App;
