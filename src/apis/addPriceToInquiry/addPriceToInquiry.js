import { instance as api } from "../../lib/api";

const addPriceToInquiry = async (id, price) => {
  await api.put(`/inquiry/${id}/price`, price);
};

export default addPriceToInquiry;