import { commonRequest } from '../api/api'
import * as types from './mutationTypes'

export default {
  action ({ commit }, params) {
    commit(types.REQUEST_BEGIN, params)
    commonRequest(params, res => commit(types.REQUEST_SUCCESS, { params, res }), err => commit(types.REQUEST_FAILED, { params, err }))
  },
  asyncAction ({ commit }, params) {
    commit(types.FETCH_BEGIN, params)
    commonRequest(params, res => commit(types.FETCH_SUCCESS, { params, res }), err => commit(types.FETCH_FAILED, { params, err }))
  }
}
