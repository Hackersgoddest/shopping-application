import axios from "axios"

const API = axios.create({
  baseURL: 'http://127.0.0.1:8000/',
  timeout: 1000,
})

API.interceptors.request.use(function (config) {
  // Do something before request is sent
  const token = localStorage.getItem('token')
  if(token)
    config.headers['Authorization'] = 'Token ' + token
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})
  


export default API;