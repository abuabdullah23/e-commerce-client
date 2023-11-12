import axios from "axios";

const api = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_API_URL}/api/client`
})

export default api;