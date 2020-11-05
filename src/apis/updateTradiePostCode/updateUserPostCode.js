import api from '../../lib/api';

const updateUserPostCode = async (id, newPostCode) => {
    await api.put(`/tradies/${id}`, newPostCode)
}

export default updateUserPostCode;