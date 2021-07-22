import axios from "axios";

const api = axios.create({
    baseURL: 'https://31b4e1e43850.ngrok.io/'
})

export default api