// store/index.js
import Vue from 'vue'
import Vuex from 'vuex'
// vuex持久化插件
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex)

const state = {
  counter: 0
}

const actions = {
  add: ({commit}) => {
    return commit('add')
  }
}

const mutations = {
  add: (state) => {
    state.counter++
  }
}

const getters = {
  getCounter (state) {
    return state.counter
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  plugins: [
    createPersistedState({
      // 存储方式：localStorage、sessionStorage、cookies
      storage: window.sessionStorage,
      // 存储的 key 的key值
      key: "store",
      render(state) {
        // 要存储的数据：本项目采用es6扩展运算符的方式存储了state中所有的数据
        return { ...state };
      }
    })
  ]
})
