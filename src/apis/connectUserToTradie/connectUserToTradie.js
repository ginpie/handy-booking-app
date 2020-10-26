import api from '../../lib/api';
const connectUserToTradie = ( email ) =>{
    api.get('/auth')
    .then((response) => {
        const id = response.data.id
        api.post(`/users/${id}/tradies/${email}`)
    })
}
export default connectUserToTradie;


