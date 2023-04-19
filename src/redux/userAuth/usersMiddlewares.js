import http from "@/services/httpServices";
import {
  userAuthFailed,
  userAuthPending,
  userAuthSuccess,
} from "./userActions";
import { toast } from "react-hot-toast";

export const userSignInMiddleware = (userData) => async (dispatch) => {
  dispatch(userAuthPending());

  try {
    const { data } = await http.post("/api/user/signin", { ...userData });

    dispatch(userAuthSuccess(data));
    toast.success("You've signed in successfully!");
  } catch (err) {
    dispatch(userAuthFailed(err));
    toast.error(err.response.data.message);
  }
};

export const userSignupMiddleware = (userData) => async (dispatch) => {
  dispatch(userAuthPending());

  try {
    const { data } = await http.post("/api/user/signup", { ...userData });

    dispatch(userAuthSuccess(data));
    toast.success("You've signed up successfully!");
  } catch (err) {
    dispatch(userAuthFailed(err));
    console.log(err.response.data.message);
    toast.error(err.response.data.message);
  }
};

export const userSinOutMiddleware = () => async (dispatch) => {
  dispatch(userAuthPending());

  try {
    const { data } = await http.get("/api/user/logout");

    dispatch(userAuthSuccess(data));

    toast.success("You've signed out successfully!");
  } catch (err) {
    dispatch(userAuthFailed(err));
    toast.error("Something went wrong try again!");
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
