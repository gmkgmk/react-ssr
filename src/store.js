import { createStore, applyMiddleware } from "redux";

import mySaga from "./sagas";
import rootReducer from "./reducers/userReduces";
import createSagaMiddleware from "redux-saga";

function createStoreWithState(initialState) { 
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware)
  );
  sagaMiddleware.run(mySaga);
  return store;
}

export default createStoreWithState;
