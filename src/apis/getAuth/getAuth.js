// const getAuth = () =>
//   fetch("http://localhost:3000/api/auth", {
//     method: "GET",
//     headers: {
//       "X-Auth-Token": localStorage.getItem('token')
//     },
//   });
// export default getAuth;

import api from '../../lib/api';

const getAuth = () => api.get('/auth');

export default getAuth;
