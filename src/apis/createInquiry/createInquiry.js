import axios from "axios";
import { REACT_APP_URL } from "../apiURL";
import api from '../../lib/api';
const instance = axios.create({
    baseURL: REACT_APP_URL,
});

const createInquiry = ( data ) =>{
    instance.post('/api/inquiry', data)
        .then((inquiryResData)=>{
            const inquiryId = inquiryResData.data._id
            api.get('/auth')
            .then((customerResData)=>{
                const customerEmail=customerResData.data.email
                api.post(`/customers/${customerEmail}/inquiry/${inquiryId}`)
                console.log(customerEmail)
                console.log(inquiryId)
            })
        })
}
export default createInquiry;
