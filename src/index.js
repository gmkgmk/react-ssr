import React from "react";
import { hydrate } from "react-dom";
// import { BrowserRouter as Router } from "react-router-dom";
import App from "./Router";
const { routerRedux, Route, Switch } = require("dva/router");
const { ConnectedRouter } = routerRedux;
import { Provider } from "react-redux";
import createStore from "./store";
const initialState = window.INITIAL_STATE;
const store = createStore(initialState);
import { browserHistory } from "dva/router";
const dva = require("dva").default;
import createHistory from "history/createBrowserHistory";
import userModel from "./model";
const Main = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  );
};

// hydrate(<Main />, document.getElementById("root"));

const app = dva({
  history: createHistory(),
  initialState: { users: { userList: window.INITIAL_STATE } },
  onError(error) {
    console.log(error.message);
  }
});
app.model(userModel);
app.router(Main);
app.start("#root");
