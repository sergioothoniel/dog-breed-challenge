import axios from "axios";

const api = axios.create({
    baseURL: "https://dogbreed-api.q9.com.br/"
})

export default api