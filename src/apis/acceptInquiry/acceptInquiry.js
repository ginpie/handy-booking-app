import { instance as api } from "../../lib/api";

const acceptInquiry = async (id) => {
  await api.put(`/inquiry/${id}/accepted`);
};

export default acceptInquiry;