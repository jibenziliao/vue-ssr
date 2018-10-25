import * as types from './mutationTypes'
export default {
  loadOrganizationDetail (state, { params, res }) {
    state.organizationDetail = res.data.data.organization
  },
  loadOrganizations (state, { params, res }) {
    state.organizations = res.data.enterprises
  },
  [types.REQUEST_BEGIN] (state) {
    state.pageLoading = true
    state.loadSuccess = false
  },

  [types.REQUEST_SUCCESS] (state, { params, res }) {
    state.pageLoading = false
    if (res.data) {
      state.loadSuccess = true
      params.resolveFn(state, res)
    } else {
      state.loadSuccess = false
      params.rejectFn(state, res)
    }
  },

  [types.REQUEST_FAILED] (state, { params, err }) {
    state.pageLoading = false
    state.loadSuccess = false
    params.rejectFn(state, err)
  }
}
