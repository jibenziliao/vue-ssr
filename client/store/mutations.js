import * as types from './mutationTypes'
export default {
  [types.REQUEST_BEGIN] (state) {
    state.loading = true
  },

  [types.REQUEST_SUCCESS] (state) {
    state.loading = false
  },

  [types.REQUEST_FAILED] (state) {
    state.loading = false
  },

  [types.FETCH_BEGIN] (state) {
    state.pageLoading = true
  },

  [types.FETCH_SUCCESS] (state) {
    state.pageLoading = false
  },

  [types.FETCH_FAILED] (state) {
    state.pageLoading = false
  },

  [types.SAVE_SCROLL] (state, { params }) {
    state.scrollMap[params.name] = params.value
  }
}
