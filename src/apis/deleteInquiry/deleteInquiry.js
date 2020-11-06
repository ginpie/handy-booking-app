import { instance as api } from "../../lib/api";

const deleteInquiry = async (id) => {
  await api.put(`/inquiry/${id}/delete`);
};

export default deleteInquiry;