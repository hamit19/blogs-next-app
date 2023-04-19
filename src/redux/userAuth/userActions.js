import {
  USER_AUTH_FAILED,
  USER_AUTH_PENDING,
  USER_AUTH_SUCCESS,
  USER_SIGN_OUT_FAILED,
  USER_SIGN_OUT_SUCCESS,
  USER_SING_OUT_PENDING,
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

// users sign out actions
export const userSingOutPending = () => {
  return {
    type: USER_SING_OUT_PENDING,
  };
};

export const userSingOutSuccess = () => {
  return {
    type: USER_SIGN_OUT_SUCCESS,
  };
};

export const userSignOutFailed = (err) => {
  return {
    type: USER_SIGN_OUT_FAILED,
    payload: err,
  };
};
