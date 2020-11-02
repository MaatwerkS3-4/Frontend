import axios from 'axios';

export const AXIOS = axios.create({
    baseURL: `http://localhost:8082`,
    headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000'
    }
});
