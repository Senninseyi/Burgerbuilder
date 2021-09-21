import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-authentication-729ba-default-rtdb.firebaseio.com/',
})

export default instance