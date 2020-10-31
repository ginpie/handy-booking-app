import { instance as api } from "../../lib/api";
const signUpTradie = (tradieId) => api.post("/tradies", { tradieId });

export default signUpTradie;
