import { REACT_APP_URL } from "../apiURL";

const axios = require("axios");

const instance = axios.create({
  baseURL: "http://localhost:3000",
});

async function getReviews() {
  return instance
    .get("/api/order", {})
    .then((res) => res.data)
    .catch((err) => console.log(err));
}

export default getReviews;
