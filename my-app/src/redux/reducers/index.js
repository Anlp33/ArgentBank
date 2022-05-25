import { combineReducers } from "redux";
import loggedReducer from "./isLogged";
import getUserReducer from "./getUser";

const allReducers = combineReducers({
    loggedReducer,
    getUserReducer
});
export default allReducers;
