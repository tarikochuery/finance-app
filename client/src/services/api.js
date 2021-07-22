import axios from "axios";

const api = axios.create({
    baseURL: 'https://60e9c6392a2f.ngrok.io/'
})

export default api