import axios from 'axios';

const instance = axios.create({
    // baseURL: 'https://handy-booking-app-jp.herokuapp.com/api'
    baseURL: 'http://localhost:8000/api'

});

function getTradies() {
    return instance.get('/tradies')
        .then(res => res.data)
        .catch(err => {
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