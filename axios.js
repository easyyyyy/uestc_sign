const axios = require('axios')
const { cookie } = require('./cookie.js')

const instance = axios.create({
  withCredentials: true,
  headers: { 
    'Content-Type': 'application/json',
    'Cookie': cookie,
  },
})

instance.interceptors.request.use(
  (config) => {
    return config
  },
  error => Promise.reject(error)
)

instance.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => Promise.reject(error)
)

function request (url, method= 'GET', params, options) {
  const paramObj = Object.assign({}, params)
  const { queryParams, sendParams } = paramObj

  return instance.request({
    method,
    url,
    data: sendParams,
    params: queryParams,
    ...options,
  })
}

module.exports = request