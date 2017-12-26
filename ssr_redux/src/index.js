import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./Router";

import { Provider } from 'react-redux';
import createStore from './store';
const initialState = window.INITIAL_STATE;
const store = createStore(initialState);

const Main = () => {
  return (
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
};

hydrate(<Main />, document.getElementById("root"));
// import createApp from "./createApp.js";
// import createHistory from "history/createBrowserHistory";

// const app = createApp();
// app.start("#root");
