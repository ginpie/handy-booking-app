import api from '../../lib/api';
const signUpCustomer = (customerId) =>api.post('/customers',{customerId});
// fetch("http://localhost:3000/api/customers", {
//   method: "POST",
//   body: JSON.stringify({
//     customerId,
//   }),
//   headers: {
//     "content-type": "application/json",
//   },
// });

export default signUpCustomer;
