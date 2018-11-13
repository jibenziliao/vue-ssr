import * as types from '../mutationTypes'
import { commonRequest } from '../../api/api'
import { hostConfig } from '../../api/config'

const state = {
  entryList: [],
  categoryList: [],
  category: '',
  rankIndex: 0
}

const getters = {
  entryList: state => state.entryList,
  categoryList: state => state.categoryList,
  category: state => state.category,
  rankIndex: state => state.rankIndex
}

const getRandIndex = arr => arr[arr.length - 1].rankIndex
const truncateArray = arr => {
  let tmpArr = arr.slice(0)
  tmpArr.splice(0, 1)
  return tmpArr
}

const actions = {
  getEntry ({ commit }, params) {
    commit(types.FETCH_BEGIN, null)
    return commonRequest({
      url: `${hostConfig.timeline}/get_entry_by_rank`,
      method: 'get',
      params: {
        src: 'web',
        limit: 20,
        category: 'all',
        sort: 'popular'
      },
      ...params
    }, res => {
      commit('getEntry', { params, res })
      commit(types.FETCH_SUCCESS, { params, res })
    }, err => commit(types.FETCH_FAILED, { params, err }))
  },
  getEntryNext ({ commit, state }, params) {
    commit(types.REQUEST_BEGIN, params)
    return commonRequest({
      url: `${hostConfig.timeline}/get_entry_by_rank`,
      method: 'get',
      params: {
        src: 'web',
        limit: 20,
        category: 'all',
        sort: 'popular',
        before: state.rankIndex
      },
      side: params.side
    }, res => {
      commit('getEntryNext', { params, res })
      commit(types.REQUEST_SUCCESS, { params, res })
    }, err => commit(types.REQUEST_FAILED, { params, err }))
  }
}

const mutations = {
  getEntry (state, { res }) {
    state.rankIndex = getRandIndex(res.data.d.entrylist)
    state.entryList = res.data.d.entrylist
  },
  getEntryNext (state, { res }) {
    state.rankIndex = getRandIndex(res.data.d.entrylist)
    state.entryList = [...state.entryList, ...truncateArray(res.data.d.entrylist)]
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
