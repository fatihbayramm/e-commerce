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
import $U from "../../../config/urls";

export const register = (userData) => async (dispatch) => {
  try {
    dispatch(registerRequest());

    const response = await axios.post($U.REGISTER, userData, {
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

    const response = await axios.post($U.LOGIN, credentials, {
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
