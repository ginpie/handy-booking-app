import api from '../../lib/api';

const updateUserPassword = async (id, data) => {
    await api.put(`/users/${id}/password`, data)
}

export default updateUserPassword;