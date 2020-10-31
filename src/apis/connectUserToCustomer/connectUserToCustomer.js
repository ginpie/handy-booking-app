import api from '../../lib/api';
const connectUserToCustomer = ( email ) =>{

    api.get('/auth')
    .then((response) => {
        const id = response.data.id
        api.post(`/users/${id}/customers/${email}`)
    })
}
export default connectUserToCustomer;


