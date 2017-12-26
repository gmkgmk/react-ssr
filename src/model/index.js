export default {
  namespace: "users",
  state: {},
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload };
    }
  },
  effects: {
    *login(action, { call, put }) {
      const login = true;

      yield put({ type: "updateState", payload: { login } });
    }
  },
  subscriptions: {
    setup({ dispatch }) {
      dispatch({ type: "login" });
    }
  }
};
