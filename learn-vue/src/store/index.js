import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {
      name: '',
      age: ''
    },
    list: 'liszter'
  },
  mutations: {
    login(state, user) {
      state.userInfo.name = user.name
      state.userInfo.age = user.age
    },
    loginOut (state) {
      state.userInfo.name = ''
      state.userInfo.age = ''
      
    }
  },
  actions: {
  },
  modules: {
  }
})
