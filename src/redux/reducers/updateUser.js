const initialState = {
  firstName: undefined,
  lastName: undefined,
};

const updateProfileReducer = (state = initialState, action) => {
  if (action.type === "UPDATE_PROFILE_DATA") {
    return {
      ...state,
      firstName: action.payload.firstName,
      lastName: action.payload.lastName,
    };
  }
  return state;
};
export default updateProfileReducer;
