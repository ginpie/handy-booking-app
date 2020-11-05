import axios from "axios";
import useAuth from "./useAuth";
require("dotenv").config();

const { REACT_APP_URL } = process.env;

const instance = axios.create({
  baseURL: REACT_APP_URL + "/api",
});

useAuth(instance);

export { instance, REACT_APP_URL };
