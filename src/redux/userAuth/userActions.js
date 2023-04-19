import {
  USER_AUTH_FAILED,
  USER_AUTH_PENDING,
  USER_AUTH_SUCCESS,
} from "./userTypes";

export const userAuthPending = () => {
  return {
    type: USER_AUTH_PENDING,
  };
};

export const userAuthSuccess = (userData) => {
  return {
    type: USER_AUTH_SUCCESS,
    payload: userData,
  };
};

export const userAuthFailed = (err) => {
  return {
    type: USER_AUTH_FAILED,
    payload: err,
  };
};
