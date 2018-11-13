import * as types from '../mutationTypes'
import { commonRequest } from '../../api/api'
import { hostConfig } from '../../api/config'

const state = {
  info: {}, // 文章详细信息
  content: {}, // 文章全文等
  commentList: [],
  commentCount: 0,
  recommendEntry: []
}

const getters = {
  info: state => state.info,
  content: state => state.content,
  commentList: state => state.commentList,
  commentCount: state => state.commentCount,
  recommendEntry: state => state.recommendEntry
}

const actions = {
  getPostInfo ({ dispatch, commit }, params) {
    commit(types.FETCH_BEGIN)
    return commonRequest({
      url: `${hostConfig.post}/getDetailData`,
      method: 'get',
      params: {
        src: 'web',
        postId: params.id,
        type: 'entry'
      },
      side: params.side,
      cookies: params.cookies
    }, res => {
      commit('getPostInfo', { params, res })
      dispatch('getPostDetail', params)
    }, err => commit(types.FETCH_FAILED, { params, err }))
  },
  getPostDetail ({ commit }, params) {
    return commonRequest({
      url: `${hostConfig.post}/getDetailData`,
      method: 'get',
      params: {
        src: 'web',
        postId: params.id,
        type: 'entryView'
      },
      side: params.side,
      cookies: params.cookies
    }, res => {
      commit('getPostDetail', { params, res })
      commit(types.FETCH_SUCCESS)
    }, err => commit(types.FETCH_FAILED, { params, err }))
  },
  getEntryByIds ({ dispatch, commit }, params) {
    commit(types.FETCH_BEGIN)
    return commonRequest({
      url: `${hostConfig.timeline}/get_entry_by_ids`,
      method: 'get',
      params: {
        src: 'web',
        entryIds: params.id
      },
      side: params.side,
      cookies: params.cookies
    }, res => {
      commit('getEntryByIds', { params, res })
      dispatch('getEntryView', params)
    }, err => commit(types.FETCH_FAILED, { params, err }))
  },
  getEntryView ({ commit }, params) {
    return commonRequest({
      url: `${hostConfig.entry}/getEntryView`,
      method: 'get',
      params: {
        src: 'web',
        entryId: params.id
      },
      side: params.side,
      cookies: params.cookies
    }, res => {
      commit('getEntryView', { params, res })
      commit(types.FETCH_SUCCESS)
    }, err => commit(types.FETCH_FAILED, { params, err }))
  }
}

const mutations = {
  getPostInfo (state, { res }) {
    state.info = res.data.d
  },
  getPostDetail (state, { res }) {
    state.content = res.data.d.transcodeContent
  },
  getEntryByIds (state, { res }) {
    state.info = res.data.d.entrylist[0]
  },
  getEntryView (state, { res }) {
    state.content = res.data.d.content
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
