import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://handy-booking-app-jp.herokuapp.com/api'
});

function getTradies() {
    return instance.get('/tradies')
        .then(res => {
            return res.data;
        })
        .catch(err => {
            console.log(err);
        });
}

export { getTradies };