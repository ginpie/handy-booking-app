import api from '../../lib/api';
const createInquiry = ( data ) =>{
    api.post('/inquiry',{data})
    // .then((inquiryID)=>{
    //     const code =inquiryID.data.id
    //     api.get('/auth')
    //     return code
    // })
    // .then((result)=>{
    //     const email = result.data.email
    //     api.post(`/customers/${email}/inquiry/${code}`)
    // })gi
}
export default createInquiry;
