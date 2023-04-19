import { combineReducers } from "redux";
import { userAuthReducer, userSignOutReducer } from "./userAuth/userReducers";

const rootReducer = combineReducers({
  authUser: userAuthReducer,
});

export default rootReducer;
