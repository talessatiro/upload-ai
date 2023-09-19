import axios from 'axios';

export const AxiosHttpClient = axios.create({
    baseURL: '/api',
});
