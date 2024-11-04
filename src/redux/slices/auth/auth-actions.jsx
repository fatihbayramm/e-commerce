import axios from "axios";
import $U from "../../../config/urls";
import Cookies from "js-cookie";
import {
  loginRequest,
  loginSuccess,
  loginFailure,
  loginClear,
  logout,
  registerRequest,
  registerSuccess,
  registerFailure,
  registerClear,
} from "./auth-slice";

export const register = (userData) => async (dispatch) => {
  try {
    dispatch(registerRequest());

    const response = await axios.post($U.REGISTER, userData, {
      headers: { "Content-Type": "application/json" },
    });

    const token = response.data.token;
    Cookies.set("authToken", token, { expires: 7 });

    dispatch(registerSuccess(response.data));
    window.location.href = "/";
  } catch (error) {
    dispatch(registerFailure(error.message || "Registration failed."));
    setTimeout(() => {
      dispatch(registerClear());
    }, 2000);
  }
};

export const login = (credentials) => async (dispatch) => {
  try {
    dispatch(loginRequest());

    const response = await axios.post($U.LOGIN, credentials, {
      headers: { "Content-Type": "application/json" },
    });

    const token = response.data.token;
    Cookies.set("authToken", token, { expires: 7 });
    console.log(response.data);
    dispatch(loginSuccess(response.data));
    window.location.href = "/";
  } catch (error) {
    dispatch(loginFailure(error.message || "Login failed."));
    setTimeout(() => {
      dispatch(loginClear());
    }, 2000);
  }
};

export const logoutUser = (dispatch) => {
  Cookies.remove("authToken");
  dispatch(logout());
};
