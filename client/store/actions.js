import { request, commonRequest } from '../api/api'
import * as types from './mutationTypes'

export default {
  action ({ commit }, params) {
    commit(types.REQUEST_BEGIN, params)
    commonRequest(params, res => commit(types.REQUEST_SUCCESS, { params, res }), err => commit(types.REQUEST_FAILED, { params, err }))
  },
  getOrganizationDetail ({ commit }, params) {
    return request({
      url: `/v2/public/organizations/${params.id}`,
      method: 'get',
      params: { id: params.id }
    }).then(res => commit('loadOrganizationDetail', { params, res })).catch(err => console.log(err))
  },
  getOrganizations ({ commit }, params) {
    return request({
      url: '/v1/service/23/enterprises',
      method: 'get',
      params: params
    }).then(res => commit('loadOrganizations', { params, res })).catch(err => console.log(err))
  }
}
