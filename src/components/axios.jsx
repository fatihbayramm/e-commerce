import axios from "axios";
import $U from "../config/urls";
import Cookies from "js-cookie";

export const request = (requestObject = {}) => {
  axios.defaults.baseURL = $U.BASE_URL;
  const token = Cookies.get("authToken");

  requestObject.headers = {
    "Content-Type": "application/json",
    Authorization: `Token ${token}`,
    ...requestObject.headers,
  };

  return axios(requestObject);
};
