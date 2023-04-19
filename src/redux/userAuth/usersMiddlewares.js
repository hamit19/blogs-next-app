import http from "@/services/httpServices";
import {
  userAuthFailed,
  userAuthPending,
  userAuthSuccess,
  userSignOutFailed,
  userSingOutPending,
  userSingOutSuccess,
} from "./userActions";

export const userSignInMiddleware = (userData) => async (dispatch) => {
  dispatch(userAuthPending());

  try {
    const { data } = await http.post("/api/user/signin", { ...userData });

    dispatch(userAuthSuccess(data));
  } catch (err) {
    dispatch(userAuthFailed(err));
  }
};

export const signupMiddleware = (userData) => async (dispatch) => {
  dispatch(userAuthPending());

  try {
    const { data } = await http.post("/api/user/signup", { ...userData });

    dispatch(userAuthSuccess(data));
  } catch (err) {
    dispatch(userAuthFailed(err));
  }
};

export const userSinOutMiddleware = () => async (dispatch) => {
  dispatch(userSingOutPending());

  try {
    const { data } = await http.get("/api/user/logout");

    dispatch(userSingOutSuccess());
  } catch (err) {
    dispatch(userSignOutFailed(err));
  }
};

export const fetchUserDataMiddleware = () => async (dispatch) => {
  dispatch(userAuthPending());

  try {
    const { data } = await http.get("/api/user/load");

    dispatch(userAuthSuccess(data));
  } catch (err) {
    dispatch(userAuthFailed(err));
  }
};
