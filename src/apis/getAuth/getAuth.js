import api from '../../lib/api';

const getAuth = () => api.get('/auth');

export default getAuth;
