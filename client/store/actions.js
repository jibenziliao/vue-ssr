import { getPorductsByStatus } from '../api/products'

export default {
  getProductList ({ commit }) {
    return getPorductsByStatus(1, 20).then((res) => {
      commit('getProducts', res.data.products)
    }).catch(e => {
      console.log(e)
    })
  }
}
