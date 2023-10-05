import axios from "axios";

// define app API url
// eslint-disable-next-line no-undef
axios.defaults.baseURL = "https://earthquake.usgs.gov";

// configure headers
axios.interceptors.request.use(
    (config) => {
        if (!config?.headers?.Authorization) {
            const token = localStorage.getItem("authToken");
            if (token) config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export const httpService = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
};


