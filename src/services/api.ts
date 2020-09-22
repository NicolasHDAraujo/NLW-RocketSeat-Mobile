import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.21.3333'//endereço que está no expo ip da maquina
})

export default api;