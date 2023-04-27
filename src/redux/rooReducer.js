import { combineReducers } from "redux";
import { userAuthReducer } from "./userAuth/userReducers";

const rootReducer = combineReducers({
  authUser: userAuthReducer,
});

export default rootReducer;
