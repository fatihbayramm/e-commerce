import {
  loginRequest,
  loginSuccess,
  loginFailure,
  logout,
  registerRequest,
  registerSuccess,
  registerFailure,
} from "./auth-slice";
import axios from "axios";

export const register = (userData) => async (dispatch) => {
  try {
    dispatch(registerRequest());

    const response = await axios.post("/api/auth/register/", userData, {
      headers: { "Content-Type": "application/json" },
    });
    console.log(response.data);
    dispatch(registerSuccess(response.data));
  } catch (error) {
    dispatch(registerFailure(error.message || "Registration failed."));
  }
};

export const login = (credentials) => async (dispatch) => {
  try {
    dispatch(loginRequest());

    const response = await axios.post("/api/auth/login/", credentials, {
      headers: { "Content-Type": "application/json" },
    });
    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginFailure(error.message || "Registration failed."));
  }
};

export const logoutUser = (dispatch) => {
  dispatch(logout());
};
