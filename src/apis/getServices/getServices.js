import { REACT_APP_URL } from "../apiURL";

const axios = require("axios");

const instance = axios.create({
  baseURL: REACT_APP_URL,
});

async function getServices() {
  return instance
    .get("/api/services", {})
    .then((res) => res.data)
    .catch((err) => console.log(err));
}

export default getServices;
