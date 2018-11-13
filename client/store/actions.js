import * as types from './mutationTypes'
export default {
  saveScroll ({ commit }, params) {
    commit(types.SAVE_SCROLL, { params })
  }
}
