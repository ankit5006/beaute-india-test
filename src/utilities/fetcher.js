import axios from 'axios';

const query = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
});

const fetcher = (...args) => query.get(...args).then(res => res.data)

export default fetcher