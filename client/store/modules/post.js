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
  async getPostInfo ({ commit }, params) {
    commit(types.FETCH_BEGIN)
    let res = await commonRequest({
      url: `${hostConfig.post}/getDetailData`,
      method: 'get',
      params: {
        src: 'web',
        postId: params.id,
        type: 'entry'
      },
      side: params.side,
      cookies: params.cookies
    })
    let result = await commonRequest({
      url: `${hostConfig.post}/getDetailData`,
      method: 'get',
      params: {
        src: 'web',
        postId: params.id,
        type: 'entryView'
      },
      side: params.side,
      cookies: params.cookies
    })
    if (res.data && res.data.m === 'ok') {
      commit('getPostInfo', { params, res })
    }
    if (result.data && res.data.m === 'ok') {
      commit('getPostDetail', { params, res: result })
      commit(types.FETCH_SUCCESS)
    } else {
      commit(types.FETCH_FAILED)
    }
  },
  async getEntryByIds ({ commit }, params) {
    commit(types.FETCH_BEGIN)
    let res = await commonRequest({
      url: `${hostConfig.timeline}/get_entry_by_ids`,
      method: 'get',
      params: {
        src: 'web',
        entryIds: params.id
      },
      side: params.side,
      cookies: params.cookies
    })
    let result = await commonRequest({
      url: `${hostConfig.entry}/getEntryView`,
      method: 'get',
      params: {
        src: 'web',
        entryId: params.id
      },
      side: params.side,
      cookies: params.cookies
    })
    if (res.data && res.data.m === 'ok') {
      commit('getEntryByIds', { params, res })
    }
    if (result.data && result.data.m === 'ok') {
      commit('getEntryView', { params, res: result })
      commit(types.FETCH_SUCCESS)
    } else {
      commit(types.FETCH_FAILED)
    }
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
