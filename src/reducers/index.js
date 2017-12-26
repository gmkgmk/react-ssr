const initialState = "";

function reducer(state = initialState, action) {
  switch (action.type) {
    case "GETALL":
      return action;
    case "GETUSER":
      return action;
    default:
      return state;
  }
}
function GETALL() {
  return {
    type: "GETALL"
  };
}
function GETUSER() {
  return {
    type: "GETUSER"
  };
}

export { GETALL, GETUSER };

export default reducer;
