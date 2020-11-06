import { instance as api } from "../../lib/api";

const updateOrderComplete = async (id) => {
    await api.put(`/order/${id}/complete`);
};

export default updateOrderComplete;