import { createContext, useContext, useEffect, useReducer } from "react";
import { toast } from "react-hot-toast";
import { useReducerAsync } from "use-reducer-async";
import Router from "next/router";
import http from "@/services/httpServices";

const AuthContext = createContext();

const AuthContextDispatcher = createContext();

const initialState = {
  user: null,
  loading: true,
  error: null,
};

const reducer = (state, actions) => {
  switch (actions.type) {
    case "SIGN_IN_PENDING":
      return { ...state, loading: true };

    case "SIGN_IN_SUCCESS":
      return { ...state, user: actions.payload, loading: false };

    case "SIGN_IN_REJECTED":
      return { ...state, error: actions.error, loading: false };

    case "LOGOUT_PENDING":
      return { ...state, loading: true };

    case "LOGOUT_SUCCESS":
      return { ...state, user: actions.payload, loading: false };

    case "LOGOUT_REJECTED":
      return { ...state, error: actions.error, loading: false };
    default:
      return { ...state };
  }
};

const asyncActionHandlers = {
  SIGNIN:
    ({ dispatch }) =>
    async (action) => {
      dispatch({ type: "SIGN_IN_PENDING" });

      try {
        const { data } = await http.post(`/api/user/signin`, action.payload);

        dispatch({ type: "SIGN_IN_SUCCESS", payload: data });

        toast.success("You've logged in successfully");

        Router.push("/");
      } catch (err) {
        dispatch({ type: "SIGN_IN_REJECTED", error: err });

        err.response.data?.message &&
          toast.error("The email or password is incorrect!");
      }
    },

  SIGNUP:
    ({ dispatch }) =>
    async (action) => {
      dispatch({ type: "SIGN_IN_PENDING" });
      try {
        const { data } = await http.post("/api/user/signup", action.payload);
        dispatch({ type: "SIGN_IN_SUCCESS", payload: data });

        toast.success("You've signed up successfully!");

        Router.push("/");
      } catch (err) {
        dispatch({ type: "SIGN_IN_REJECTED", error: err });
        console.log(err);

        err.response.data?.message &&
          toast.error("something went wrong please try again!");
      }
    },

  FETCH_USER_DATA:
    ({ dispatch }) =>
    async (action) => {
      dispatch({ type: "SIGN_IN_PENDING" });

      try {
        const { data } = await http.get("/api/user/load");

        dispatch({ type: "SIGN_IN_SUCCESS", payload: data });
      } catch (err) {
        dispatch({ type: "SIGN_IN_REJECTED", error: err });
      }
    },

  LOGOUT:
    ({ dispatch }) =>
    async (action) => {
      dispatch({ type: "LOGOUT_PENDING" });
      try {
        const { data } = await http.get("/api/user/logout");
        dispatch({ type: "LOGOUT_SUCCESS", payload: data });
        Router.push("/");
      } catch (err) {
        console.log(err);
        dispatch({ type: "LOGOUT_REJECTED", error: err });
      }
    },
};

const AuthProvider = ({ children }) => {
  const [user, dispatch] = useReducerAsync(
    reducer,
    initialState,
    asyncActionHandlers
  );

  useEffect(() => {
    dispatch({ type: "FETCH_USER_DATA" });
  }, []);

  return (
    <AuthContext.Provider value={user}>
      <AuthContextDispatcher.Provider value={dispatch}>
        {children}
      </AuthContextDispatcher.Provider>
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
export const useAuthActions = () => useContext(AuthContextDispatcher);
