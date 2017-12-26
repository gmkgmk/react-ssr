const initialState = {};
function reducer(state = initialState, action) {
  const { result } = action;
  switch (action.type) {
    case "USER_FETCH_SUCCEEDED":
      return {
        type: "success",
        state
      };
    case "USER_FETCH_FAILED":
      return {
        type: "fail",
        state
      };
    default:
      return state;
  }
}

export default reducer;
