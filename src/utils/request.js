import axios from 'axios'
import proxy from '@/configs/host'

export const request = axios.create({
  baseURL: proxy.development.API,
  timeout: 10000,
  withCredentials: true
})
request.interceptors.request.use(
  (config) => {
    return Promise.resolve(config)
  },
  (err) => {
    console.log(err)

    return Promise.reject(err)
  }
)
request.interceptors.response.use(
  (res) => {
    if (res.status === 200) {
      return res.data
    }
    return Promise.reject(res)
  },
  (err) => {
    console.log(err)
    Promise.reject(err)
  }
)
