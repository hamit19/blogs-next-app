import { combineReducers } from "redux";
import { userAuthReducer, userSignOutReducer } from "./userAuth/userReducers";

const rootReducer = combineReducers({
  entity: {
    user: {
      authUser: userAuthReducer,
      singOutUser: userSignOutReducer,
    },
  },
});

export default rootReducer;
