import api from '../../lib/api';
// const connectUserToCustomer = ({ email }) =>
//   fetch("http://localhost:3000/api/customers/", {
//     method: "POST",
//     body: JSON.stringify({
//       email,
//     }),
//     headers: {
//       "content-type": "application/json",
//     },
//   });
//先得到token ，token 转换成id， id放入users后面， customers后面放入email

// const id = token
const connectUserToCustomer = ({ config, email }) =>api.post('/users',{config},'/customers/',{email});
export default connectUserToCustomer;