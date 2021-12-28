import axios, { AxiosResponse } from 'axios'

const request = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL as string,
  timeout: 10000,
  transformRequest: [function (data) {
    return data
  }]
})

request.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  (response) => {
    const res = response.data
    return res
  },
  error => {
    console.log('err' + error)
    return Promise.reject(error)
  }
)

export default request