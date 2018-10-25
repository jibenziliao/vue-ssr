import axios from 'axios'
import { API_URL, REQUEST_TIME_OUT } from '../constants/constant'

const commonRequest = (params, resolve, reject) => {
  return axios.request({
    url: params.url,
    method: params.method,
    baseURL: `${API_URL}/api/`,
    params: params.params || {},
    data: {
      ...(params.data || {})
    },
    timeout: REQUEST_TIME_OUT
  }).then(res => resolve(res)).catch(err => reject(err))
}

export {
  commonRequest
}
