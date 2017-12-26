import * as usersService from "../services/user";

const User = {
  namespace: "users",
  state: {
    data: null
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === "/") {
          dispatch({
            type: "fetch"
          });
        }
      });
    }
  },
  effects: {
    *fetch({ payload }, { call, put, take }) {
      const { data } = yield call(usersService.query);

      if (data) {
        yield put({
          type: "save",
          payload: {
            data
          }
        });
      }
    }
  },
  reducers: {
    save(state, { payload: {} }) {
      return {
        ...state
      };
    }
  }
};

module.exports = User;
