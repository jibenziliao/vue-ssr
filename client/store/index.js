import Vuex from 'vuex'
import home from './modules/home'
import post from './modules/post'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

export default () => {
  return new Vuex.Store({
    modules: {
      home,
      post
    },
    state,
    mutations,
    getters,
    actions
  })
}
