import { instance as api } from "../../lib/api";

const getCurrentUser = async () => {
  const { data } = await api.get("/users/me");
  return data;
};

export default getCurrentUser;
