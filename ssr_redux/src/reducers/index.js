const initialState = "";

function reducer(state = initialState, action) {
  switch (action.type) {
    case "GETALL":
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

export { GETALL };

export default reducer;
