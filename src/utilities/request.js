import axios from 'axios';
import notification from './notification';

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
});

instance.interceptors.response.use(
    response => response,
    error => {
        const errorMessage = error?.response?.data?.message || error?.message || 'Something went wrong'
        return notification('error', errorMessage)
    });

const all = async (url) => {
    return instance.get(url).then(res => res.data)
}

const post = async (url, data) => {
    return instance.post(url, data).then(res => res.data)
}

const store = async (url, data) => {
    return instance.post(url, data).then(res => res.data)
}

const update = async (url, data) => {
    return instance.put(url, data).then(res => res.data)
}

const show = async (url) => {
    return instance.get(url).then(res => res.data)
}

const destroy = async (url) => {
    return instance.delete(url).then(res => res.data)
}

const request = {
    all, post, store, update, show, destroy
}

export default request