import {
  USER_AUTH_PENDING,
  USER_AUTH_FAILED,
  USER_AUTH_SUCCESS,
  USER_SIGN_OUT_PENDING,
  USER_SIGN_OUT_SUCCESS,
  USER_SIGN_OUT_FAILED,
} from "./userTypes";

export const userAuthReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_AUTH_PENDING:
      return { loading: true };

    case USER_AUTH_SUCCESS:
      return { loading: false, user: action.payload };

    case USER_AUTH_FAILED:
      return { loading: false, err: action.payload };

    default:
      return state;
  }
};

export const userSignOutReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGN_OUT_PENDING:
      return { loading: true };

    case USER_SIGN_OUT_SUCCESS:
      return { loading: false, user: null };

    case USER_SIGN_OUT_FAILED:
      return { loading: false, err: action.payload };

    default:
      return state;
  }
};
