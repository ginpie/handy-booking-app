import api from '../../lib/api';
const signIn = ({ email, password }) =>api.post('/auth',{email,password});
  // fetch("http://localhost:3000/api/auth", {
  //   method: "POST",
  //   body: JSON.stringify({
  //     email,
  //     password,
  //   }),
  //   headers: {
  //     "content-type": "application/json",
  //   },
  // });
export default signIn;
