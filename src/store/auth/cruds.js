import axios from "axios";

const axiosApi = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
});

export const socialAuth = (url, payload) => {
    return axiosApi.post(url, payload);
}

export const login = (url, payload) => {
    return axiosApi.post(url, payload);
}

export const register = (url, payload) => {
    return axiosApi.post(url, payload);
}

export const logout = (url, config) => {
    axiosApi.defaults.headers.common["Authorization"] = config.headers.Authorization;
    return axiosApi.post(url);
}

export const getUser = (url, config) => {
    axiosApi.defaults.headers.common["Authorization"] = config.headers.Authorization;
    return axiosApi.post(url)
}