// import React from "react";
// import dva from "dva";
// import { RouterContext } from "dva/router";
// import router from "./router";
// import user from "./models/user";

// const createApp = opts => {
//   const app = dva(opts);

//   app.model(user);

//   app.router(router);

//   return app;
// };

import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { routerReducer, routerMiddleware } from "react-router-redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";
import routes from "./router/index";

function createAppStore(history, preloadedState = {}) {
  // enhancers
  let composeEnhancers = compose;

  if (typeof window !== "undefined") {
    // eslint-disable-next-line no-underscore-dangle
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  }

  // middlewares
  const routeMiddleware = routerMiddleware(history);
  const middlewares = [routeMiddleware, reduxThunk];

  const store = createStore(
    combineReducers({
      ...reducers,
      router: routerReducer
    }),
    preloadedState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  return {
    store,
    history,
    routes
  };
}
