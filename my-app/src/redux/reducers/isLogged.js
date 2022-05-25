const initialState = false;

const loggedReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGGED_IN": return true;
    case "LOGGED_OUT": return false;
    default: return state;
  };
}
export default loggedReducer;

