import { call, put, takeEvery, takeLatest,select } from "redux-saga/effects";
import Api from "./services/user";

function* fetchUser(action) {
  try {
    // const user = yield call(Api.query);
    // let result = yield user.json().then(data => data);
    yield select(function(a,b){
      console.log(a,b)
    });
  } catch (e) {
    console.log(e);
    yield put({ type: "USER_FETCH_FAILED" });
  }
}

function* mySaga() {
  yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
}

function* mySaga() {
  yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
}

export default mySaga;
