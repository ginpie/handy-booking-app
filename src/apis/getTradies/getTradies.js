import axios from "axios";
import { REACT_APP_URL } from "../apiURL";

const instance = axios.create({
  // baseURL: 'https://handy-booking-app-jp.herokuapp.com/api'
  baseURL: REACT_APP_URL,
});

async function getTradies() {
  return instance
    .get("/api/tradies")
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
}

// function getTradieAllInfo(id) {
//     return instance.get('/tradies', {
//         params: {
//             id,
//         }
//     })
//     .then(res => {
//         console.log(res);
//     })
//     .catch(err => {
//         console.log(err);
//     });
// }

export { getTradies };
