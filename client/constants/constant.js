// 真实接口地址为https://api.yunlu6.com 这里线上使用了nginx反向代理。
export const API_URL = process.env.NODE_ENV === 'development' ? '' : 'https://vue-ssr.keyy.xyz/nginx_proxy'
export const REQUEST_TIME_OUT = 30000
export const COUNT_DOWN_SECOND = 60
export const AUTHORIZATION_TIME = 120
export const AUTH_URL = 'https://api.yunlu6.com'
