import axios from "axios";


const api = axios.create({
    baseURL: ('https://vps20643.hostzonevps.net/json')

});


export  default api;