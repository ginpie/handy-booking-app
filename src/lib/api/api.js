import axios from "axios";
import useAuth from "./useAuth";
require("dotenv").config();

const { REACT_APP_URL } = process.env;

const instance = axios.create({
<<<<<<< HEAD
  baseURL: REACT_APP_URL + "/api",
=======
  baseURL: 'http://localhost:8000/api',
>>>>>>> 74c9e15616aaa753d5a01e7ee92f747283c4b038
});

useAuth(instance);

export { instance, REACT_APP_URL };
