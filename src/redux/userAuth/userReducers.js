import {
  USER_AUTH_PENDING,
  USER_AUTH_FAILED,
  USER_AUTH_SUCCESS,
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
