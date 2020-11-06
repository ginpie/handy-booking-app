import { instance as api } from "../../lib/api";

const updateReview = async (id, review) => {
    try {
        await api.put(`/order/${id}/review`, review);
        
    } catch (error) {
        return null
    }
};

export default updateReview;