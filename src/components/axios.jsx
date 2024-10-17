import axios from "axios";
import $U from "../config/urls";
import Cookies from "js-cookie";

const token = Cookies.get("authToken");

export const api = axios.create({
  baseURL: $U.BASE_URL,
  headers: {
    Authorization: `Token ${token}`,
    "Content-Type": "application/json",
  },
});
