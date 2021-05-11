import axios from 'axios';

const api = axios.create({
    baseURL: 'https://sds3-vinicius-perrone.herokuapp.com'
});


export default api;