import axios from "axios";
import { REACT_APP_URL } from "../apiURL";

const instance = axios.create({
    baseURL: REACT_APP_URL,
});

const createInquiry = ( data ) =>{
    instance.post('/api/inquiry', data)

}
export default createInquiry;
