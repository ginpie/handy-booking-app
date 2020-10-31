import { instance as api } from "../../lib/api";
const signUpUser = ({ email, password }) =>
  api.post("/users", { email, password });

export default signUpUser;
