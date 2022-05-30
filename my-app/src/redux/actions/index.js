export const loggedIn = () => {
    return {type: "LOGGED_IN"}
}
export const loggedOut = () => {
  return { type: "LOGGED_OUT" };
};
export const getUserData = (firstName, lastName) => {
  return { type: "GET_USER_DATA", payload: {firstName, lastName} };
};


