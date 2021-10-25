import axios from 'axios'
 
const api = axios.create({
    baseURL: 'https://tarefas-backend-meth123.herokuapp.com/'
})
 
export default api;
