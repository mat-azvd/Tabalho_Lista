import axios from 'axios';

const api = axios.create({
    baseURL: 'http://5fac55d303a60500167e7d3f.mockapi.io/people'
})

export default api