import * as types from './mutationTypes'
export default {
  [types.REQUEST_BEGIN] (state) {
    state.loading = true
    state.loadSuccess = false
  },

  [types.REQUEST_SUCCESS] (state, { params, res }) {
    state.loading = false
    if (res.data) {
      state.loadSuccess = true
      params.resolveFn(state, res)
    } else {
      state.loadSuccess = false
      params.rejectFn(state, res)
    }
  },

  [types.REQUEST_FAILED] (state, { params, err }) {
    state.loading = false
    state.loadSuccess = false
    params.rejectFn(state, err)
  },

  [types.FETCH_BEGIN] (state) {
    state.pageLoading = true
  },

  [types.FETCH_SUCCESS] (state, { params, res }) {
    if (res.data) {
      params.resolveFn(state, res)
    } else {
      params.rejectFn(state, res)
    }
  },

  [types.FETCH_FAILED] (state, { params, err }) {
    state.pageLoading = false
    params.rejectFn(state, err)
  }
}
