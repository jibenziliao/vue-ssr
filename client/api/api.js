import axios from 'axios'
import { REQUEST_TIME_OUT } from '../constants/constant'

const host = process.env.HOST || 'localhost'
const port = process.env.PORT || 8085

const parseCookie = cookies => {
  let cookie = ''
  Object.keys(cookies).forEach(item => {
    cookie += item + '=' + cookies[item] + '; '
  })
  return cookie
}

const commonRequest = (params, resolve, reject) => {
  const cookie = parseCookie(params.cookies ? params.cookies : {})
  return axios.request({
    url: params.url,
    method: params.method,
    baseURL: `${params.side === 'server' ? `http://${host}:${port}` : ''}/api`,
    params: params.params || {},
    data: {
      ...(params.data || {})
    },
    header: {
      Cookie: cookie
    },
    timeout: REQUEST_TIME_OUT
  })
}

export {
  commonRequest
}
