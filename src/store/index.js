import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    reports: []
  },
  mutations: {
    ADD_REPORT: (state, report) => {
      state.reports.push(report)
    }
  },
  actions: {
    addReport: ({ commit }, report) => {
      commit('ADD_REPORT', report)
    }
  },
  modules: {}
})
