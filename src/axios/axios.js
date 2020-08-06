import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8082/'
});

export default instance;