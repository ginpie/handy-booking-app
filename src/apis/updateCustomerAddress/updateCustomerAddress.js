import api from '../../lib/api';

const updateCustomerAddress = async (email, data) => {
    await api.put(`/customers/${email}`, data)
}

export default updateCustomerAddress;