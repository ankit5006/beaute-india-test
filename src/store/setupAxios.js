
const setupAxios = (axios, store) => {
    axios.interceptors.request.use(
        config => {
            const { accessToken } = store.getState().auth;
            if (accessToken) {
                config.baseURL = process.env.REACT_APP_API_BASE_URL;
                config.headers["Content-Type"] = "application/json"
                config.headers["Accept"] = "application/json"
                config.headers["Authorization"] = `Bearer ${accessToken}`
            }
            return config;
        },
        error => Promise.reject(error)
    );

}

export default setupAxios;