import api from '../../lib/api';
const signUpCustomer = (customerId) =>api.post('/customers',{customerId});
export default signUpCustomer;
