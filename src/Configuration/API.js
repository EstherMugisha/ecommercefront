// import axios from 'axios'

// export const baseUrl = "http://localhost:8080/" 
// const api = axios.create({
//     baseURL: 'http://localhost:8080/',
//     headers: {
//         'Access-Control-Allow-Origin': '*',
//         'Content-Type': 'application/json',
//     },
// })
// api.interceptors.request.use(
//     config => {
//         const token = localStorage.getItem('token')
//         if (token) {
//             config.headers['Authorization'] = `Bearer ${token}`
//         }
//         return config
//     },
//     error => Promise.reject(error)
// )
// export default api
import React from 'react';

 const api = React.createContext([]);
 export default api;