import { instance as api } from "../../lib/api";

const updateAccount = async (id, data) => {
  await api.put(`/users/${id}`, data);
};

export default updateAccount;
