import { HYDRATE, createWrapper } from "next-redux-wrapper";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./rooReducer";

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");

    return composeWithDevTools(applyMiddleware(...middleware));
  }

  return applyMiddleware(...middleware);
};

const masterReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      //todo => we're gonna sync our sever side states with client side states!
    };

    return nextState;
  }

  return rootReducer(state, action);
};

const initStore = () => {
  return createStore(masterReducer, bindMiddleware([thunkMiddleware]));
};

export const wrapper = createWrapper(initStore);
