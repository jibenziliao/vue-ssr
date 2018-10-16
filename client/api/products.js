import axios from 'axios'

export const request = axios.create({
  baseURL: 'https://api.chinko.cc'
})

export function getPorductsByStatus(sort, page, pageSize) {
  return request.get('/products', {
    params: {
      status: 'public',
      sort,
      page,
      pageSize
    }
  })
}