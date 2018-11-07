import axios from 'axios'
import { REQUEST_TIME_OUT } from '../constants/constant'

const host = process.env.HOST || 'localhost'
const port = process.env.PORT || 8085

const commonRequest = (params, resolve, reject) => {
  return axios.request({
    url: params.url,
    method: params.method,
    baseURL: `${params.side === 'server' ? `http://${host}:${port}` : ''}/api`,
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
