// 真实接口地址为https://api.yunlu6.com 这里在koa中使用了http-proxy-middleware。
export const API_URL = process.env.NODE_ENV === 'development' ? '' : 'http://localhost:8085'
export const REQUEST_TIME_OUT = 30000
export const COUNT_DOWN_SECOND = 60
export const AUTHORIZATION_TIME = 120
export const AUTH_URL = 'https://api.yunlu6.com'
