import { instance as api } from "../../lib/api";

const getInquiries = async (email, role) => {
  const { data } = await api.get(`/${role}/${email}/inquiry`);
  return data
};

export default getInquiries;