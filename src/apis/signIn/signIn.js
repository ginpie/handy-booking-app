import api from '../../lib/api';
const signIn = ({ email, password }) =>api.post('/auth',{email,password});
export default signIn;
